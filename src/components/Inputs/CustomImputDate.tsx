import React, {useState} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {ContainerTextInput, CustomText, FlexView} from '../styles/styles';
import {IconCalendar} from '../../assets/icons';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

interface Props {
  updateState: (key: string, value: string) => void;
  title: string;
  text: string;
  keyInput:string;
  changeColor: boolean;
  w?: string;
}

export const CustomImputDate = ({
  title = 'Flight number',
  updateState,
  keyInput,
  text = '500',
  w = '130px',
  changeColor = false,
}: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  

 
 
 

  return (
    <ContainerTextInput
      height="64px"
      width={w}
      borderWidth="2px"
      borderRadius="10px"
      padding="15px"
      marginBottom="15px"
      borderColor="#000">
      <FlexView
        direction="row"
        alignItems="center"
        justifyContent="space-between">
        <FlexView direction="column">
          <CustomText
            fontSize="10px"
            fontWeight="400"
            color="#000000"
            lineHeight="14px">
            {title}
          </CustomText>
          <FlexView direction="row">
            <CustomText
              fontSize="16px"
              fontWeight="600"
              color="#000000"
              marginRight="10px"
              lineHeight="18px">
              {text}
            </CustomText>
          </FlexView>
        </FlexView>

        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image source={IconCalendar} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </FlexView>

      {/* Mostrar el calendario al abrir */}
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          const formattedDate = format(date, 'EEEE, MMM dd');
          console.log(formattedDate);
          updateState(keyInput,formattedDate)
        }}
        onCancel={() => setOpen(false)}
      />
    </ContainerTextInput>
  );
};
