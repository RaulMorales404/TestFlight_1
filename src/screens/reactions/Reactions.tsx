import Trend from '@components/trend/Trend'
import React from 'react'
import { Text, View } from 'react-native'


const Reactions = () => {
  return (
 
     <View style={{flex: 1}}>
  
      <View style={{paddingHorizontal: 5, paddingRight: 10}}>
        <Trend
          title={false}
          horizontal={false}
          imgCart={{
            width: 160,
            height: "100%",
          }}
          titleStyle={{ width:200,textAlign:'justify'}}
          descStyle={{}}
          containerCartStyle={{width: '100%',height:130}}
          containerStyle={{height: '100%',}}
        />
 
    </View>
   </View>
  )
}

export default Reactions