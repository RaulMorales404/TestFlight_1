import React from 'react';
import {SvgProps, Svg, Path} from 'react-native-svg';

function SvgSearch({...props}: SvgProps) {
  if (!props.width) {
    props.width = 24;
  }
  if (!props.height) {
    props.height = 24;
  }
  return (
    <Svg width={32} fill="none" height={32} {...props}>
      <Path
        stroke={props.color || '#595D5F'}
        stroke-width={2}
        strokeLinecap="round"
        strokeLinejoin="round" 
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19M22 22l-2-2"/>
          </Svg>
  );
}
export default React.memo(SvgSearch);