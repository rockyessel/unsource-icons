import * as React from 'react';
import { IconProps } from '../types';

export const JuliaIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 512" 
        {...props} 
        ref={forwardedRef}><path fill='#fff' d='M2.93 0h506.14A2.93 2.93 0 0 1 512 2.93v506.14a2.93 2.93 0 0 1-2.93 2.93H2.93A2.93 2.93 0 0 1 0 509.07V2.93A2.93 2.93 0 0 1 2.93 0' /><path fill='#389826' d='M339 137a83 83 0 0 1-83 83 83 83 0 0 1-83-83 83 83 0 0 1 166 0' /><path fill='#cb3c33' d='M228 329a83 83 0 0 1-83 83 83 83 0 0 1-83-83 83 83 0 0 1 166 0' /><path fill='#9558b2' d='M450 329a83 83 0 0 1-83 83 83 83 0 0 1-83-83 83 83 0 0 1 166 0' /></svg>
  )
);

JuliaIcon.displayName = 'JuliaIcon';