'use server';

import { authClient } from '@/lib/auth/client';
import { redirect } from 'next/navigation';
import { signInSchema, forgotPasswordSchemas } from '@/lib/schemas/auth';

export async function signInAction(formData: FormData) {
    const validatedFields = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            data: null,
            error: {
                message: 'Geçersiz giriş bilgileri',
                code: 'INVALIK_EMAIL_OR_PASSWORD',
                status: 401,
                statusText: 'UNAUTHORIZED',
            },
        };
    }

    const { email, password } = validatedFields.data;
    try {
        const { data, error } = await authClient.signIn.email(
            {
                email,
                password,
            },
            {
                onRequest: (ctx) => {
                    // loading ui
                },
                onSuccess: (ctx) => {
                    console.log('LOGIN SUCCESS: ', ctx.data);
                    redirect('/dashboard');
                },
                onError: (ctx) => {
                    console.error(JSON.stringify(ctx.error));
                },
            },
        );

        if (error) {
            return {
                success: false,
                data: null,
                error: {
                    message: 'E-posta veya şifre hatalı. Lütfen tekrar deneyin.',
                    code: error.code,
                    status: error.status,
                    statusText: error.statusText,
                },
            };
        }

        return { success: true, data, error: null };
    } catch (error) {
        console.error('LOGIN ERROR: ', error);
        throw error;
    }
}

export async function forgotPasswordAction(formData: FormData) {
    const validatedFields = forgotPasswordSchemas[0].safeParse({
        email: formData.get('email'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            data: null,
            error: {
                message: 'Geçersiz giriş bilgileri',
                code: 'INVALIK_EMAIL_OR_PASSWORD',
                status: 401,
                statusText: 'UNAUTHORIZED',
            },
        };
    }

    const { email } = validatedFields.data;

    try {
        const { data, error } = await authClient.forgetPassword({
            email,
            redirectTo: "/reset-password",
        });

        if (error) {
            return {
                success: false,
                data: null,
                error: {
                    message: 'E-posta hatalı. Lütfen tekrar deneyin.',
                    code: error.code,
                    status: error.status,
                    statusText: error.statusText,
                },
            };
        }

        return { success: true, data, error: null };
    } catch (error) {
        console.log('FORGOT PASSWORD ERROR: ', error);
        throw error;
    }
}