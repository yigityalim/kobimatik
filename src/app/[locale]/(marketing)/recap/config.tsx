import type React from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/image';
import {
  ArrowRight,
  Atom,
  Handshake,
  Presentation,
  Radio,
  ShoppingBasket,
  Users,
} from 'lucide-react';
import { RecapGrid } from '@/components/recap-grid';

export type RecapOptions = {
  locale: string;
  year: string;
  recaps: {
    component: React.ComponentType;
    date: Date;
    title: string;
    description: string;
    footer: React.ComponentType;
  }[];
};

const gridItems = [
  {
    title: 'Proje Yayını',
    date: new Date('2024-04-01'),
    href: '/projects',
    icon: Presentation,
  },
  {
    title: 'Topluluk Etkinliği',
    date: new Date('2024-02-01'),
    href: '/community/events',
    icon: Users,
  },
  {
    title: 'Ürün Lansmanı',
    date: new Date('2024-04-01'),
    href: '/products',
    icon: ShoppingBasket,
  },
  {
    title: 'Topluluk İlişkileri',
    date: new Date('2024-05-01'),
    href: '/community/relations',
    icon: Atom,
  },
  {
    title: 'Yeni Ortaklıklar',
    date: new Date('2024-06-01'),
    href: '/partnerships',
    icon: Handshake,
  },
  {
    title: 'Canlı Etkinlikler',
    date: new Date('2024-04-01'),
    href: '/events',
    icon: Radio,
  },
];

export const recapOptions: RecapOptions = {
  locale: 'tr',
  year: '2024',
  recaps: [
    {
      component: () => null,
      date: new Date('2024-01-01'),
      title: 'Fibizilite 2024 Yılı Raporu',
      description:
        'Bu yıl, Fibizilite olarak büyük bir sıçrama yaptık. Birçok önemli projeye imza attık ve bunlar sizlerin katkılarıyla mümkün oldu. Gelin, yılı birlikte özetleyelim.',
      footer: () => (
        <>
          <p className="subheader inline-flex items-center gap-x-2 opacity-90 md:hidden">
            Kaydırın. <ArrowRight className="animate-arrow-transform size-3" />
          </p>
          <div className="hidden items-center gap-2 text-xs opacity-80 md:flex">
            <kbd className="dark:border-offgray-400/10 dark:bg-cream-900/10 flex max-w-max items-center gap-0.5 rounded-xs border border-gray-500/20 bg-gray-50/50 p-1.5 text-[.6875rem] font-bold text-gray-500 dark:text-gray-300">
              <ArrowRight className="size-3 rotate-180" />
            </kbd>{' '}
            veya{' '}
            <kbd className="dark:border-offgray-400/10 dark:bg-cream-900/10 flex max-w-max items-center gap-0.5 rounded-xs border border-gray-500/20 bg-gray-50/50 p-1.5 text-[.6875rem] font-bold text-gray-500 dark:text-gray-300">
              <ArrowRight className="size-3" />
            </kbd>{' '}
            tuşlarına basın.
          </div>
        </>
      ),
    },
    {
      component: () => (
        <Image lightSrc="/oss-light.webp" darkSrc="/oss-dark.webp" alt="2024 Raporu" />
      ),
      date: new Date('2024-02-01'),
      title: 'Açık Kaynak Katkılarımız',
      description:
        'Açık kaynak topluluğuna önemli katkılarda bulunduk. Birçok yeni projeyi hayata geçirdik ve mevcut projelere katkılar sağladık.',
      footer: () => <Button className="mt-auto">Projeleri Görüntüle</Button>,
    },
    {
      component: () => <RecapGrid data={gridItems} />,
      date: new Date('2024-03-01'),
      title: 'Fibizilite’nin Katkıları',
      description: 'Fibizilite olarak açık kaynak topluluğuna olan katkılarımızı keşfedin.',
      footer: () => <Button className="mt-auto">Takım ile Görüş</Button>,
    },
    {
      component: () => (
        <Image lightSrc="/product-light.webp" darkSrc="/product-dark.webp" alt="2024 Raporu" />
      ),
      date: new Date('2024-04-01'),
      title: 'Yeni Ürün Lansmanı',
      description:
        'Yeni bir ürünümüzü piyasaya sunduk ve müşterilerimizden büyük geri bildirimler aldık. Bu ürünün potansiyeli bizi heyecanlandırıyor.',
      footer: () => <Button className="mt-auto">Daha Fazla Bilgi</Button>,
    },
    {
      component: () => (
        <Image lightSrc="/community-light.webp" darkSrc="/community-dark.webp" alt="2024 Raporu" />
      ),
      date: new Date('2024-05-01'),
      title: 'Topluluk İlişkileri',
      description:
        'Çeşitli etkinlikler ve girişimler aracılığıyla topluluğumuzla etkileşimde bulunduk. Geri vermek konusunda kararlıyız.',
      footer: () => <Button className="mt-auto">Katılın</Button>,
    },
    {
      component: () => (
        <Image
          lightSrc="/partnership-light.webp"
          darkSrc="/partnership-dark.webp"
          alt="2024 Raporu"
        />
      ),
      date: new Date('2024-06-01'),
      title: 'Yeni Ortaklıklar',
      description:
        'Değerlerimizi paylaşan organizasyonlarla yeni ortaklıklar kurduk. Birlikte büyük işler başaracağımıza inanıyoruz.',
      footer: () => <Button className="mt-auto">Ortaklıkları Keşfet</Button>,
    },
  ],
};
