import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { FormData } from '@/lib/schemas';
import { useScopedI18n } from '@/locales/client';
import type { Locale } from '@/locales/server';

interface FormFieldProps {
  name: string; //keyof FormData;
  label: string; //keyof Locale['pages']['report']['create']['fields'];
  type?: string;
  placeholder?: string; //keyof Locale['pages']['report']['create']['placeholders'];
  icon: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  icon,
}) => {
  const t = useScopedI18n('pages.report.create.fields');
  const placeholderT = useScopedI18n('pages.report.create.placeholders');
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-offgray-700 dark:text-offgray-300 font-lora block text-sm font-medium"
      >
        {t(label as any)} {/*as keyof Locale['pages']['report']['create']['fields']*/}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">{icon}</span>
        <Input
          {...register(name as keyof FormData)}
          id={name}
          type={type}
          placeholder={placeholderT(
            (placeholder ?? 'unknown') as keyof Locale['pages']['report']['create']['placeholders'],
          )}
          className="pl-10"
        />
      </div>
      {errors[name as keyof FormData] && (
        <p className="mt-1 text-sm text-red-500">
          {(errors[name as keyof FormData] as any).message}
        </p>
      )}
    </div>
  );
};
