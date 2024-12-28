import { pricingPlans as pricingTable } from '@/lib/db/schema';
import { storageSize } from '@/lib/utils';
import { ClipboardMinus, Lightbulb, Scale } from 'lucide-react';

export const pricing = [
    {
        id: 1,
        name: 'Ön Fizibilite Raporu',
        icon: Scale,
        description: `Fizibilete raporunun [[temel]] özellikleri. $Bu plan basit için gayet yeterli oldu.$ **Kobimatik'in** sunduğu hizmetlerden __çok memnun kaldım.__`,
        price: 0, // free
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
        id: 2,
        name: 'Fizibilite Raporu',
        icon: ClipboardMinus,
        description: `İş fikrin için detaylı bir rapor. $Bu planı seçmek gerçekten çok mantıklı bir fikirdi. Özellikle Ön fizibilite raporu iş kurma sürecimde çok yardımcı oldu.$`,
        price: 183, // ₺183
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
        id: 3,
        name: 'Gelişmiş Fizibilite ve İş Planı',
        icon: Lightbulb,
        description: `$Bu plan ile birlikte startup'ımı hızlı bir şekilde kurdum.$ Özellikle iş planı hazırlama sürecimde çok yardımcı oldu.`,
        price: 490, // ₺490
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
] satisfies (typeof pricingTable.$inferInsert & {
    icon: React.ComponentType;
    features: {
        id: number;
        name: string;
        priority: number;
    }[];
    description?: string;
    review: {
        text: string;
        author: string;
        role: string;
    };
})[];
