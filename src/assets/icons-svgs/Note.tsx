import React from 'react';
import {SvgProps, Svg, Path} from 'react-native-svg';

function SvgNote({...props}: SvgProps) {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m31.414 7.585-6-6A2 2 0 0 0 24 1H3C1.346 1 0 2.345 0 4v24c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3V9c0-.531-.211-1.04-.586-1.415M30 28a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20v4h-.002a3 3 0 0 0 3 3H30zM26.998 9h-1c-1.102 0-2-.897-2-2H24V3l6 6zM15.5 8a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm-.5 2.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5M27.5 19a.5.5 0 0 1 0 1h-23a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-23a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-23a.5.5 0 0 1 0-1zm0-9a.5.5 0 0 1 0 1h-23a.5.5 0 1 1 0-1zM5 14h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h5v4H6z"
      />
    </Svg>
  );
}
export default React.memo(SvgNote);
