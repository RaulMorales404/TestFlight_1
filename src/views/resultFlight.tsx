import { IconArrow, IconCalendar, IconLeftArrow } from "@assets/icons";
import { CartFlight } from "@components/cartFlight/CartFlight";
import { CustomText, FlexView } from "@components/styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

export const ResultFlight = () => {
  const navigation = useNavigation(); 
  const [isNumberFlight, setIsNumberFlight] = useState<boolean>(false);

  return (
    <View
      style={{
        justifyContent: 'flex-start',
        flex: 1,
        top: 57,
        marginHorizontal: 25,
      }}>
      <FlexView
        direction="row"
        justifyContent="space-between"
        marginBottom="25px">
        <View>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={IconLeftArrow} style={{width: 31, height: 31 }} />
            </TouchableOpacity>
        </View>
        <View>
          <View >
            {isNumberFlight ? (
              <CustomText
                fontSize="32px"
                fontWeight="700"
                textAlign="right"
                lineHeight="32px">
                AM 500
              </CustomText>
            ) : (
              <FlexView direction="row" justifyContent="flex-end" >
                <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  textAlign="right"
                  lineHeight="32px">
                  MEX
                </CustomText>
                <Image source={IconArrow} style={{width: 20, height: 20,top:4,left:-2 }} />
                 <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  textAlign="right"
                  lineHeight="32px">
                  CUN
                </CustomText>
              </FlexView>
            )}
          </View>

          <CustomText
            fontSize="16px"
            fontWeight="400"
            textAlign="right"
            lineHeight="20px">
            Tuesday, Nov 21 | <Image source={IconCalendar} style={{width: 14, height: 14 }} />{' '}
                
            <Text style={{textDecorationLine: 'underline'}}>Change</Text>
          </CustomText>
        </View>
      </FlexView>

      <FlexView
        direction="row"
        justifyContent="space-between"
        marginBottom="18px">
        <View>
          <CustomText fontSize="14px" fontWeight="600" lineHeight="20px">
            Mexico City to Cancún
          </CustomText>
        </View>
        <View>
          <CustomText
            fontSize="14px"
            fontWeight="400"
            color="#00000080"
            lineHeight="20px">
            4 results
          </CustomText>
        </View>
      </FlexView>
      <View></View>

      <Animated.FlatList
        data={[1, 2, 3, 4, 5, 6]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{paddingBottom: 0}} />}
        renderItem={() =><TouchableOpacity onPress={()=>navigation.navigate("DetailsFlight")}><CartFlight/></TouchableOpacity>}
        style={{backgroundColor: 'white'}}
        ListFooterComponent={
          <View style={{height: 150, justifyContent: 'center'}}>
            {/* <ActivityIndicator color={'#2CB3FC'} size={50} /> */}
          </View>
        }
        renderToHardwareTextureAndroid
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={30}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};
