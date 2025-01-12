'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, SignInInput } from '@/lib/schemas/auth'
import { signInAction } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
import { Mail, Lock } from 'lucide-react';
import {LoadingText} from '@/components/loading-text';

export function SignInForm() {
    const router = useRouter()
    const [serverError, setServerError] = useState<{
        message: string;
        code: string | undefined;
        status: number;
        statusText: string;
    } | null>(null)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInInput>({
        resolver: zodResolver(signInSchema)
    })

    const onSubmit = async (data: SignInInput) => {
        setServerError(null)
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('password', data.password)

        const result = await signInAction(formData)

        if (result.error) {
            console.log(result.error);
            setServerError(result?.error)
        } else if (result.success) {
            router.push('/dashboard')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input
                    icon={Mail}
                    type="email"
                    {...register('email')}
                    className={cn(errors.email ? 'ring ring-red-500 [&+span_svg]:text-red-500' : '')}
                    placeholder="E-postanız:"
                />
                {errors.email ? (
                    <p className="text-red-500 text-sm mt-1 h-[20px]">{errors.email.message}</p>
                ) : null}
            </div>
            <div>
                <Input
                    icon={Lock}
                    type="password"
                    {...register('password')}
                    className={cn(errors.password ? 'ring ring-red-500 [&+span_svg]:text-red-500' : '')}
                    placeholder="Şifreniz:"
                />
                {errors.password ? (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                ) : null}
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                {isSubmitting ? <LoadingText text="Giriş Yapılıyor" /> : 'Giriş Yap'}
            </Button>
            {serverError && (
                <p className="text-red-500 text-sm mt-1">{serverError.message}</p>
            )}
            <div className="mt-4 flex w-full items-center justify-between">
                <Link href="/sign-up" className="text-sm underline">
                    Kayıt Ol
                </Link>
                <Link href="/forgot-password" className="text-sm underline">
                    Şifremi Unuttum
                </Link>
            </div>
            <p className="text-xs text-[#878787] mt-4">
                "Giriş Yap" butonuna tıklayarak,{' '}
                <Link href="/terms" className="underline">
                    Kullanım Koşulları
                </Link>
                'nı ve{' '}
                <Link href="/privacy" className="underline">
                    Gizlilik Politikası
                </Link>
                'nı kabul etmiş olursunuz.
            </p>
        </form>
    )
}
