import { useState } from "react";
import { ActivityIndicator, Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, Text, View, ViewStyle } from "react-native"
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri:string,
    styles:StyleProp<ViewStyle | ImageStyle | Array<StyleProp<ViewStyle | ImageStyle>>>;
}
export const FadeInImage = ({uri,styles = { }}:Props) => {


    const {opacity,fadeIn} =useAnimation();
    const [isLoading,setIsLoading] =  useState<boolean>(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    const onError = (error: NativeSyntheticEvent<ImageErrorEventData>)=>{
        console.log("error",error)
        setIsLoading(false);
    }
   
 
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                ...styles as any,
            }}>
                
                {
                    isLoading && 
                        <ActivityIndicator 
                            style={{ position: 'absolute' }} 
                            color="#2CB3FC"
                            size={ 30 }
                        />
                }
    
                <Animated.Image 
                    source={{ uri }}
                    onError={ onError } 
                    onLoad={ finishLoading }
                    style={[
                        styles,
                        {opacity}
                    ]}
                />
    
            </View>
    )

}