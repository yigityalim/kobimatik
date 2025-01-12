import React from 'react';
import { cn } from '@/lib/utils';

type HighlightType = {
  regex: RegExp;
  className: string;
};

type HighlightedTextProps = {
  text: string;
  highlights?: HighlightType[];
  className?: string;
  blockquote?: boolean;
};

export function HighlightedText({
  text,
  highlights = [
    {
      regex: /\$([^$]+)\$/g,
      className: 'rounded-xs bg-blue-400/20 px-[1px]',
    },
    {
      regex: /\*\*([^*]+)\*\*/g,
      className: 'font-bold',
    },
    {
      regex: /__([^_]+)__/g,
      className: 'underline',
    },
    {
      regex: /\[\[([^\]]+)]]/g,
      className: 'text-accent-blue dark:text-blue-400',
    },
    {
      // <br> tag
      regex: /\\n/g,
      className: 'block',
    },
  ],
  className,
  blockquote = false,
}: Readonly<HighlightedTextProps>) {
  const parseText = (input: string): Array<{ type: string; content: string }> => {
    return highlights.reduce(
      (acc, highlight, index) => {
        return acc.flatMap((segment) => {
          if (segment.type !== 'text') return [segment];

          const parts = segment.content.split(highlight.regex);
          return parts.map((part, i) => ({
            type: i % 2 === 0 ? 'text' : `highlight-${index}`,
            content: part,
          }));
        });
      },
      [{ type: 'text', content: input }],
    );
  };

  const parsedText = parseText(text);

  const content = (
    <>
      {parsedText.map((segment, index) => {
        if (segment.type === 'text') {
          return <React.Fragment key={index}>{segment.content}</React.Fragment>;
        } else {
          const highlightIndex = parseInt(segment.type.split('-')[1]);
          return (
            <span key={index} className={highlights[highlightIndex].className}>
              {segment.content}
            </span>
          );
        }
      })}
    </>
  );

  if (blockquote) {
    return (
      <blockquote
        className={cn(
          'text-offgray-900 relative text-[.9375rem] tracking-tight [hanging-punctuation:_first_last;]',
          `before:absolute before:top-0 before:right-full before:content-['"']`,
          `after:content-['"']`,
          'dark:text-white',
          className,
        )}
      >
        {content}
      </blockquote>
    );
  }

  return <span className={cn('w-48', className)}>{content}</span>;
}
