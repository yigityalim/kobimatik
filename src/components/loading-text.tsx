"use client";
import { useState, useEffect, type CSSProperties, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LoadingTextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    duration?: number;
}

export function LoadingText({ text, duration = 800, className, ...props }: LoadingTextProps) {
    const [dots, setDots] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
        }, duration / 3);

        return () => clearInterval(interval);
    }, [duration]);

    const loadingStyle = {
        display: 'inline-block',
        minWidth: '3em',
        textAlign: 'left',
    } satisfies CSSProperties

    return (
        <span className={cn(className)} {...props}>
            {text}
            <span style={loadingStyle}>{dots}</span>
        </span>
    );
}