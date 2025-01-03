import * as React from 'react';
import { IconProps } from '../types';

export const RocketIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 48 48" 
        {...props} 
        ref={forwardedRef}><path d='M0 0h48v48H0z' fill='#D33948' /><path d='M40 8c.698 6.562-1.283 10.633-5 16-1.762 2.078-3.585 4.081-5.434 6.082-1.54 1.885-2.387 3.472-3.253 5.73C24.959 39.1 24.013 40.235 21 42l-2-6-7 2c-1.097-3.29-.8-4.713 0-8l-6-1c1.465-3.861 3.396-5.112 7-7l2-.875c2.19-1.107 2.19-1.107 4.188-3.375C25.466 11.61 31.2 7.837 40 8' fill='#FDF7F7' /><path d='M31 18c.227 2.804.34 4.462-1.187 6.875C28 26 28 26 25.313 25.688L23 25c.256-2.343.593-4.678 1-7 2.667-1.333 4.167-.671 7 0' fill='#D64856' /><path d='m10 35 2 4a564 564 0 0 1-4.312 4.5l-2.426 2.531C3 48 3 48 0 48c1.563-4.22 4.62-6.184 8-9 1.373-2.15 1.373-2.15 2-4' fill='#E48892' /><path d='m24 19 5 4-1 3-5-1a100 100 0 0 1 0-5z' fill='#D43746' /><path d='M12 40c-1.491 3.795-3.757 5.61-7 8l-2-1a517 517 0 0 1 3.375-3.5l1.898-1.969C10 40 10 40 12 40' fill='#D74E5B' /><path d='m7 37 2 2-8 7c0-3 0-3 1.313-4.605L4 39.812l1.688-1.605z' fill='#D85561' /></svg>
  )
);

RocketIcon.displayName = 'RocketIcon';