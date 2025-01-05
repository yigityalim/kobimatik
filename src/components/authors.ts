'use client';

import { useRef, useEffect } from 'react';

export function Authors() {
    const ref = useRef<boolean | undefined>(undefined);

    useEffect(() => {
        if (!ref.current) {
            console.log(`
        
Proje ismi: KobiMatik

-------------------------------------

Projeyi Geliştirenler:

- Mehmet Yiğit Yalım
- Berkay Polat

Lisans

- GNU Affero General Public License v3.0 (https://www.gnu.org/licenses/agpl-3.0.html)

-------------------------------------

Site Linkleri:

1. https://www.mehmetyigityalim.com
2. https://www.berkaypolat.com.tr

`);
            ref.current = true;
        }
    }, []);

    return null;
}
