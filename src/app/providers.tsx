'use client';

import { ThemeProvider, type ThemeProviderProps } from 'next-themes';

interface ProviderProps extends ThemeProviderProps {}

export function Providers({ children }: ThemeProviderProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableColorScheme
            enableSystem
            storageKey="theme"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
