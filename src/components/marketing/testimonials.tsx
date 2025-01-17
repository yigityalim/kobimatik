import React from 'react';
import { Blockquote } from '@/components/blockquote';
import { Image } from '@/components/image';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

type CustomerTestimonial = {
  name: string;
  company: string;
  companyLogo?: string;
  customerImage?: string;
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  description: string;
};

type ReferenceLogo = {
  title: string;
  component?: React.ComponentType;
};

type TestimonialsProps = {
  title: string;
  description?: string;
  testimonials: {
    best: CustomerTestimonial;
    others: CustomerTestimonial[];
  };
  referenceLogos: ReferenceLogo[];
  className?: string;
};

export function Testimonials({
  title,
  description,
  testimonials,
  referenceLogos,
  className,
}: Readonly<TestimonialsProps>) {
  return (
    <div className={cn('relative px-4 py-8 sm:px-6 sm:pt-20 sm:pb-24', className)}>
      <div className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-col items-center gap-5 md:max-w-[1200px]">
        <hgroup className="mx-auto flex w-full max-w-xl flex-col items-center gap-1">
          <h2 className="font-lora h2 text-accent-blue mb-2.5 scroll-mt-24 text-center font-medium text-pretty dark:text-blue-300">
            {title}
          </h2>
          {description && <p className="text-center tracking-tight">{description}</p>}
        </hgroup>
        <div className="relative w-full overflow-clip">
          <div className="grid w-full grid-cols-3 items-center justify-center gap-8 sm:grid-cols-6 sm:gap-4">
            {referenceLogos.map((logo) => {
              const Logo = logo.component;

              if (Logo) {
                return (
                  <div key={logo.title} className="flex items-center justify-center">
                    <Logo />
                    <span className="sr-only">{logo.title}</span>
                  </div>
                );
              }

              return <span key={logo.title}>not implemented</span>;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 xl:flex-row">
          <Blockquote
            bgType="grid"
            className="size-full pb-0"
            from={
              <div className="flex items-center gap-3">
                <div className="h-[36px] w-[36px] shrink-0 rounded-sm bg-blue-100 p-0.5 outline outline-1 outline-blue-300 outline-dashed dark:bg-blue-100/20 dark:outline-blue-300/50">
                  <Image
                    removeStyles
                    alt={`${testimonials.best.name}'s picture`}
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    className="h-[32px] w-[32px] rounded-sm"
                    lightSrc="/mock-user.png"
                    darkSrc="/mock-user.png"
                  />
                </div>
                <div className="mt-auto flex flex-col">
                  <p className="dark:text-offgray-100 -ml-[1.3px] text-sm tracking-tight text-black">
                    {testimonials.best.name}
                  </p>
                  <p className="text-offgray-700 dark:text-offgray-300 text-[.6875rem]">
                    {testimonials.best.company}
                  </p>
                </div>
              </div>
            }
            title={<Icons.AnthropicLogo />}
            quote={testimonials.best.description}
          />
          <div className="grid grid-cols-1 px-4 lg:grid-cols-2">
            {testimonials.others.map((o) => (
              <div
                key={o.name}
                className={cn(
                  'relative flex w-full flex-col justify-between gap-8 border-r-0 border-b py-6 lg:border-r lg:pt-6 lg:pr-6 dark:border-gray-500/20',
                  // TODO: implement border and padding classes.
                  // FIXME: Şu an tasarım hatalı.
                )}
              >
                <blockquote className="relative text-sm tracking-tight [hanging-punctuation:_first_last;] before:absolute before:top-0 before:right-full before:content-['“'] after:content-['”']">
                  {o.description}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-[36px] w-[36px] shrink-0 rounded-sm bg-blue-50 p-0.5 outline-1 outline-blue-300 outline-dashed dark:bg-blue-100/20 dark:outline-blue-300/50">
                    <Image
                      removeStyles
                      alt={`${testimonials.best.name}'s picture`}
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      className="h-[32px] w-[32px] rounded-sm"
                      lightSrc="/mock-user.png"
                      darkSrc="/mock-user.png"
                    />
                  </div>
                  <div className="mt-auto flex flex-col">
                    <p className="dark:text-offgray-100 -ml-[1.3px] text-sm tracking-tight text-black">
                      {o.name}
                    </p>
                    <p className="text-offgray-700 dark:text-offgray-300 text-[.6875rem]">
                      {o.company}
                    </p>
                  </div>
                  {o.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
