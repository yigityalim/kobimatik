import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { FormData } from '@/lib/schemas';
import { useScopedI18n } from '@/locales/client';

interface FormFieldProps {
    name: keyof FormData;
    label: string;
    type?: string;
    placeholder?: string;
    icon: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
    name,
    label,
    type = 'text',
    placeholder,
    icon,
}) => {
    const t = useScopedI18n('pages.report.create');
    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>();
    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="text-offgray-700 dark:text-offgray-300 block text-sm font-medium"
            >
                {t(label as any)}
            </label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">{icon}</span>
                <Input
                    {...register(name)}
                    id={name}
                    type={type}
                    placeholder={t(`placeholders.${placeholder}` as any)}
                    className="pl-10"
                />
            </div>
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{(errors[name] as any)?.message}</p>
            )}
        </div>
    );
};
