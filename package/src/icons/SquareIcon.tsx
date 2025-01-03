import * as React from 'react';
import { IconProps } from '../types';

export const SquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 994.6 995.7" 
        {...props} 
        ref={forwardedRef}><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g><path d="M828.4 0H166.2C74.4 0 0 74.4 0 166.2v662.2c0 91.8 74.4 166.2 166.2 166.2h662.2c91.8 0 166.2-74.4 166.2-166.2V166.2C994.6 74.4 920.2 0 828.4 0m-14.6 761.3c0 29-23.5 52.5-52.5 52.5h-528c-29 0-52.5-23.5-52.5-52.5v-528c0-29 23.5-52.5 52.5-52.5h528c29 0 52.5 23.5 52.5 52.5zm-422-129c-16.7 0-30.1-13.5-30.1-30.2V391.3c0-16.7 13.4-30.3 30.1-30.3h211.1c16.6 0 30.1 13.5 30.1 30.3V602c0 16.7-13.5 30.2-30.1 30.2H391.8z" style={{"fill":"#1a1a1a"}}/></g></switch></svg>
  )
);

SquareIcon.displayName = 'SquareIcon';