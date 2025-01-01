import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'block h-10 w-full rounded-sm border border-gray-300 bg-white py-2 pr-3 pl-9 shadow-xs outline-offset-2 placeholder:italic placeholder:opacity-90 focus-within:outline-2 focus-within:outline-[#094ece80] focus:outline-[#094ece80] sm:text-sm dark:border-gray-400/20 dark:bg-[hsl(218,_13%,_10%)] dark:text-white dark:shadow-black dark:placeholder:opacity-40',
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = 'Input';

export { Input };
