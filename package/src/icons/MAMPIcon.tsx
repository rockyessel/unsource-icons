import * as React from 'react';
import { IconProps } from '../types';

export const MAMPIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-0.031 0.121 2.79 2.481" 
        {...props} 
        ref={forwardedRef}><path d='M.012 1.105C.04.911.257.304.867.19c.36-.068.804.119 1.115.435a1.3 1.3 0 0 0-.338.311.49.49 0 0 0 .353.342c-.135-.082-.22-.158-.273-.323.288-.343.597-.454.623-.456.241.192.411.543.405.913-.007.428-.24.868-.507 1.046-.036.017-.121-.029-.132-.079.055-.127.184-.435.2-.666.015-.221-.131-.351-.255-.191-.171.286-.245.642-.32 1.025-.126.036-.339.045-.431-.004-.012-.237.044-.643-.114-.785-.067-.061-.134-.033-.179.024-.114.141-.112.506-.089.743-.127.079-.343.062-.479.013a9 9 0 0 0-.288-1.174 2 2 0 0 0-.039.448c-.07-.057-.15-.357-.108-.707' fill='#257dae' /></svg>
  )
);

MAMPIcon.displayName = 'MAMPIcon';