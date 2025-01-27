'use client';

import { useState } from 'react';
import { ForgotPasswordInput, forgotPasswordSchemas } from '@/lib/schemas/auth';
import { forgotPasswordAction } from '@/actions/auth-actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sleep } from '@/lib/utils';
import { Mail, User } from 'lucide-react';
import { MultiStepForm } from '@/components/multi-step-form';
import { Step } from '@/types/form-types';
import { AcceptTerms } from '@/components/accept-terms';

export function ForgotPasswordForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<{
    message: string;
    code: string | undefined;
    status: number;
    statusText: string;
  } | null>(null);

  const steps = [
    {
      title: 'E-Posta',
      fields: [
        {
          name: 'email',
          label: 'E-posta',
          icon: <Mail className="size-4 text-gray-400" />,
          type: 'text',
          placeholder: 'E-postanız:',
        },
      ],
    },
    {
      title: 'Adınız',
      fields: [
        {
          name: 'name',
          label: 'Ad',
          icon: <User className="size-4 text-gray-400" />,
          type: 'text',
          placeholder: 'Adınız:',
        },
      ],
    },
  ];

  const onSubmit = async (data: ForgotPasswordInput) => {
    setServerError(null);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('name', data.name || '');

    try {
      const result = await forgotPasswordAction(formData);

      if (result.error) {
        console.log(result.error);
        setServerError(result?.error);
      } else if (result.success) {
        console.log('Success:', result.success);
        console.log('data : ', data);
        await sleep(1000);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setServerError({
        message: 'An unexpected error occurred. Please try again.',
        code: 'UNKNOWN_ERROR',
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  };

  return (
    <div className="space-y-2">
      <MultiStepForm
        steps={steps as any}
        schemas={forgotPasswordSchemas}
        onSubmit={onSubmit as any}
      />
      {serverError && <p className="mt-1 text-sm text-red-500">{serverError.message}</p>}
      <div className="mt-4 flex w-full items-center justify-between">
        <Link href="/sign-in" className="text-sm underline">
          Giriş Yap
        </Link>
      </div>
      <AcceptTerms />
    </div>
  );
}
