import React, {useState} from 'react';
import {Image, TouchableOpacity, View, Text, Platform} from 'react-native';
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
  h?: string;
}

export const CustomImputDate = ({
  title = 'Flight number',
  updateState,
  keyInput,
  text = '500',
  h="64px",
  w = '130px',
  changeColor = false,
}: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);


  return (
    <ContainerTextInput
      height={h}
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
            fontSize={Platform.OS=='ios'?"10px":'12px'}
            lineHeight={Platform.OS=='ios'?"14px":'16px'}
            fontWeight="400"
            color="#000000"
            >
            {title}
          </CustomText>
          <FlexView direction="row">
            <CustomText
              fontSize={Platform.OS=='ios'?"16px":'18px'}
              lineHeight={Platform.OS=='ios'?"17px":'19px'}
              // fontSize="16px"
              //  marginRight="10px"
              fontWeight="600"
              color="#000000"
             
              >
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
