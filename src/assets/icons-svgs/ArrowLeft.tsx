 

import React from 'react';
import {SvgProps, Svg, Path} from 'react-native-svg';

function SvgArrowLeft({...props}: SvgProps) {
  if (!props.width) {
    props.width = 24;
  }
  if (!props.height) {
    props.height = 24;
  }
  return (
    <Svg   fill="none"  {...props}>
      <Path
        stroke={props.color || '#595D5F'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
          
          />
    </Svg>
  );
}
export default React.memo(SvgArrowLeft);