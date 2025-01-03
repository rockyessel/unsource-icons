import * as React from 'react';
import { IconProps } from '../types';

export const UnsrcIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 520 520" 
        {...props} 
        ref={forwardedRef}><g filter='url(#filter0_d_8_9)'><rect x='4' width='512' height='512' rx='20' fill='none' /><path d='M261.903 223.562C264.569 231.278 262.276 239.842 256.11 245.197L130.879 353.971C124.841 359.215 116.261 360.361 109.063 356.884L105.356 355.093C92.0456 348.665 90.0764 330.512 101.697 321.368L199.713 244.242C206.051 239.255 208.776 230.952 206.625 223.183L172.349 99.3626C169.074 87.5352 177.128 75.5717 189.32 74.1528L193.517 73.6643C202.84 72.5793 211.661 78.1227 214.725 86.9925L261.903 223.562ZM183.554 347.568C188.214 343.931 194.244 342.542 200.024 343.772L408.812 388.21C424.838 391.62 430.178 411.8 417.941 422.703L408.086 431.482C403.23 435.808 396.575 437.504 390.243 436.03L184.499 388.127C168.126 384.315 163.486 363.226 176.744 352.881L183.554 347.568Z' fill={'black'} /></g><defs><filter id='filter0_d_8_9' x='0' y='0' width='520' height='520' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB' ><feFlood floodOpacity='0' result='BackgroundImageFix' /><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' /><feOffset dy='4' /><feGaussianBlur stdDeviation='2' /><feComposite in2='hardAlpha' operator='out' /><feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' /><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_8_9' /><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_8_9' result='shape' /></filter></defs></svg>
  )
);

UnsrcIcon.displayName = 'UnsrcIcon';