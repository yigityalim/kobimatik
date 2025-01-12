import { cn } from '@/lib/utils';
import type React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement>;

type SVGOrIcon = `${'dark' | 'light'}${number}` | string;

export type IconsTypes = {
  [key: SVGOrIcon]: React.FC<SVGProps>;
};

export const Icons = {
  Light404: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="632"
      height="329"
      viewBox="0 0 632 329"
      fill="none"
      className={cn('aspect-2 relative z-2 block w-full lg:w-[650px] dark:hidden', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_328)">
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#084CCF" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="472.5" y1="22" x2="472.5" y2="164" stroke="#084CCF" strokeWidth="3" />
        <line x1="471" y1="164.5" x2="621" y2="164.5" stroke="#084CCF" strokeWidth="3" />
        <path d="M619.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <path d="M619.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <line x1="619.5" y1="166" x2="619.5" y2="307" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 460 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 607 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 607 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="242.5" y1="13" x2="242.5" y2="316" stroke="#084CCF" strokeWidth="3" />
        <line x1="244" y1="314.5" x2="388" y2="314.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="389.5" y1="316" x2="389.5" y2="13" stroke="#084CCF" strokeWidth="3" />
        <line x1="244" y1="14.5" x2="388" y2="14.5" stroke="#084CCF" strokeWidth="3" />
        <line
          x1="242.348"
          y1="14.3417"
          x2="389.348"
          y2="315.342"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 377 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M378.5 313.5C378.5 319.575 383.425 324.5 389.5 324.5C395.575 324.5 400.5 319.575 400.5 313.5C400.5 307.425 395.575 302.5 389.5 302.5C383.425 302.5 378.5 307.425 378.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 230 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M231.5 313.5C231.5 319.575 236.425 324.5 242.5 324.5C248.575 324.5 253.5 319.575 253.5 313.5C253.5 307.425 248.575 302.5 242.5 302.5C236.425 302.5 231.5 307.425 231.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_328">
          <rect width="632" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Dark404: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="632"
      height="329"
      viewBox="0 0 632 329"
      fill="none"
      className={cn('aspect-2 relative z-2 hidden w-full lg:w-[650px] dark:block', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_3)">
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#4482F8" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="472.5" y1="22" x2="472.5" y2="164" stroke="#4482F8" strokeWidth="3" />
        <line x1="471" y1="164.5" x2="621" y2="164.5" stroke="#4482F8" strokeWidth="3" />
        <path d="M619.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <path d="M619.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <line x1="619.5" y1="166" x2="619.5" y2="307" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 460 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 607 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 607 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="242.5" y1="13" x2="242.5" y2="316" stroke="#4482F8" strokeWidth="3" />
        <line x1="244" y1="314.5" x2="388" y2="314.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="389.5" y1="316" x2="389.5" y2="13" stroke="#4482F8" strokeWidth="3" />
        <line x1="244" y1="14.5" x2="388" y2="14.5" stroke="#4482F8" strokeWidth="3" />
        <line
          x1="242.348"
          y1="14.3417"
          x2="389.348"
          y2="315.342"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 377 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M389.5 302.5C383.425 302.5 378.5 307.425 378.5 313.5C378.5 319.575 383.425 324.5 389.5 324.5C395.575 324.5 400.5 319.575 400.5 313.5C400.5 307.425 395.575 302.5 389.5 302.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 230 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M242.5 302.5C236.425 302.5 231.5 307.425 231.5 313.5C231.5 319.575 236.425 324.5 242.5 324.5C248.575 324.5 253.5 319.575 253.5 313.5C253.5 307.425 248.575 302.5 242.5 302.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="632" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Light401: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="678"
      height="329"
      viewBox="0 0 678 329"
      fill="none"
      className={cn('aspect-2 relative z-2 block w-full lg:w-[650px] dark:hidden', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_260)">
        <line x1="591.5" y1="165" x2="591.5" y2="15" stroke="#084CCF" strokeWidth="3" />
        <line x1="591.5" y1="168" x2="591.5" y2="318" stroke="#084CCF" strokeWidth="3" />
        <line x1="591.5" y1="165" x2="591.5" y2="168" stroke="#084CCF" strokeWidth="3" />
        <line x1="590.96" y1="16.1523" x2="475.727" y2="112.18" stroke="#084CCF" strokeWidth="3" />
        <line x1="590" y1="316.5" x2="516.5" y2="316.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="593" y1="316.5" x2="666.5" y2="316.5" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 121)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 579 26)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 505 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 653 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#084CCF" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="244.5" y1="13" x2="244.5" y2="316" stroke="#084CCF" strokeWidth="3" />
        <line x1="246" y1="314.5" x2="390" y2="314.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="391.5" y1="316" x2="391.5" y2="13" stroke="#084CCF" strokeWidth="3" />
        <line x1="246" y1="14.5" x2="390" y2="14.5" stroke="#084CCF" strokeWidth="3" />
        <line
          x1="244.348"
          y1="14.3417"
          x2="391.348"
          y2="315.342"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 379 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M380.5 313.5C380.5 319.575 385.425 324.5 391.5 324.5C397.575 324.5 402.5 319.575 402.5 313.5C402.5 307.425 397.575 302.5 391.5 302.5C385.425 302.5 380.5 307.425 380.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 232 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M233.5 313.5C233.5 319.575 238.425 324.5 244.5 324.5C250.575 324.5 255.5 319.575 255.5 313.5C255.5 307.425 250.575 302.5 244.5 302.5C238.425 302.5 233.5 307.425 233.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_260">
          <rect width="678" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Dark401: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="678"
      height="329"
      viewBox="0 0 678 329"
      fill="none"
      className={cn('aspect-2 relative z-2 hidden w-full lg:w-[650px] dark:block', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_64)">
        <line x1="591.5" y1="165" x2="591.5" y2="15" stroke="#4482F8" strokeWidth="3" />
        <line x1="591.5" y1="168" x2="591.5" y2="318" stroke="#4482F8" strokeWidth="3" />
        <line x1="591.5" y1="165" x2="591.5" y2="168" stroke="#4482F8" strokeWidth="3" />
        <line x1="590.96" y1="16.1523" x2="475.727" y2="112.18" stroke="#4482F8" strokeWidth="3" />
        <line x1="590" y1="316.5" x2="516.5" y2="316.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="593" y1="316.5" x2="666.5" y2="316.5" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 121)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 579 26)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 505 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 653 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#4482F8" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="244.5" y1="13" x2="244.5" y2="316" stroke="#4482F8" strokeWidth="3" />
        <line x1="246" y1="314.5" x2="390" y2="314.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="391.5" y1="316" x2="391.5" y2="13" stroke="#4482F8" strokeWidth="3" />
        <line x1="246" y1="14.5" x2="390" y2="14.5" stroke="#4482F8" strokeWidth="3" />
        <line
          x1="244.348"
          y1="14.3417"
          x2="391.348"
          y2="315.342"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 379 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M380.5 313.5C380.5 319.575 385.425 324.5 391.5 324.5C397.575 324.5 402.5 319.575 402.5 313.5C402.5 307.425 397.575 302.5 391.5 302.5C385.425 302.5 380.5 307.425 380.5 313.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 232 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M233.5 313.5C233.5 319.575 238.425 324.5 244.5 324.5C250.575 324.5 255.5 319.575 255.5 313.5C255.5 307.425 250.575 302.5 244.5 302.5C238.425 302.5 233.5 307.425 233.5 313.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_64">
          <rect width="678" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Light403: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="636"
      height="329"
      viewBox="0 0 636 329"
      fill="none"
      className={cn('aspect-2 relative z-2 block w-full lg:w-[650px] dark:hidden', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_293)">
        <line x1="475" y1="312.5" x2="625" y2="312.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="475" y1="162.5" x2="625" y2="162.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="623.5" y1="161" x2="623.5" y2="11" stroke="#084CCF" strokeWidth="3" />
        <line x1="623.5" y1="164" x2="623.5" y2="314" stroke="#084CCF" strokeWidth="3" />
        <line x1="472" y1="12.5" x2="622" y2="12.5" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 172)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 322)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 322)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 172)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#084CCF" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#084CCF" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#084CCF" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <line x1="244.5" y1="13" x2="244.5" y2="316" stroke="#084CCF" strokeWidth="3" />
        <line x1="246" y1="314.5" x2="390" y2="314.5" stroke="#084CCF" strokeWidth="3" />
        <line x1="391.5" y1="316" x2="391.5" y2="13" stroke="#084CCF" strokeWidth="3" />
        <line x1="246" y1="14.5" x2="390" y2="14.5" stroke="#084CCF" strokeWidth="3" />
        <line
          x1="244.348"
          y1="14.3417"
          x2="391.348"
          y2="315.342"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 379 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M380.5 313.5C380.5 319.575 385.425 324.5 391.5 324.5C397.575 324.5 402.5 319.575 402.5 313.5C402.5 307.425 397.575 302.5 391.5 302.5C385.425 302.5 380.5 307.425 380.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 232 24)"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
        <path
          d="M233.5 313.5C233.5 319.575 238.425 324.5 244.5 324.5C250.575 324.5 255.5 319.575 255.5 313.5C255.5 307.425 250.575 302.5 244.5 302.5C238.425 302.5 233.5 307.425 233.5 313.5Z"
          fill="#DAE4F8"
          stroke="#084CCF"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_293">
          <rect width="636" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Dark403: ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="636"
      height="329"
      viewBox="0 0 636 329"
      fill="none"
      className={cn('aspect-2 relative z-2 hidden w-full lg:w-[650px] dark:block', className)}
      {...props}
    >
      <g clipPath="url(#clip0_1_105)">
        <line x1="475" y1="312.5" x2="625" y2="312.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="475" y1="162.5" x2="625" y2="162.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="623.5" y1="161" x2="623.5" y2="11" stroke="#4482F8" strokeWidth="3" />
        <line x1="623.5" y1="164" x2="623.5" y2="314" stroke="#4482F8" strokeWidth="3" />
        <line x1="472" y1="12.5" x2="622" y2="12.5" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 172)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 611 322)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 322)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 172)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 464 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="12.5" y1="22" x2="12.5" y2="164" stroke="#4482F8" strokeWidth="3" />
        <line x1="11" y1="164.5" x2="161" y2="164.5" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <path d="M159.5 163V22" stroke="#4482F8" strokeWidth="3" />
        <line x1="159.5" y1="166" x2="159.5" y2="307" stroke="#4482F8" strokeWidth="3" />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 0 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 22)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 147 326)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <line x1="244.5" y1="13" x2="244.5" y2="316" stroke="#4482F8" strokeWidth="3" />
        <line x1="246" y1="314.5" x2="390" y2="314.5" stroke="#4482F8" strokeWidth="3" />
        <line x1="391.5" y1="316" x2="391.5" y2="13" stroke="#4482F8" strokeWidth="3" />
        <line x1="246" y1="14.5" x2="390" y2="14.5" stroke="#4482F8" strokeWidth="3" />
        <line
          x1="244.348"
          y1="14.3417"
          x2="391.348"
          y2="315.342"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 379 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M380.5 313.5C380.5 319.575 385.425 324.5 391.5 324.5C397.575 324.5 402.5 319.575 402.5 313.5C402.5 307.425 397.575 302.5 391.5 302.5C385.425 302.5 380.5 307.425 380.5 313.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="22"
          height="22"
          rx="11"
          transform="matrix(1 0 0 -1 232 24)"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
        <path
          d="M233.5 313.5C233.5 319.575 238.425 324.5 244.5 324.5C250.575 324.5 255.5 319.575 255.5 313.5C255.5 307.425 250.575 302.5 244.5 302.5C238.425 302.5 233.5 307.425 233.5 313.5Z"
          fill="#16181B"
          stroke="#4482F8"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_105">
          <rect width="636" height="329" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
} satisfies IconsTypes;
