import * as React from 'react';
import { IconProps } from '../types';

export const CycleJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 640 640" 
        {...props} 
        ref={forwardedRef}><script /><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='186.763' y1='637.383' x2='553.446' y2='2.269' ><stop offset='.415' stopColor='#51d3d9' /><stop offset='1' stopColor='#c8ff8c' /></linearGradient><path fill='url(#a)' d='M639.9 495.8c-.3 6.5-2.1 12.9-5.4 18.7l-60.6 105c-7.3 12.7-20.8 20.5-35.4 20.5H202.2c-14.6 0-28.1-7.8-35.4-20.4L5.5 340.5C1.8 334.1 0 327.1 0 320s1.4-14.5 5.7-21.7L166.9 20.4C174.2 7.8 187.7 0 202.2 0h336.3c14.6 0 28.1 7.8 35.4 20.4 0 0 58.3 95.5 62.5 102.3s3.5 15.4 3.5 22.4c0 6-1.7 14.2-3.3 20.7s-50.4 204.3-50.4 204.3L479.7 143.6H261.4L159.2 320l102.2 176.4h218.2z' /><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='534.386' y1='527.969' x2='631.412' y2='359.915' ><stop offset='.415' stopColor='#51d3d9' /><stop offset='1' stopColor='#5a919b' /></linearGradient><path fill='url(#b)' d='m562.1 319.9 74 156.9c5.7 12.1 5.1 26.2-1.6 37.8l-154.8-18.1z' /></svg>
  )
);

CycleJsIcon.displayName = 'CycleJsIcon';