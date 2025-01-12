'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface VideoPlayerProps extends React.ComponentProps<'video'> {
  className?: string;
}

export function VideoPlayer({ src, className, ...props }: Readonly<VideoPlayerProps>) {
  const [playing, setPlaying] = useState<boolean>(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      onClick={() => setPlaying(false)}
      className={cn(
        'group shadow-alt relative overflow-clip rounded-sm border border-gray-300 dark:border-gray-600/50',
        className,
      )}
    >
      <video
        {...props}
        className="h-full object-cover object-top"
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        autoPlay={playing}
      >
        <source src={src} type="video/mp4" />
      </video>
      <motion.button
        type="button"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={(e) => {
          e.stopPropagation();
          setPlaying(!playing);
        }}
        className={cn(
          'absolute inset-y-0 z-2 flex w-full flex-col items-center justify-center gap-6 opacity-0 transition-opacity duration-200 ease-in-out',
          'group-hover:opacity-100',
          'touch-device:opacity-100 touch-device:pointer-events-auto',
        )}
      >
        <div
          aria-label="Video reproduction control"
          className={cn(
            'bg-accent-blue relative flex size-16 cursor-pointer items-center justify-center overflow-clip rounded-full bg-linear-to-t from-black to-gray-900 shadow-xl shadow-black/60 outline outline-4 outline-blue-300/20 transition-all',
            'hover:scale-105 hover:outline-[6px] hover:outline-blue-300/40',
            'touch-device:scale-100 touch-device:outline-[6px] touch-device:outline-blue-300/40',
          )}
        >
          <div className="pointer-events-none absolute inset-0 [z-index:-1] [z-index:0] bg-[url(/noise.0e24d0e5.png)] bg-[size:180px] bg-repeat opacity-5! opacity-[0.035] dark:opacity-[0.015]" />
          <svg
            className="size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
          >
            {playing ? (
              <path
                fill="#fff"
                fillRule="evenodd"
                d={
                  playing
                    ? 'M15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z'
                    : 'M6 3 14 9-14 9z'
                }
                clipRule="evenodd"
              />
            ) : (
              <path fill="#fff" d="m6 3 14 9-14 9z" />
            )}
          </svg>
        </div>
      </motion.button>
    </motion.div>
  );
}
