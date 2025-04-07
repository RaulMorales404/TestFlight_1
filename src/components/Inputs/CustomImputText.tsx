import {
  ContainerTextInput,
  CustomText,
  FlexView,
} from '@components/styles/styles';
import {useState} from 'react';
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  subt: string;
  keyInput: string;
  changeColor: boolean;
  updateState: (key: string, value: string) => void;
  h?: string;
  w?: string;
}

export const CustomImputText = ({
  title = 'Flight number',
  subt = 'AM',
  keyInput,
  w = '130px',
  h = '64px',
  updateState,
  changeColor = false,
}: Props) => {
  const [write, setWrite] = useState(false);

  const handleStartWriting = () => {
    setWrite(true);
  };

  const handleEndWriting = () => {
    setWrite(false);
  };

  return (
    <ContainerTextInput
      activeOpacity={1}
      onPress={handleStartWriting}
      height={h}
      width={w}
      borderWidth="2px"
      borderRadius="10px"
      padding="15px"
      marginBottom="15px"
      borderColor="#000">
      <View>
        <CustomText
          fontSize={Platform.OS == 'ios' ? '10px' : '12px'}
          lineHeight={Platform.OS == 'ios' ? '13px' : '15px'}
          fontWeight="400"
          color="#000000">
          {title}
        </CustomText>

        {write ? (
          <TextInput
            value={subt}
            onChangeText={value => updateState(keyInput, value)}
            onBlur={handleEndWriting}
            onFocus={handleStartWriting}
            placeholder="Enter text"
            autoFocus={true}
            style={{top: Platform.OS == 'ios' ? 0 : -10,color:'#000'}}
          />
        ) : (
          <TouchableWithoutFeedback onPress={handleStartWriting}>
            <View>
              <FlexView
                direction={changeColor ? 'row' : 'row-reverse'}
                justifyContent="flex-start"
                alignSelf="flex-start">
                <CustomText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  fontSize={Platform.OS == 'ios' ? '16px' : '17px'}
                  lineHeight={Platform.OS == 'ios' ? '18px' : '22px'}
                  fontWeight="600"
                  color={changeColor ? '#000000' : '#000000'}
                  marginRight="5px">
                  {subt}
                </CustomText>
                <CustomText
                  fontSize={Platform.OS == 'ios' ? '16px' : '17px'}
                  lineHeight={Platform.OS == 'ios' ? '18px' : '22px'}
                  fontWeight="700"
                  color={changeColor ? '#0000004D' : '#0000004D'}>
                  {changeColor ? subt.substring(0, 3).toUpperCase() : 'AM '}
                </CustomText>
              </FlexView>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </ContainerTextInput>
  );
};
