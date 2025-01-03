import * as React from 'react';
import { IconProps } from '../types';

export const NuGetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><path d="M23.376 30h-9.065a6.72 6.72 0 0 1-6.623-6.8v-9.067a6.72 6.72 0 0 1 6.623-6.8h9.065a6.72 6.72 0 0 1 6.624 6.8V23.2a6.72 6.72 0 0 1-6.624 6.8" style={{"fill":"#004880"}}/><path d="M27.331 22.813a4.691 4.691 0 1 1-4.69-4.782 4.726 4.726 0 0 1 4.69 4.782m-13.978-12.08a2.987 2.987 0 1 1-2.953 2.983 2.965 2.965 0 0 1 2.957-2.983Z" style={{"fill":"#fff"}}/><path d="M2 4.444A2.407 2.407 0 1 0 4.406 2 2.426 2.426 0 0 0 2 4.444" style={{"fill":"#004880"}}/></svg>
  )
);

NuGetIcon.displayName = 'NuGetIcon';