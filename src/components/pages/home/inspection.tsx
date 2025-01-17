import { Section } from '@/components/pages/section';
import { Noise } from '@/components/Noise';
import { VideoPlayer } from '@/components/video-player';
import { PersonStanding, Sparkles, Users } from 'lucide-react';

const details = [
  {
    icon: Users,
    title: 'Pratik',
    description: 'Programı kullanmak için bir hesap oluşturmanız yeterli. Hemen başlayın.',
  },
  {
    icon: PersonStanding,
    title: 'Kolay',
    description: 'Kullanımı kolay arayüzü ile herkesin rahatlıkla kullanabileceği bir program.',
  },
  {
    icon: Sparkles,
    title: 'Etkili',
    description:
      'İşletmeniz için en uygun çözümleri sunarak işletmenizin daha verimli olmasını sağlar.',
  },
];

export function Inspection() {
  return (
    <Section className="-mt-[8rem] origin-top bg-transparent px-8 pb-8 sm:pb-20 md:-mt-[7.8rem] lg:-mt-[7.3rem] xl:-mt-[6.1rem]">
      <div className="group sh-default relative mx-auto w-full max-w-(--breakpoint-sm) overflow-hidden rounded-sm border border-gray-300/90 bg-gray-50/80 md:max-w-[1200px] dark:border-gray-600/60 dark:bg-[hsl(218,_13%,_6%,_.95)]">
        <Noise />
        <div className="grid-border-color relative hidden grid-cols-1 content-end divide-x-0 divide-y divide-blue-200/50 border-b sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-blue-300/8">
          {details.map(({ icon: Icon, title, description }) => (
            <div key={crypto.randomUUID()} className="flex w-full flex-col p-4">
              <p className="mb-1 flex items-center gap-2 text-sm text-black dark:text-white">
                <span className="shrink-0">
                  <Icon size={20} className="icon-base" />
                </span>
                {title}
              </p>
              <p className="text-left text-[.8125rem] [text-wrap:pretty]">{description}</p>
            </div>
          ))}
        </div>
        <VideoPlayer src="/app.svg" />
      </div>
      <div className="mt-6 flex flex-col gap-8 sm:hidden">
        {details.map(({ icon: Icon, title, description }) => (
          <div key={crypto.randomUUID()} className="flex w-full flex-col">
            <p className="mb-1 flex items-center gap-2 text-sm text-black dark:text-white">
              <span className="shrink-0">
                <Icon size={20} className="icon-base" />
              </span>
              {title}
            </p>
            <p className="text-left text-[.8125rem] [text-wrap:pretty]">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
