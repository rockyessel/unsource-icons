import * as React from 'react';
import { IconProps } from '../types';

export const AdyenIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 101.7 32.8" 
        {...props} 
        ref={forwardedRef}><path d="M14.3 7.5H.3V12h9.2c.6 0 1 .5 1 1v7.9h-2c-.6 0-1-.5-1-1v-5.7H3.6c-2 0-3.6 1.6-3.6 3.6v4c0 2 1.6 3.6 3.6 3.6h14.3V11.1c0-2-1.6-3.6-3.6-3.6m17.1 13.4h-2c-.6 0-1-.5-1-1V7.5h-3.9c-2 0-3.6 1.6-3.6 3.6v10.7c0 2 1.6 3.6 3.6 3.6h14.3V0h-7.5zm20.9 0h-2c-.6 0-1-.5-1-1V7.5h-7.5v14.3c0 2 1.6 3.6 3.6 3.6h6.9v2.2H42.1v5.2h14.1c2 0 3.6-1.6 3.6-3.6V7.5h-7.5zM77.1 7.5H62.7v14.3c0 2 1.6 3.6 3.6 3.6h14.1v-4.5h-9.2c-.6 0-1-.5-1-1V12h2c.6 0 1 .5 1 1v5.7h3.9c2 0 3.6-1.6 3.6-3.6v-4c0-2-1.6-3.6-3.6-3.6m20.9 0H83.7v17.9h7.5V12h2c.6 0 1 .5 1 1v12.4h7.5V11.1c-.1-2-1.7-3.6-3.7-3.6" fill="#35b454"/></svg>
  )
);

AdyenIcon.displayName = 'AdyenIcon';