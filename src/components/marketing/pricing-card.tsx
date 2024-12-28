import React from 'react';
import { cn } from '@/lib/utils';
import { HighlightedText } from '../ui/highlighed-text';
import { Button } from '@/components/ui/button';

type Review = {
    text: string;
    author: string;
    role: string;
};

type PricingCardProps = {
    id: string | number;
    name: string;
    price: number;
    description: string;
    review: Review;
    features: { id: number; name: string }[];
};

export const PricingCard: React.FC<PricingCardProps> = ({
    id,
    name,
    price,
    description,
    review,
    features,
}) => {
    return (
        <div
            id={String(id)}
            className="square-gradient-bg relative mt-4 flex shrink-0 flex-col justify-between gap-4 rounded-sm p-6 shadow-[var(--sh-alt)]"
        >
            <h3 className="text-offgray-800 dark:text-offgray-100 text-2xl font-bold">{name}</h3>
            <h6
                className={cn(
                    'text-offgray-700 dark:text-offgray-300 font-mono text-[.9375rem] font-bold underline underline-offset-2',
                    price === 0 ? 'text-accent-blue italic' : '',
                )}
            >
                {price === 0 ? 'Ücretsiz' : `₺${price}`}
            </h6>
            <div className="flex flex-col items-start justify-center gap-1 pt-4">
                <h6 className="text-offgray-600 dark:text-offgray-200 text-[.6875rem] font-bold tracking-wider uppercase">
                    Son Kullanıcı Yorumu
                </h6>
                <div className="scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 flex pb-4">
                    <div className="flex w-full flex-col items-start justify-center gap-2 py-2">
                        <div className="">
                            <HighlightedText text={review.text} />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-[36px] shrink-0 rounded-sm bg-blue-100 p-0.5 outline outline-1 outline-blue-300 dark:bg-blue-100/20 dark:outline-blue-300/50" />
                            <div className="mt-auto flex flex-col">
                                <p className="dark:text-offgray-100 -ml-[1.3px] text-sm tracking-tight text-black">
                                    {review.author}
                                </p>
                                <p className="text-offgray-700 dark:text-offgray-300 text-[.6875rem]">
                                    {review.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-offgray-600 px-0 pt-2 text-start font-mono text-[.6875rem] font-bold tracking-wider uppercase">
                Size Sağladığımız Özellikler
            </p>
            <div className="flex flex-col items-start gap-3">
                {features.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="text-offgray-800 dark:text-offgray-200">
                            {feature.name}
                        </span>
                    </div>
                ))}
            </div>
            <Button className="mt-4" variant="secondary">
                Şimdi Başla
            </Button>
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full fill-blue-500/50 stroke-blue-500/50 opacity-20 dark:opacity-10"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id={`pricing-pattern-${id}`}
                        x="0"
                        y="0"
                        width="13"
                        height="13"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 13V.5H13" fill="none" strokeDasharray="0" />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill={`url(#pricing-pattern-${id})`}
                />
            </svg>
        </div>
    );
};
