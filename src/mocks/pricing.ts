import { ClipboardMinus, Lightbulb, Scale } from 'lucide-react';

export type Pricing = {
  id: string;
  name: string;
  title: string;
  icon: React.ComponentType;
  description: string;
  price: number;
  type: 'basic' | 'recommended' | 'popular';
  maxTeamMembers: number;
  maxProjects: number;
  maxStorage: number;
  maxActivityLogDays: number;
  maxActivityLogRetentionDays: number;
  features: {
    id: number;
    name: string;
    priority: number;
  }[];
  review: {
    text: string;
    author: string;
    role: string;
  };
};

export const pricing = [
  {
    id: crypto.randomUUID(),
    name: 'Ön Fizibilite Raporu',
    title: 'locale-text',
    icon: Scale,
    description: `Fizibilete raporunun [[temel]] özellikleri. $Bu plan basit için gayet yeterli oldu.$ **Kobimatik'in** sunduğu hizmetlerden __çok memnun kaldım.__`,
    price: 0, // free
    type: 'basic',
    maxTeamMembers: 1, // 1 adet üye
    maxProjects: 1, // 1 adet proje
    maxStorage: 1024 * 1024, // 1 MB
    maxActivityLogDays: 7, // 7 gün
    maxActivityLogRetentionDays: 30, // 30 gün
    features: [
      { id: 1, name: 'Proje', priority: 1 },
      { id: 2, name: 'İş Fikri', priority: 2 },
      { id: 3, name: 'Finansal Sonuçlar', priority: 3 },
      { id: 4, name: 'Çevrimiçi', priority: 4 },
      { id: 5, name: 'Hemen Görüntüle', priority: 5 },
    ],
    review: {
      text: `Ön fizibilite raporu iş kurma sürecimde çok yardımcı oldu.`,
      author: 'Ali Veli',
      role: 'Girişimci',
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Fizibilite Raporu',
    title: 'locale-text',
    icon: ClipboardMinus,
    description: `İş fikrin için detaylı bir rapor. $Bu planı seçmek gerçekten çok mantıklı bir fikirdi. Özellikle Ön fizibilite raporu iş kurma sürecimde çok yardımcı oldu.$`,
    price: 183, // ₺183
    type: 'recommended',
    maxTeamMembers: 5, // 5 adet üye
    maxProjects: 5, // 5 adet proje
    maxStorage: 1024 * 1024 * 10, // 10 MB
    maxActivityLogDays: 30, // 30 gün
    maxActivityLogRetentionDays: 90, // 90 gün
    features: [
      { id: 1, name: 'Ön Fizibilite Raporu Dahil!', priority: 1 },
      { id: 2, name: 'Gelişmiş Analizler', priority: 2 },
      { id: 3, name: 'Özel Destek', priority: 3 },
    ],
    review: {
      text: `Fizibilite raporu iş kurma sürecimde çok yardımcı oldu.`,
      author: 'Ali Veli',
      role: 'Girişimci',
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Gelişmiş Fizibilite ve İş Planı',
    title: 'locale-text',
    icon: Lightbulb,
    description: `$Bu plan ile birlikte startup'ımı hızlı bir şekilde kurdum.$ Özellikle iş planı hazırlama sürecimde çok yardımcı oldu.`,
    price: 490, // ₺490
    type: 'popular',
    maxTeamMembers: 10, // 10 adet üye
    maxProjects: 10, // 10 adet proje
    maxStorage: 1024 * 1024 * 100, // 100 MB
    maxActivityLogDays: 60, // 60 gün
    maxActivityLogRetentionDays: 180, // 180 gün
    features: [
      { id: 1, name: 'Fizibilite Raporu Dahil!', priority: 1 },
      { id: 2, name: 'Gelişmiş Analizler', priority: 2 },
      { id: 3, name: 'Özel Destek', priority: 3 },
      { id: 4, name: 'Özel Raporlar', priority: 4 },
    ],
    review: {
      text: `Bu plan ile birlikte startup'ımı hızlı bir şekilde kurdum.`,
      author: 'Ali Veli',
      role: 'Girişimci',
    },
  },
] satisfies Pricing[];
