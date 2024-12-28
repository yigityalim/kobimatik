'use client';

import React from 'react';

export function Authors() {
    React.useEffect(() => {
        console.log(
            `
        
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

`,
        );
    }, []);

    return null;
}
