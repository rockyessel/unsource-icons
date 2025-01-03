import * as React from 'react';
import { IconProps } from '../types';

export const PaddleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 150 150" 
        {...props} 
        ref={forwardedRef}><path fill="none" d="M0 0h150v150H0z"/><path fill="#ffdd35" d="M13.81 14.19h123.98v123.98H13.81z"/><path fill="#040f11" d="M37.28 65.7v-3.41c4.2 0 8.23-1.66 11.21-4.61 2.97-2.94 4.64-6.95 4.65-11.13h3.17c0 4.19 1.66 8.2 4.64 11.15 2.98 2.97 7.02 4.63 11.22 4.62v3.41c-4.2 0-8.23 1.66-11.21 4.61a15.7 15.7 0 0 0-4.65 11.13h-3.17c0-4.19-1.66-8.2-4.64-11.15a15.95 15.95 0 0 0-11.22-4.62"/><path fill="#040f11" d="M53.14 40.64h27.27c13.32 0 22.84 9.45 22.84 23.3s-9.51 23.3-22.84 23.3H53.13v39.68h11.41v-29.6H80.4c19.16 0 34.26-14.99 34.26-33.38S99.56 30.56 80.4 30.56H53.13v10.08Z"/></svg>
  )
);

PaddleIcon.displayName = 'PaddleIcon';