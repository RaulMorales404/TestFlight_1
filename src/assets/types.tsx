import { SvgProps } from 'react-native-svg'; 

export interface CustomSvgProps extends SvgProps {
  type?: 'primary';
  bgColor?: string;
}