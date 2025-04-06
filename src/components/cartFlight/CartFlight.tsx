import {IconRigthArrow} from '@assets/icons';
import {
  ContainerCard,
  CustomText,
  FlexView,
  RouteInfo,
} from '@components/styles/styles';
import {
  getStatusFlight,
  getTypeFlight,
  getTypeFlightName,
} from '@helpers/TypeFlight/TypeFlight';
import {format} from 'date-fns';
import {useState} from 'react';
import {Image, Switch, View} from 'react-native';

type FlightStatus = 'DELAYED' | 'ON_TIME' | 'ARRIVED';

interface CartFlightProps {
  detailFligth: {
    segmentCode: string;
    departureAirport: string;
    arrivalAirport: string;
    departureDateTime: Date; // Cambiado a Date
    arrivalDateTime: Date; // Cambiado a Date
    flightStatus: 'ARRIVED' | 'DEPARTED' | 'ON_TIME' | string;
    operatingCarrier: string;
    marketingCarrier: string;
    operatingFlightCode: string;
    marketingFlightCode: string;
    flightDurationInMinutes: number;
    aircraftType: string;
    stops: any[];
  };
}
export const CartFlight = ({detailFligth}: CartFlightProps) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const status: FlightStatus = detailFligth.flightStatus;
  return (
    <ContainerCard>
      <FlexView direction="row" justifyContent="space-between">
        <FlexView
          width="80px"
          height="28px"
          backgroundColor={getTypeFlight[status]}
          justifyContent="center"
          alignItems="center"
          borderBottomEndRadius="18px"
          borderTopLeftRadius="13px">
          <CustomText
            fontSize="11px"
            fontWeight="600"
            lineHeight="20px"
            color="#FFFFFF">
            {getTypeFlightName[status]}
          </CustomText>
        </FlexView>
        {isFavorite && (
          <FlexView direction="row" alignItems="center">
            <CustomText fontSize="11px" fontWeight="600" lineHeight="18px">
              Favorite
            </CustomText>
            <Switch
              trackColor={{false: '#ccc', true: '#000'}}
              thumbColor={isFavorite ? '#fff' : '#fff'}
              ios_backgroundColor="#ccc"
              onValueChange={setIsFavorite}
              value={isFavorite}
              style={{left: -3, transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
            />
          </FlexView>
        )}
      </FlexView>

      <View style={{flex: 3, justifyContent: 'center'}}>
        <FlexView
          direction="row"
          justifyContent="space-between"
          paddingTop="0px"
          paddingBottom="0px"
          paddingLeft="15px"
          paddingRight="15px">
          <View>
            <CustomText fontSize="22px" fontWeight="700" lineHeight="22px">
              {format(new Date(detailFligth.departureDateTime), 'HH:mm')}
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
              {format(new Date(detailFligth.arrivalDateTime), 'HH:mm')}
            </CustomText>
          </View>
        </FlexView>

        <FlexView
          direction="row"
          justifyContent="space-between"
          paddingTop="0px"
          paddingBottom="0px"
          paddingLeft="15px"
          paddingRight="15px">
          <View>
            <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
              {detailFligth.departureAirport}
            </CustomText>
          </View>
          <View>
            <CustomText
              fontSize="10px"
              fontWeight="600"
              lineHeight="22px"
              color="#00000066">
              {`${Math.floor(detailFligth.flightDurationInMinutes / 60)}h ${
                detailFligth.flightDurationInMinutes % 60
              }m`}
            </CustomText>
          </View>
          <View>
            <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
              {detailFligth.arrivalAirport}
            </CustomText>
          </View>
        </FlexView>
      </View>

      <RouteInfo>
        <FlexView
          direction="row"
          justifyContent="space-between"
          paddingTop="0px"
          paddingBottom="0px"
          paddingLeft="15px"
          paddingRight="15px">
          <View>
            <CustomText fontSize="12px" fontWeight="600" lineHeight="20px">
              {detailFligth.operatingCarrier} {detailFligth.operatingFlightCode}
            </CustomText>
          </View>
          <FlexView direction="row" alignItems="center">
            <CustomText
              fontSize="12px"
              fontWeight="400"
              marginTop="-1px"
              color="#00000080"
              textDecorationLine="underline"
              lineHeight="25px">
              Details
            </CustomText>
            <Image
              source={IconRigthArrow}
              style={{width: 8, height: 8, top: 1, left: 2}}
            />
          </FlexView>
        </FlexView>
      </RouteInfo>
    </ContainerCard>
  );
};
