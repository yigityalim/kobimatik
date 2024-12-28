import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(ids: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const options = {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);

        // Görünür olan elementler ilk render sırasında kontrol edilir
        const checkInitialVisibility = () => {
            ids.forEach((id) => {
                const element = document.getElementById(id);
                if (element && isElementInViewport(element)) {
                    setActiveId(id);
                }
            });
        };

        // Run the initial check after a short delay to ensure DOM is ready
        setTimeout(checkInitialVisibility, 100);

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observerRef.current?.observe(element);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [ids]);

    return activeId;
}

function isElementInViewport(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
