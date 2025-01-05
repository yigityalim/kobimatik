import { z } from 'zod';

export const stepSchemas = [
    z.object({
        startupName: z.string().min(1, 'Girişim adı gereklidir'),
        userType: z.enum(['1', '2', '3'], {
            errorMap: () => ({ message: 'Geçerli bir kullanıcı tipi seçin' }),
        }),
    }),
    z.object({
        industry: z.string().min(1, 'Sektör gereklidir'),
        foundingYear: z.string().regex(/^\d{4}$/, 'Geçerli bir yıl girin (örn. 2021)'),
    }),
    z.object({
        teamSize: z.string().min(1, 'Ekip büyüklüğü gereklidir'),
        fundingStage: z.enum(['pre-seed', 'seed', 'series-a', 'series-b', 'series-c'], {
            errorMap: () => ({ message: 'Geçerli bir finansman aşaması seçin' }),
        }),
    }),
    z.object({
        productDescription: z.string().min(10, 'Ürün açıklaması en az 10 karakter olmalıdır'),
        targetMarket: z.string().min(1, 'Hedef pazar gereklidir'),
    }),
    z.object({
        revenue: z.string().min(1, 'Yıllık gelir gereklidir'),
        growthRate: z.string().regex(/^\d+(\.\d+)?$/, 'Geçerli bir büyüme oranı girin'),
    }),
    z.object({
        challenges: z.string().min(10, 'Zorluklar en az 10 karakter olmalıdır'),
        opportunities: z.string().min(10, 'Fırsatlar en az 10 karakter olmalıdır'),
    }),
    z.object({
        competitiveAdvantage: z.string().min(10, 'Rekabet avantajı en az 10 karakter olmalıdır'),
        futureGoals: z.string().min(10, 'Gelecek hedefleri en az 10 karakter olmalıdır'),
    }),
];

export type FormData = z.infer<(typeof stepSchemas)[number]>;
