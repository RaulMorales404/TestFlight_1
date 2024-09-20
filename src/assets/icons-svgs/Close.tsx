import React from 'react';
import {SvgProps, Svg,  Path} from 'react-native-svg';

function SvgClose({...props}: SvgProps) {
  if (!props.width) {
    props.width = 24;
  }
  if (!props.height) {
    props.height = 24;
  }
  return (
    <Svg viewBox="0 0 7 8" fill="none" {...props}>
      <Path
        d="M.5 7l6-6m0 6l-6-6"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default React.memo(SvgClose);

