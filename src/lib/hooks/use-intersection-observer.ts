import React from 'react';

export function useIntersectionObserver(
    itemIds: string[],
    options: IntersectionObserverInit = {
        root: null,
        rootMargin: '100px 0px 0px 0px', // 100px üstündeki elemanlar ekranda olacak şekilde ayarlandı.
        threshold: 1, // araştırılan elemanın %100'ü ekranda olmak zorunda. 1 => 100%, 0.5 => 50%
    },
) {
    const [activeId, setActiveId] = React.useState<string | null>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const intersectingEntry = entries.find((entry) => entry.isIntersecting);
            if (intersectingEntry) {
                setActiveId(intersectingEntry.target.id);
            }
        }, options);

        itemIds?.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`Element not found: ${id}`);
            } else {
                observer.observe(element);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);

    return activeId;
}
