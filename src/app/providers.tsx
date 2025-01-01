'use client';

import { ThemeProvider, type ThemeProviderProps } from 'next-themes';
import { I18nProviderClient } from '@/locales/client';

interface ProviderProps extends ThemeProviderProps {
    locale: string;
}

export function Providers({ children, locale }: Readonly<ProviderProps>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableColorScheme
            enableSystem
            storageKey="theme"
            disableTransitionOnChange
        >
            <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </ThemeProvider>
    );
}
