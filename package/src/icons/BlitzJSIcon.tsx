import * as React from 'react';
import { IconProps } from '../types';

export const BlitzJSIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 500 500" 
        {...props} 
        ref={forwardedRef}><script /><g clipPath='url(#a)'><path d='M95.424 249.857h78.567a95.16 95.16 0 0 1 76.035 37.942l77.5 102.99a6.34 6.34 0 0 1 .569 6.724l-44.674 86.556c-2.143 4.152-7.889 4.641-10.702.909z' fill='url(#b)' /><g filter='url(#c)'><path d='M404.558 249.991h-78.567a95.16 95.16 0 0 1-76.035-37.942l-77.5-102.99a6.34 6.34 0 0 1-.568-6.724l44.673-86.556c2.144-4.152 7.889-4.64 10.703-.91z' fill='url(#d)' /></g></g><defs><linearGradient id='b' x1={163.936} y1={392.775} x2={316.429} y2={155.244} gradientUnits='userSpaceOnUse' ><stop stopColor='#6700EB' /><stop offset={1} stopColor='#45009D' /></linearGradient><linearGradient id='d' x1={336.047} y1={107.073} x2={183.554} y2={344.604} gradientUnits='userSpaceOnUse' ><stop stopColor='#6700EB' /><stop offset={1} stopColor='#45009D' /></linearGradient><clipPath id='a'><path fill='#fff' d='M0 0h500v500H0z' /></clipPath><filter id='c' x={71.181} y={-39.655} width={433.377} height={437.646} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB' ><feFlood floodOpacity={0} result='BackgroundImageFix' /><feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' /><feOffset dy={48} /><feGaussianBlur stdDeviation={50} /><feColorMatrix values='0 0 0 0 0.270588 0 0 0 0 0 0 0 0 0 0.615686 0 0 0 0.2 0' /><feBlend in2='BackgroundImageFix' result='effect1_dropShadow' /><feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' /></filter></defs></svg>
  )
);

BlitzJSIcon.displayName = 'BlitzJSIcon';