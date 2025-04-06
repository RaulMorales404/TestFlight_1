import styled from 'styled-components';
import {Text, View, Pressable, TextInput, TouchableOpacity} from 'react-native';

export const Container = styled.View<{
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch';
  backgroundColor?: string;
  width?: string;
  height?: string;
  flex: number;
  marginTop: string;
}>`
  flex: ${({flex = 1}) => flex};
  margin-right: 25px;
  margin-left: 25px;
  margin-top: ${({marginTop = '0'}) => marginTop};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #666;
  margin-bottom: 24px;
`;

export const Tabs = styled.View`
  flex-direction: row;

  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 24px;
  background: white;
  margin-top: -25px;
  padding: 4px;
`;

export const TabButton = styled.Pressable<{active: boolean}>`
  flex: 1;
  padding: 10px 10px;
  background-color: ${({active}) => (active ? 'black' : 'transparent')};
  align-items: center;
`;

export const TabText = styled.Text<{active: boolean}>`
  color: ${({active}) => (active ? 'white' : 'black')};
  font-weight: ${({active}) => (active ? 'bold' : 'normal')};
  transition: 5ms;
`;

export const InputWrapper = styled.View`
  gap: 12px;
  margin-bottom: 24px;
`;

export const StyledInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
`;

export const DateInput = styled.Pressable`
  border: 1px solid black;
  border-radius: 12px;
  padding: 14px;
`;

export const DateText = styled.Text`
  font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity<{
  backgroundColor?: string;
}>`
  background-color: ${({backgroundColor = 'blsck'}) => backgroundColor};
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

export const SearchButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const FooterText = styled.Text`
  text-align: center;
  color: #666;
  line-height: 25px;
`;

export const LinkText = styled.Text`
  color: black;
  font-weight: bold;
`;

export const FlexView = styled.View<{
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch';
  grow?: number;
  shrink?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  padding?: string;
  paddingTop?: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  margin?: string;
  marginBottom?: string;
  marginRigth?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderBottomEndRadius?: string;
  borderTopLeftRadius?: string;
  borderWidth: string;
  borderColor: string;
  borderRadius: string;
}>`
  flex-direction: ${({direction = 'column'}) => direction};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  align-items: ${({alignItems = 'flex-start'}) => alignItems};
  align-self: ${({alignSelf = 'auto'}) => alignSelf};
  flex-grow: ${({grow = 0}) => grow};
  flex-shrink: ${({shrink = 1}) => shrink};
  flex-wrap: ${({wrap = 'nowrap'}) => wrap};
  padding: ${({padding = '0'}) => padding};
  padding-top: ${({paddingTop = '0'}) => paddingTop};
  padding-bottom: ${({paddingBottom= '0'}) => paddingBottom};
  padding-left: ${({paddingLeft = '0'}) => paddingLeft};
  padding-right: ${({paddingRight = '0'}) => paddingRight};
  margin: ${({margin = '0'}) => margin};
  margin-right: ${({marginRigth = '0'}) => marginRigth};
  margin-bottom: ${({marginBottom = '0'}) => marginBottom};
  background-color: ${({backgroundColor = 'transparent'}) => backgroundColor};
  width: ${({width = 'auto'}) => width};
  border-radius: ${({borderRadius = '0'}) => borderRadius};
  height: ${({height = 'auto'}) => height};
  border-width: ${({borderWidth = '0'}) => borderWidth};
  border-color: ${({borderColor = 'transparent'}) => borderColor};
  border-bottom-end-radius: ${({borderBottomEndRadius = '0'}) =>
    borderBottomEndRadius};
  border-top-left-radius: ${({borderTopLeftRadius = '0'}) =>
    borderTopLeftRadius};
`;

export const ContainerCard = styled.View`
  width: 100%;
  border-width: 1.5px;
  border-color: '#000';
  height: 121px;
  border-radius: 18px;
  margin-bottom: 18px;
`;

export const CustomText = styled.Text<{
  fontSize?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  lineHeight?: string;
  textDecorationLine?: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}>`
  font-size: ${({fontSize = '16px'}) => fontSize};
  font-weight: ${({fontWeight = 'normal'}) => fontWeight};
  color: ${({color = '#000'}) => color};
  text-align: ${({textAlign = 'left'}) => textAlign};
  margin-top: ${({marginTop = '0'}) => marginTop};
  margin-bottom: ${({marginBottom = '0'}) => marginBottom};
  margin-left: ${({marginLeft = '0'}) => marginLeft};
  margin-right: ${({marginRight = '0'}) => marginRight};
  padding: ${({padding = '0'}) => padding};
  text-decoration-line: ${({textDecorationLine = ''}) => textDecorationLine};
  line-height: ${({lineHeight = '20px'}) => lineHeight};
  letter-spacing: ${({letterSpacing = '0'}) => letterSpacing};
  text-transform: ${({textTransform = 'none'}) => textTransform};
`;

export const RouteInfo = styled.View`
  border-top-width: 1px;
  border-top-color: #ccc;
`;

export const CustomButtonRadius = styled.TouchableOpacity<{
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  top?: string;
  left?: string;
}>`
  background-color: ${({backgroundColor = 'white'}) => backgroundColor};
  width: ${({width = '40px'}) => width};
  height: ${({height = '40px'}) => height};
  border-radius: ${({borderRadius = '100px'}) => borderRadius};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({top = '80px'}) => top};
  left: ${({left = '25px'}) => left};
`;

export const ContainerDetail = styled.View`
  background-color: white;
  display: flex;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding-left: 25px;
  padding-right: 25px;
  height: 550px;
`;

export const ContainerTextInput = styled.TouchableOpacity<{
  height?: string | number;
  width?: string | number;
  borderWidth?: string | number;
  borderRadius?: string | number;
  padding?: string | number;
  marginBottom?: string | number;
  borderColor?: string;
}>`
  height: ${({height = 60}) => height};
  width: ${({width = 130}) => width};
  border-width: ${({borderWidth = 2}) => borderWidth};
  border-radius: ${({borderRadius = 12}) => borderRadius};
  padding: ${({padding = 15}) => padding};
  margin-bottom: ${({marginBottom = 15}) => marginBottom};
  border-color: ${({borderColor = '#000'}) => borderColor};
`;
