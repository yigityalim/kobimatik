import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/lib/schemas';
import { useScopedI18n } from '@/locales/client';
import { Drawer } from 'vaul';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormSelectProps {
    name: keyof FormData;
    label: string;
    options: { value: string; label: string; default?: boolean }[];
    icon: React.ReactNode;
}

export function FormSelect({ name, label, options, icon }: FormSelectProps) {
    const [open, setOpen] = React.useState(false);
    const t = useScopedI18n('pages.report.create');
    const {
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<FormData>();

    const selectedValue = watch(name);
    console.log(selectedValue);
    const selectedOption = options.find(
        (option) => option.value === (selectedValue as unknown as string),
    );

    //  TODO: Fix type
    const handleSelect = (value: never) => {
        setValue(name, value);
        setOpen(false);
    };

    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {t(label as any)}
            </label>
            <Drawer.Root open={open} onOpenChange={setOpen}>
                <Drawer.Trigger
                    className={cn(
                        'relative block h-10 w-full rounded-sm border border-gray-300 bg-white py-2 pr-3 pl-4 pl-10 text-start italic shadow-xs outline-offset-2 focus-within:outline-2 focus-within:outline-[#094ece80] focus:outline-[#094ece80] sm:text-sm dark:border-gray-400/20 dark:bg-[hsl(218,_13%,_10%)] dark:shadow-black',
                        {
                            'dark:text-white/40': !selectedValue,
                            'dark:text-white': selectedValue,
                        },
                    )}
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">{icon}</span>
                    {selectedOption ? selectedOption.label : 'Seçiniz'}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDown
                            className={cn(
                                'size-4 text-gray-400 transition duration-300',
                                open && 'rotate-180',
                            )}
                        />
                    </span>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Content className="bg-background/50 fixed right-0 bottom-0 left-0 z-5 mt-24 flex h-fit flex-col rounded-t-[10px] outline-none">
                        <Drawer.Description className="sr-only">
                            Bu alanda önceki form verileri görüntülenir.
                        </Drawer.Description>
                        <div className="bg-background flex-1 rounded-t-[10px] p-4 pb-16">
                            <div className="mx-auto max-w-md">
                                <Drawer.Title className="text-accent-blue font-lora mb-4 text-xl font-medium dark:text-blue-300">
                                    {t(label as any)}
                                </Drawer.Title>
                                <div className="h-1/2 space-y-4 overflow-y-scroll">
                                    {options.map((option) => (
                                        <div key={option.value} className="w-full text-left">
                                            <Button
                                                type="button"
                                                className="w-full justify-start"
                                                onClick={() => handleSelect(option.value as never)} // TODO: Fix type never
                                            >
                                                {option.label}{' '}
                                                <span className="text-accent-blue ml-auto dark:text-blue-300">
                                                    {option.default ? `(Varsayılan)` : null}
                                                </span>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{(errors[name] as any)?.message}</p>
            )}
        </div>
    );
}