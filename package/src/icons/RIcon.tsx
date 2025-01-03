import * as React from 'react';
import { IconProps } from '../types';

export const RIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient id='a' x1='-134.811' y1='-103.284' x2='-134.772' y2='-103.323' gradientTransform='matrix(721.094 0 0 -482.937 97213.595 -49874.512)' gradientUnits='userSpaceOnUse' ><stop offset='0' stopColor='#cbced0' /><stop offset='1' stopColor='#84838b' /></linearGradient><linearGradient id='b' x1='-135.378' y1='-102.985' x2='-135.339' y2='-103.024' gradientTransform='matrix(398 0 0 -406.124 53893 -41812.836)' gradientUnits='userSpaceOnUse' ><stop offset='0' stopColor='#276dc3' /><stop offset='1' stopColor='#165caa' /></linearGradient></defs><path d='M16 23.956c-7.732 0-14-4.2-14-9.376S8.268 5.2 16 5.2s14 4.2 14 9.38-6.268 9.376-14 9.376M18.143 8.87C12.266 8.87 7.5 11.74 7.5 15.28s4.764 6.41 10.641 6.41 10.214-1.962 10.214-6.41-4.335-6.41-10.212-6.41' fill='url(#a)' /><path d='M23.321 19.726a11 11 0 0 1 1.34.5 2.6 2.6 0 0 1 .68.485 1.8 1.8 0 0 1 .311.447l3.339 5.63h-5.4l-2.524-4.74a6 6 0 0 0-.835-1.145.88.88 0 0 0-.641-.291h-1.28v6.173h-4.776V11.026h9.591s4.374.074 4.374 4.235-4.179 4.465-4.179 4.465m-2.077-5.28h-2.891v2.681h2.893a1.323 1.323 0 0 0 1.34-1.364 1.247 1.247 0 0 0-1.342-1.316Z' fill='url(#b)' /></svg>
  )
);

RIcon.displayName = 'RIcon';