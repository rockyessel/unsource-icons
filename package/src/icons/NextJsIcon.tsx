/**
 * Copyright (c). All rights reserved.
 * The SVG content and associated code are unmodified and belong to their respective owners.
 * 
 * This file is automatically generated.
 */

import * as React from 'react';
import { IconProps } from '../types';

/**
 * NextJsIcon component.
 * - A React component that renders the provided SVG content.
 * - Accepts a `size` prop to control the width and height.
 */
export const NextJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
    width={size} 
    height={size} 
    {...props} 
    ref={forwardedRef}>
    <path d='M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z' /></svg>
  )
);

NextJsIcon.displayName = 'NextJsIcon';