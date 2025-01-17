'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, SignInInput } from '@/lib/schemas/auth';
import { signInAction } from '@/actions/auth-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Mail, Lock } from 'lucide-react';
import { LoadingText } from '@/components/loading-text';
import { useScopedI18n } from '@/locales/client';
import { AcceptTerms } from '@/components/accept-terms';
import { authClient } from '@/lib/auth/client';

export function SignInForm() {
  const t = useScopedI18n('pages.auth.signIn');
  const router = useRouter();
  const [serverError, setServerError] = useState<{
    message: string;
    code: string | undefined;
    status: number;
    statusText: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (input: SignInInput) => {
    setServerError(null);

    /*const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);*/

    const { data, error } = await authClient.signIn.email(
      {
        email: input.email,
        password: input.password,
      },
      {
        onRequest: (ctx) => {
          // loading ui
        },
        onSuccess: (ctx) => {
          router.push('/dashboard');
        },
        onError: (ctx) => {
          console.error(JSON.stringify(ctx.error));
        },
      },
    );

    console.log(data);
  };

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
          <p className="mt-1 h-[20px] text-sm text-red-500">{errors.email.message}</p>
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
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        ) : null}
      </div>
      <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
        {isSubmitting ? <LoadingText text="Giriş Yapılıyor" /> : 'Giriş Yap'}
      </Button>
      {serverError && <p className="mt-1 text-sm text-red-500">{serverError.message}</p>}
      <div className="mt-4 flex w-full items-center justify-between">
        <Link href="/sign-up" className="text-sm underline">
          {t('signUp')}
        </Link>
        <Link href="/forgot-password" className="text-sm underline">
          {t('forgotPassword')}
        </Link>
      </div>
      <AcceptTerms />
    </form>
  );
}
