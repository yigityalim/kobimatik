'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { cn } from '@/lib/utils';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Status() {
    /*const { data, error, isLoading } = useSWR(
        'https://status.kobimatik.com/api/v2/status',
        fetcher,
    );*/

    // TODO: Remove this mock data
    const data = {
        status: {
            indicator: 'none',
        },
    };

    const error = false;
    const isLoading = false;

    return (
        <div className="mt-auto mr-auto w-fit md:mr-0">
            <Link
                className="border-border flex w-full items-center justify-between space-x-2 rounded-full border px-3 py-1.5"
                href="#" //https://status.kobimatik.com"
                target="_blank"
                rel="noreferrer"
            >
                <div>
                    <p className="font-mono text-xs">
                        {isLoading
                            ? 'Yükleniyor...'
                            : error
                              ? 'Hata'
                              : data.status.indicator === 'none'
                                ? 'Operasyonel'
                                : 'Kısmi Kesinti'}
                    </p>
                </div>
                <span className="relative ml-auto flex h-1.5 w-1.5">
                    <span
                        className={cn(
                            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                            { 'bg-gray-500': isLoading },
                            { 'bg-red-500': error || data.status.indicator !== 'none' },
                            { 'bg-green-500': !error && data.status.indicator === 'none' },
                            { 'bg-yellow-500': !error && data.status.indicator === 'minor' },
                            { 'bg-red-500': !error && data.status.indicator === 'major' },
                        )}
                    />
                    <span
                        className={cn(
                            'relative inline-flex h-1.5 w-1.5 rounded-full',
                            { 'bg-gray-500': isLoading },
                            { 'bg-red-500': error || data.status.indicator !== 'none' },
                            { 'bg-green-500': !error && data.status.indicator === 'none' },
                            { 'bg-yellow-500': !error && data.status.indicator === 'minor' },
                            { 'bg-red-500': !error && data.status.indicator === 'major' },
                        )}
                    />
                </span>
            </Link>
        </div>
    );
}
