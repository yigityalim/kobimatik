import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';

export function EmailStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Input
        icon={Mail}
        type="email"
        {...register('email')}
        className={cn(errors.email ? 'ring ring-red-500 [&+span_svg]:text-red-500' : '')}
        placeholder="E-postanız:"
      />
      {errors.email ? (
        <p className="mt-1 h-[20px] text-sm text-red-500">{(errors.name as any).message}</p>
      ) : null}
    </div>
  );
}
