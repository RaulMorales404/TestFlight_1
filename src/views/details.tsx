import {IconLeftArrow} from '@assets/icons';
import {imgBackgroundColor} from '@assets/imgs';
import {CartDetailFlight} from '@components/cartDetailFlight/CartDetailFlight';
import {
  ContainerDetail,
  CustomButtonRadius,
  CustomText,
  FlexView,
} from '@components/styles/styles';
import {
  getStatusFlight,
  getTypeFlight,
  getTypeFlightName,
} from '@helpers/TypeFlight/TypeFlight';
import {useDetailFlightModelView} from '@viewmodels/useDetailFlightModelView';
import {format} from 'date-fns';
import {Image, View} from 'react-native';

export function DetailsFlight() {
  const {
    status,
    arrive,
    navigation,
    dataDetails,
    departure,
    getStatusFlight,
    getTypeFlightName,
    getTypeFlight,
  } = useDetailFlightModelView();

  return (
    <View style={{flex: 1}}>
      <FlexView>
        <Image
          source={imgBackgroundColor}
          style={{width: '100%', height: 400}}
        />

        <CustomButtonRadius onPress={() => navigation.goBack()}>
          <Image
            source={IconLeftArrow}
            style={{width: 31, height: 31, borderRadius: 100}}
          />
        </CustomButtonRadius>
      </FlexView>
      <ContainerDetail>
        <FlexView>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: '#CCCCCC',
              top: 10,
              marginBottom: 25,
              width: 36,
              height: 5,
            }}></View>

          <FlexView
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="20px">
            <View>
              <FlexView direction="row">
                <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  color="#0000004D"
                  textAlign="right"
                  lineHeight="32px">
                  {dataDetails.marketingCarrier}
                </CustomText>
                <CustomText
                  fontSize="32px"
                  fontWeight="700"
                  textAlign="right"
                  lineHeight="32px">
                  {' '}
                  {dataDetails.operatingFlightCode}
                </CustomText>
              </FlexView>

              <CustomText
                fontSize="16px"
                fontWeight="400"
                textAlign="right"
                lineHeight="20px">
                {format(dataDetails.arrivalDateTime, 'EEEE, MMM dd')}
              </CustomText>
            </View>

            <FlexView
              width="65px"
              height="28px"
              backgroundColor={getTypeFlight[status]}
              justifyContent="center"
              borderRadius="4px"
              borderBottomEndRadius="px"
              borderTopLeftRadius="4px"
              alignItems="center">
              <CustomText
                fontSize="11px"
                fontWeight="600"
                lineHeight="20px"
                color="#FFFFFF">
                {getTypeFlightName[status]}
              </CustomText>
            </FlexView>
          </FlexView>
          <View
            style={{
              width: 500,
              left: -25,
              borderWidth: 0.5,
              position: 'relative',
              borderColor: '#ccc',
            }}></View>
        </FlexView>
        <View
          style={{
            marginTop: 25,
            marginBottom: 25,
            borderBottomWidth: 1,
            borderColor: '#E9E9E9',
          }}>
          <FlexView
            direction="row"
            justifyContent="space-between"
            padding="0px 15px">
            <View>
              <CustomText fontSize="22px" fontWeight="700" lineHeight="22px">
                {format(new Date(dataDetails.departureDateTime), 'HH:mm')}
              </CustomText>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: 20,
              }}>
              <Image
                source={getStatusFlight[status].icon}
                style={{...getStatusFlight[status].size}}
              />
            </View>
            <View>
              <CustomText fontSize="22px" fontWeight="700" lineHeight="22px">
                {format(new Date(dataDetails.arrivalDateTime), 'HH:mm')}
              </CustomText>
            </View>
          </FlexView>

          <FlexView
            direction="row"
            justifyContent="space-between"
            padding="0px 15px">
            <View>
              <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
                {dataDetails.departureAirport}
              </CustomText>
            </View>
            <View>
              <CustomText
                fontSize="10px"
                fontWeight="600"
                lineHeight="22px"
                color="#00000066">
                {`${Math.floor(dataDetails.flightDurationInMinutes / 60)}h ${
                  dataDetails.flightDurationInMinutes % 60
                }m`}
              </CustomText>
            </View>
            <View style={{marginBottom: 25}}>
              <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
                {dataDetails.arrivalAirport}
              </CustomText>
            </View>
          </FlexView>
        </View>

        <CustomText
          marginBottom="15px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="24px">
          Flight details
        </CustomText>
        <CartDetailFlight
          title={'Departure'}
          subTitle={'Ciudad de México - AICM'}
          data={departure}
        />
        <CartDetailFlight
          icon="Arrival"
          title={'Arrival'}
          subTitle={`${dataDetails.destination}  - Terminal ${dataDetails.arrivalTerminal}`}
          data={arrive}
        />
      </ContainerDetail>
    </View>
  );
}
