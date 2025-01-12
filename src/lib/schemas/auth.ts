import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
    password: z.string().min(8, 'Şifre en az 8 karakter olmalıdır.'),
})

export type SignInInput = z.infer<typeof signInSchema>

export const forgotPasswordSchemas = [
    z.object({
        email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
    }),
    z.object({
        name: z.string().min(1, 'Adınız gereklidir'),
    }),
]

export type ForgotPasswordInput = z.infer<(typeof forgotPasswordSchemas)[number]>