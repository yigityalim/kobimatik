import { useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Lock } from 'lucide-react'

export function NameStep() {
    const { register, formState: { errors } } = useFormContext()

    return (
        <div>
            <Input
                icon={Lock}
                type="name"
                {...register('name')}
                className={cn(errors.name ? 'ring ring-red-500 [&+span_svg]:text-red-500' : '')}
                placeholder="Adınız:"
            />
            {errors.name ? (
                <p className="text-red-500 text-sm mt-1 h-[20px]">{errors.name.message}</p>
            ) : null}
        </div>
    )
}

