'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

let tabs = [
    { id: 'world', label: 'World' },
    { id: 'ny', label: 'N.Y.' },
    { id: 'business', label: 'Business' },
];

export function Tabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            <div className="flex items-center justify-between gap-x-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            'relative z-2 w-full cursor-pointer rounded px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2',
                            activeTab === tab.id ? '' : 'hover:text-white/60',
                        )}
                        style={{
                            WebkitTapHighlightColor: 'transparent',
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="bg-accent-blue absolute inset-0 z-1 rounded mix-blend-difference dark:bg-blue-300"
                                //transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            <AnimatePresence>
                <div className="mt-5">
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.id}
                            className={cn(
                                'transition-all duration-300',
                                activeTab === tab.id ? 'block' : 'hidden',
                            )}
                        >
                            {tab.label} content
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
}
