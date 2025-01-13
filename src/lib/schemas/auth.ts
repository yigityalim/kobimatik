import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalıdır.'),
});

export type SignInInput = z.infer<typeof signInSchema>;

const emailSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
});

const nameSchema = z.object({
  name: z.string().min(1, 'Adınız gereklidir'),
  surname: z.string().optional(),
});

export const forgotPasswordSchemas = [emailSchema, nameSchema];

export const forgotPasswordSchema = emailSchema.merge(nameSchema);

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
