import React from 'react';
import {SvgProps, Svg, Path} from 'react-native-svg';
function SvgHeart({...props}: SvgProps) {
  if (!props.width) {
    props.width = 24;
  }
  if (!props.height) {
    props.height = 24;
  }

  return (
    <Svg viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M12.1 21.35L10.55 19.96C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 19.95L12.1 21.35Z"
        stroke={props.color || '#595D5F'}
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export default React.memo(SvgHeart);
