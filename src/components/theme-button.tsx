'use client';

import { useTheme } from 'next-themes';
import { useScopedI18n } from '@/locales/client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';

export function ThemeButton({
    className,
    ...props
}: Readonly<React.ComponentProps<typeof Button>>) {
    const { theme, setTheme } = useTheme();
    const t = useScopedI18n('menu');
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            type="button"
            {...props}
            className={cn(className)}
        >
            {t(theme === 'light' ? 'lightMode' : 'darkMode')}
        </Button>
    );
}
