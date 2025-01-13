import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useScopedI18n } from '@/locales/client';
import { Drawer } from 'vaul';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/locales/server';
import type { Field, FormData, InputOption, FieldOption } from '@/types/form-types';

export function FormSelect({ name, label, options, icon }: Readonly<Field>) {
  const [open, setOpen] = React.useState(false);
  const t = useScopedI18n('pages.report.create.fields');
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();

  const value = watch(name);

  // Initialize default values
  React.useEffect(() => {
    if (value === undefined) {
      const defaultOption = (options as FieldOption[])?.find((option) => option.default);
      if (defaultOption) {
        setValue(name, defaultOption.value);
      }
    }
  }, [name, options, setValue, value]);

  const isNumericInput = (options as InputOption[])?.every(
    (option) => option.type === 'number' || option.type === 'percent',
  );

  const validateInput = (type: InputOption['type'], value: number) => {
    if (type === 'percent') {
      return value >= 0 && value <= 100;
    }
    return value >= 0;
  };

  const handleInputChange = (
    optionLabel: string,
    inputValue: string,
    type: InputOption['type'],
  ) => {
    const numValue = Number(inputValue);
    if (!isNaN(numValue) && validateInput(type, numValue)) {
      setValue(`${name}.${optionLabel}`, numValue);
    }
  };

  const handleSelectOption = (optionValue: string) => {
    setValue(name, optionValue);
    setOpen(false);
  };

  const getDisplayValue = () => {
    if (value === undefined) {
      return t('choose' as any);
    }

    if (isNumericInput) {
      return Object.entries(value as Record<string, number>)
        .map(([key, val]) => `${key}: ${val}`)
        .join(', ');
    }

    const selectedOption = (options as FieldOption[])?.find((option) => option.value === value);
    return selectedOption ? t(selectedOption.label as any) : t('choose' as any);
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-offgray-700 font-lora dark:text-offgray-300 block text-sm font-medium"
      >
        {typeof label === 'string'
          ? label
          : t(label as keyof Locale['pages']['report']['create']['fields'])}
      </label>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger
          className={cn(
            'relative block inline-flex h-10 w-full items-center justify-start gap-x-2 rounded-sm border border-gray-300 bg-white py-2 pr-3 pl-4 text-start italic shadow-xs outline-offset-2 focus-within:outline-2 focus-within:outline-[#094ece80] focus:outline-[#094ece80] sm:text-sm dark:border-gray-400/20 dark:bg-[hsl(218,_13%,_10%)] dark:shadow-black',
            icon && 'pl-10',
            {
              'dark:text-white/40': value === undefined,
              'dark:text-white': value !== undefined,
            },
          )}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">{icon}</span>
          {getDisplayValue()}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown
              className={cn('size-4 text-gray-400 transition duration-300', open && 'rotate-180')}
            />
          </span>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-background/50 fixed right-0 bottom-0 left-0 z-5 mt-24 flex h-fit flex-col rounded-t-[10px] outline-none">
            <Drawer.Description className="sr-only">Değerleri giriniz</Drawer.Description>
            <div className="bg-background flex-1 rounded-t-[10px] p-4 pb-16">
              <div className="mx-auto max-w-md">
                <Drawer.Title className="text-accent-blue font-lora mb-4 text-xl font-medium dark:text-blue-300">
                  {typeof label === 'string'
                    ? label
                    : t(label as keyof Locale['pages']['report']['create']['fields'])}
                </Drawer.Title>
                <div className="space-y-4">
                  {isNumericInput
                    ? (options as InputOption[])?.map((option) => (
                        <div key={option.label} className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {option.label}
                          </label>
                          <Input
                            type="number"
                            value={
                              (value as Record<string, number>)?.[option.label] ?? option.value
                            }
                            onChange={(e) => {
                              handleInputChange(option.label, e.target.value, option.type);
                            }}
                            min={0}
                            max={option.type === 'percent' ? 100 : undefined}
                            step="any"
                            className="w-full"
                          />
                          {option.type === 'percent' && (
                            <p className="text-xs text-gray-500">0-100 arası bir değer giriniz</p>
                          )}
                        </div>
                      ))
                    : (options as FieldOption[])?.map((option) => (
                        <Button
                          key={option.value}
                          onClick={() => handleSelectOption(option.value)}
                          disabled={value === option.value}
                          className="w-full justify-start"
                          variant={value === option.value ? 'secondary' : 'default'}
                        >
                          {t(option.label as any)}
                        </Button>
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
