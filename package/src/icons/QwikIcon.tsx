import * as React from 'react';
import { IconProps } from '../types';

export const QwikIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 128 128" 
        {...props} 
        ref={forwardedRef}><path stroke='none' fillRule='nonzero' fill='#18b6f6' fillOpacity='1' d='m95.672 112.555-17.43-17.34-.246.043v-.184L40.93 58.418l9.152-8.82-5.383-30.84L19.23 50.355c-4.324 4.368-5.156 11.508-2.023 16.75l15.918 26.422c2.434 4.051 6.258 6.657 11.598 6.465 11.304-.402 16.273-.402 16.273-.402l34.668 12.957.008.012Zm0 0' /><path stroke='none' fillRule='nonzero' fill='#ac7ef4' fillOpacity='1' d='M104.285 63.96c2.508-5.175 3.406-9.702.93-14.253l-3.524-6.484-1.828-3.328-.71-1.297-.067.074L89.5 22.043a13.4 13.4 0 0 0-11.766-6.723l-8.406.239-25.094.066a13.46 13.46 0 0 0-11.511 6.633L17.477 52.539l27.285-33.945 35.793 39.36-6.407 6.491 3.825 30.793.054-.07v.09h-.054l.074.074 2.984 2.906L95.47 112.34c.605.586 1.59-.117 1.187-.84L87.73 93.938' /><path stroke='none' fillRule='nonzero' fill='#fff' fillOpacity='1' d='m80.64 57.855-35.886-39.16 5.098 30.664-9.133 8.864L77.906 95.18 74.555 64.5l6.086-6.633Zm0 0' /></svg>
  )
);

QwikIcon.displayName = 'QwikIcon';