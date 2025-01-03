import * as React from 'react';
import { IconProps } from '../types';

export const CsharpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 512" 
        {...props} 
        ref={forwardedRef}><path fill='#fff' d='M2.93 0h506.14A2.93 2.93 0 0 1 512 2.93v506.14a2.93 2.93 0 0 1-2.93 2.93H2.93A2.93 2.93 0 0 1 0 509.07V2.93A2.93 2.93 0 0 1 2.93 0' /><path fill='#004482' d='m270.3 445 141.1-81.4c4.1-2.3 7.8-6.4 10.4-11l-166.3-96-166.3 96c2.7 4.6 6.4 8.7 10.4 11L240.8 445c8.1 4.7 21.4 4.7 29.5 0' /><path fill='#659AD2' d='M421.8 160.5c-2.7-4.6-6.4-8.7-10.4-11L270.3 68c-8.1-4.7-21.4-4.7-29.6 0l-141 81.5c-8.1 4.7-14.8 16.2-14.8 25.6V338c0 4.7 1.7 9.9 4.3 14.6l166.3-96z' /><path fill='none' stroke='#fff' strokeWidth='57' d='M342 256a86 86 0 0 1-86 86 86 86 0 0 1-86-86 86 86 0 0 1 172 0z' /><path fill='#00599C' d='M421.8 352.6c2.7-4.6 4.3-9.9 4.3-14.6V175.2c0-4.7-1.7-10-4.3-14.7l-166.3 96.1z' /><path stroke='#fff' strokeWidth='13' d='M350.5 237v39M331 257h39m27.5-20v39M378 257h39' /></svg>
  )
);

CsharpIcon.displayName = 'CsharpIcon';