import {IconArrival, IconDeparture} from '@assets/icons';
import {CustomText, FlexView} from '@components/styles/styles';
import {Image, Platform, View} from 'react-native';

interface Props {
  icon?: string;
  title: string;
  subTitle: string;
  data: {title: string; data: string}[];
}

export const CartDetailFlight = ({
  icon = 'Deperture',
  title,
  subTitle,
  data,
}: Props) => {
  const iconsSources = {
    Deperture: IconDeparture,
    Arrival: IconArrival,
  };

  return (
    <View>
      <FlexView direction="row" justifyContent="space-between" width="100%">
        <FlexView width="100%" direction="row" justifyContent="space-between">
          <FlexView direction="row">
            <Image
              source={iconsSources[icon]}
              style={{width: 20, height: 20}}
            />
            <CustomText
              fontSize="14px"
              marginLeft="7px"
              fontWeight="600"
              lineHeight="20px">
              {title}
            </CustomText>
          </FlexView>
          <FlexView>
            <CustomText
              fontSize="12px"
              fontWeight="400"
              color="#00000080"
              lineHeight="25px">
              {subTitle}
            </CustomText>
          </FlexView>
        </FlexView>
      </FlexView>

      <FlexView

        paddingTop={Platform.OS=='ios'? "5px":"5px"}
        paddingBottom={Platform.OS=='ios'? "10px":"10px"}
        paddingLeft={Platform.OS=='ios'? "15px":"15px"}
        paddingRight={Platform.OS=='ios'? "15px":"15px"}
        direction="row"
        borderRadius="8px"
        marginBottom="20px"
        borderBottomEndRadius="8px"
        borderTopLeftRadius="8px"
        backgroundColor="#F7F7F7">
        {data.map((item: {title: string; data: string}) => (
          <FlexView direction="column" marginRigth="36px" key={item.title}>
            <CustomText
              fontSize="12px"
              fontWeight="400"
              color="#000000"
              lineHeight="25px">
              {item.title}
            </CustomText>
            <CustomText
              fontSize="17px"
              fontWeight="600"
              color="#000000"
              lineHeight="25px">
              {item.data}
            </CustomText>
          </FlexView>
        ))}
      </FlexView>
    </View>
  );
};
