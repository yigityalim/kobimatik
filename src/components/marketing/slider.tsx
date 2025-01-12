'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FileCode2 } from 'lucide-react';

export interface SlideContent {
    title: string;
    description: string;
    imageUrl?: string;
}

export interface SliderProps {
    slides: SlideContent[];
}

const slides = [
    {
        title: 'Multibuffer editing',
        description: 'Multibuffers compose excerpts from across the codebase in one editable surface.',
        imageUrl: 'https://placehold.co/400',
    },
    {
        title: 'Code Intelligence',
        description: 'AI-powered code suggestions and auto-completion for faster development.',
        imageUrl: 'https://placehold.co/400',
    },
    {
        title: 'Collaborative Editing',
        description: 'Real-time collaboration features for team programming sessions.',
        imageUrl: 'https://placehold.co/400',
    },
    {
        title: 'Version Control',
        description: 'Integrated version control system for seamless code management.',
        imageUrl: 'https://placehold.co/400',
    },
    {
        title: 'Performance Profiling',
        description: 'Built-in tools for analyzing and optimizing code performance.',
        imageUrl: 'https://placehold.co/400',
    },
];

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slideRefs.current.findIndex((ref) => ref === entry.target);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: sliderRef.current,
                threshold: 0.5,
            },
        );

        slideRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSlide = (index: number) => {
        slideRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    return (
        <div className="p-4 flex flex-col gap-2 items-center justify-center">
            <div
                ref={sliderRef}
                className="w-full relative flex snap-x snap-mandatory space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        ref={(el) => (slideRefs.current[index] = el)}
                        className="flex flex-col w-full flex-none snap-center"
                    >
                        <SlideCard {...slide} />
                    </div>
                ))}
            </div>
            <SliderNavigation
                totalSlides={slides.length}
                activeIndex={activeIndex}
                onNavigate={scrollToSlide}
            />
        </div>
    );
}

export function SlideCard({ title, description, imageUrl }: SlideContent) {
    return (
        <div
            className="group w-full cursor-pointer flex flex-col overflow-clip rounded-sm border border-offgray-100 dark:border-gray-600/40 hover:border-blue-300 dark:hover:border-blue-300/50 [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-2px_0_0_inset] dark:[box-shadow:hsl(218,_13%,_70%,_0.05)_0_-2px_0_0_inset] hover:[box-shadow:_var(--sh-alt)] transition-colors fv-style">
            <div
                className="relative md:h-[220px] h-fit shrink-0 grow w-full flex items-center justify-center rounded-sm overflow-clip p-2">
                <div className="size-full flex items-center justify-center">
                    <div
                        className="relative group rounded-sm overflow-clip xl:min-h-[740px] xl:min-w-[1240px] border border-gray-300 dark:border-gray-300/20 shadow-xl">
                        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
                        <div
                            className="z-2 absolute inset-y-0 w-full flex flex-col items-center justify-center gap-6 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                            <button
                                type="button"
                                aria-label="Video reproduction control"
                                className="size-16 rounded-full relative overflow-clip flex items-center justify-center shadow-xl shadow-black/60 bg-accent-blue bg-linear-to-t from-black to-gray-900 outline outline-4 outline-blue-300/20 hover:outline-blue-300/40 hover:outline-[6px] hover:scale-105 transition-all cursor-pointer fv-style"
                            >
                                <div
                                    className="[z-index:-1] pointer-events-none absolute inset-0 bg-repeat bg-[size:180px] opacity-[0.035] dark:opacity-[0.015] [z-index:0] opacity-5!"></div>
                                <svg className="size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="1em"
                                     height="1em" fill="none">
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="pattern-diagonal-lines [--pattern-color:_#93c5fd] dark:[--pattern-color:_#51a2ff50] pattern-bg-white pattern-size-2 pattern-opacity-20 dark:[--pattern-bg-color:_transparent]! [z-index:-1] absolute inset-0 pointer-events-none select-none"></div>
            </div>
            <div
                className="p-4 h-fit shrink-0 flex flex-col gap-1.5 bg-cream-50/20 dark:bg-offgray-900/10 border-t border-offgray-100 dark:border-gray-400/15">
                <div className="flex flex-col">
                    <p className="flex items-center gap-2 text-sm text-black dark:text-white mb-1">
                        <span className="shrink-0">
                          <FileCode2 className="size-[14px] text-blue-400" />
                        </span>
                        {title}
                    </p>
                    <p className="text-left [text-wrap:pretty] text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}

interface SliderNavigationProps {
    totalSlides: number;
    activeIndex: number;
    onNavigate: (index: number) => void;
}

export function SliderNavigation({ totalSlides, activeIndex, onNavigate }: SliderNavigationProps) {
    return (
        <div className="flex justify-center gap-3 mb-2 mt-4 md:hidden">
            {Array.from({ length: totalSlides }, (_, i) => (
                <button
                    key={i}
                    type="button"
                    className={`relative h-0.5 w-4 ${
                        i === activeIndex ? 'bg-accent-blue dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => onNavigate(i)}
                >
                    <span className="absolute -inset-x-1.5 -inset-y-3"></span>
                </button>
            ))}
        </div>
    );
}

