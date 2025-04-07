import {IconArrow, IconCalendar, IconLeftArrow} from '@assets/icons';
import {CartFlight} from '@components/cartFlight/CartFlight';
import {CustomText, FlexView} from '@components/styles/styles';
import { abbreviateName } from '@helpers/TypeFlight/TypeFlight';
import {useResultFlightViewModel} from '@viewmodels/useResultFlightViewModel';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';

export const ResultFlight = ({route}) => {
  const {showDetails, navigation, dataSearch, flightData} =
    useResultFlightViewModel(route);

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IconLeftArrow} style={{width: 31, height: 31}} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            {dataSearch.numberTicket ? (
              <CustomText
                fontSize="32px"
                fontWeight="700"
                textAlign="right"
                lineHeight="32px">
                AM {dataSearch.numberTicket}
              </CustomText>
            ) : (
              <FlexView direction="row" justifyContent="flex-end">
                <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  textAlign="right"
                  lineHeight="32px">
                  { abbreviateName(dataSearch.origin)}
                </CustomText>
                <Image
                  source={IconArrow}
                  style={{width: 20, height: 20, top: 4, left: -2}}
                />
                <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  textAlign="right"
                  lineHeight="32px">
                  {abbreviateName(dataSearch.destinate)}
                </CustomText>
              </FlexView>
            )}
          </View>

          <CustomText
            fontSize="16px"
            fontWeight="400"
            textAlign="right"
            lineHeight="20px">
            {dataSearch.date} |{' '}
            <Image source={IconCalendar} style={{width: 14, height: 14}} />{' '}
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
            {flightData.length} results
          </CustomText>
        </View>
      </FlexView>

      <Animated.FlatList
        ListEmptyComponent={
          <FlexView
            direction="column"
            justifyContent="center"
            alignSelf="center"
            height="400px">
            <CustomText
              fontSize="40px"
              fontWeight="400"
              color="#00000080"
              lineHeight="50px">
              No hay vuelos disponibles
            </CustomText>
          </FlexView>
        } // Aquí agregas el mensaje para cuando no haya datos
        data={flightData}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{paddingBottom: 0}} />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => showDetails(item)}>
            <CartFlight detailFligth={{...item.segment}} />
          </TouchableOpacity>
        )}
        style={{backgroundColor: 'white'}}
        ListFooterComponent={
          <View style={{height: 150, justifyContent: 'center'}} />
        }
        renderToHardwareTextureAndroid
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={30}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};
