import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'group select-none text-sm tracking-tight rounded-sm flex gap-2 items-center justify-center text-nowrap border transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed border-transparent active:[box-shadow:none] hover:[box-shadow:none] dark:hover:[box-shadow:none] px-3 h-9 w-full sm:w-fit z-1 cursor-pointer disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                default:
                    'bg-offgray-50/60 text-black border-offgray-200/50 bg-white dark:bg-background [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-2px_0_0_inset] dark:bg-offgray-300/5 dark:text-offgray-50 dark:border-offgray-400/20 dark:[box-shadow:hsl(218,_13%,_70%,_0.08)_0_-2px_0_0_inset]',
                secondary: 'bg-accent-blue dark:bg-offgray-900 text-white',
                ghost: 'text-black dark:text-offgray-50 border-transparent hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
