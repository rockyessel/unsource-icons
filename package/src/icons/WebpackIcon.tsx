import * as React from 'react';
import { IconProps } from '../types';

export const WebpackIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-23.448 0 400 400" 
        {...props} 
        ref={forwardedRef}><path fill='#FFF' d='m176.552.066 176.552 99.869v199.803l-176.552 99.869L0 299.738V99.935z' /><path d='m321.59 292.81-139.175 78.814v-61.293l86.743-47.768zm9.527-8.594V119.523l-50.899 29.379v105.931zm-300.138 8.593 139.177 78.75v-61.294l-86.743-47.702zm-9.527-8.593V119.523l50.901 29.379v105.931zm5.931-175.352 142.772-80.749v59.297L78.683 137.71l-.734.4zm297.738 0L182.415 28.113V87.41l91.407 50.366.732.4z' fill='#8ED6FB' /><path d='m170.156 296.341-85.545-47.103v-93.206l85.545 49.368zm12.259 0 85.545-47.036v-93.273L182.415 205.4zM90.341 145.239l85.945-47.236 85.876 47.236-85.876 49.568z' fill='#1C78C0' /></svg>
  )
);

WebpackIcon.displayName = 'WebpackIcon';