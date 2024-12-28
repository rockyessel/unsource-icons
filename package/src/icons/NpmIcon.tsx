/**
 * Copyright (c). All rights reserved.
 * The SVG content and associated code are unmodified and belong to their respective owners.
 * 
 * This file is automatically generated.
 */

import * as React from 'react';
import { IconProps } from '../types';

/**
 * NpmIcon component.
 * - A React component that renders the provided SVG content.
 * - Accepts a `size` prop to control the width and height.
 */
export const NpmIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
    width={size} 
    height={size} 
    {...props} 
    ref={forwardedRef}>
    <g fill='none' fillRule='evenodd'><path fill='#D40001' d='M0 0h240v240H0z' /><path fill='#FFF' d='M167.18 79.28h-45.13V202.5H40V30h160v172.49h-32.82z' /></g></svg>
  )
);

NpmIcon.displayName = 'NpmIcon';