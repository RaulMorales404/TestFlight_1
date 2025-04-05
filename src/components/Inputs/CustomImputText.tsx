import {
  ContainerTextInput,
  CustomText,
  FlexView,
} from '@components/styles/styles';
import {useState} from 'react';
import {TextInput, View, TouchableWithoutFeedback} from 'react-native';

interface Props {
  title: string;
  subt: string;
  keyInput: string;
  changeColor: boolean;
  updateState: (key: string, value: string) => void;

  w?: string;
}

export const CustomImputText = ({
  title = 'Flight number',
  subt = 'AM', 
  keyInput,
  w = '130px',
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
      height="64px"
      width={w}
      borderWidth="2px"
      borderRadius="10px"
      padding="15px"
      marginBottom="15px"
      borderColor="#000">
      <View>
        <CustomText
          fontSize="10px"
          fontWeight="400"
          color="#000000"
          lineHeight="13px">
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
          />
        ) : (
          <TouchableWithoutFeedback onPress={handleStartWriting}>
            <View>
              <FlexView
                direction={changeColor?"row": "row-reverse"}
                justifyContent="flex-start"
                alignSelf="flex-start">
                <CustomText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  fontSize="16px"
                  fontWeight="600"
                  color={changeColor ? '#000000' : '#000000'}
                  marginRight="5px"
                  lineHeight="18px">
                  {subt}
                </CustomText>
                <CustomText
                  fontSize="16px"
                  fontWeight="600"
                  color={changeColor ? '#0000004D' : '#0000004D' }
                  lineHeight="18px">
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
