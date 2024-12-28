import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
    if (typeof window === 'undefined') return false;
    const mediaQuery = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaQuery.matches);

    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return matches;
}
