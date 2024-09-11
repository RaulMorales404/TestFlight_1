import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}>
    <path
      stroke="#82878A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m.755 9.245 8.49-8.49m0 8.49L.755.755"
    />
  </svg>
);
export default SvgCloseIcon;
