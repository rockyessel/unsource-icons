/**
 * Copyright (c). All rights reserved.
 * The SVG content and associated code are unmodified and belong to their respective owners.
 * 
 * This file is automatically generated.
 */

import * as React from 'react';
import { IconProps } from '../types';

/**
 * CakePHPIcon component.
 * - A React component that renders the provided SVG content.
 * - Accepts a `size` prop to control the width and height.
 */
export const CakePHPIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
    width={size} 
    height={size} 
    {...props} 
    ref={forwardedRef}>
    <path d='M2 73.69V93c0 10.69 27.75 19.35 62 19.35V93C29.75 93 2 84.36 2 73.69m62-19.35 48.5 12c8.44-3.3 13.51-7.5 13.51-12V35c0-10.68-27.76-19.35-62-19.35S2 24.29 2 35v19.34C2 65 29.75 73.69 64 73.69zm48.49 31.4L64 73.69V93l48.5 12.05c8.43-3.27 13.5-7.46 13.5-12.05V73.69c0 4.55-5.07 8.74-13.51 12.05' fill='#d43d44' /></svg>
  )
);

CakePHPIcon.displayName = 'CakePHPIcon';