import * as React from 'react';
import { IconProps } from '../types';

export const D3JsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        {...props} 
        ref={forwardedRef}><path d="M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938a6.375 6.375 0 1 1 0 12.75H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375M24 7.563A6.94 6.94 0 0 0 17.062.625h-8a13.4 13.4 0 0 1 4.686 5h3.314a1.94 1.94 0 0 1 0 3.876h-1.938a13.4 13.4 0 0 1 0 5h1.938a1.94 1.94 0 0 1 0 3.876h-3.314a13.4 13.4 0 0 1-4.686 5h8a6.939 6.939 0 0 0 5.333-11.375A6.95 6.95 0 0 0 24 7.563"/></svg>
  )
);

D3JsIcon.displayName = 'D3JsIcon';