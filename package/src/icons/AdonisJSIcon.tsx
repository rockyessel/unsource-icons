import * as React from 'react';
import { IconProps } from '../types';

export const AdonisJSIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 128 128" 
        {...props} 
        ref={forwardedRef}><path fillRule='evenodd' clipRule='evenodd' d='M0 64c0 51.617 12.383 64 64 64s64-12.383 64-64S115.617 0 64 0 0 12.383 0 64m25.808 13.295 20.075-45.621C49.27 23.984 55.788 19.813 64 19.813s14.729 4.17 18.118 11.86l20.074 45.622c.912 2.216 1.694 5.084 1.694 7.56 0 11.34-7.951 19.291-19.292 19.291-3.862 0-6.93-.985-10.035-1.983-3.182-1.022-6.403-2.057-10.559-2.057-4.108 0-7.408 1.044-10.653 2.071-3.138.993-6.225 1.969-9.941 1.969-11.34 0-19.292-7.95-19.292-19.29 0-2.477.783-5.345 1.695-7.561zM64 39.625l-19.813 44.84c5.866-2.738 12.644-4.041 19.813-4.041 6.909 0 13.947 1.303 19.552 4.04z' fill='#5A45FF' /></svg>
  )
);

AdonisJSIcon.displayName = 'AdonisJSIcon';