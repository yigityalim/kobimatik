import { Drawer } from 'vaul';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Step } from '@/types/form-types';
import { useScopedI18n } from '@/locales/client';

interface PreviousDataDrawerProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  collectedData: any;
  tPath?: string;
}

export function PreviousDataDrawer({
  steps,
  currentStep,
  setCurrentStep,
  collectedData,
  tPath,
}: Readonly<PreviousDataDrawerProps>) {
  const t = useScopedI18n('pages.report.create.fields');
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          type="button"
          onClick={() => console.log('Önceki form verileri:', collectedData)}
          className="mt-4"
        >
          Önceki Form Verileri
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-background/50 fixed right-0 bottom-0 left-0 z-20 mt-24 flex h-1/2 flex-col rounded-t-[10px] outline-none">
          <Drawer.Description className="sr-only">
            Bu alanda önceki form verileri görüntülenir.
          </Drawer.Description>
          <div className="bg-background flex-1 rounded-t-[10px] p-4">
            <div className="mx-auto max-w-md">
              <Drawer.Title className="text-accent-blue font-lora mb-4 text-xl font-medium dark:text-blue-300">
                Önceki Form Verileri
              </Drawer.Title>
              <div className="h-[400px] space-y-4 overflow-y-auto">
                {steps.map((step, i) => (
                  <Drawer.Close asChild key={i}>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(i)}
                      className={cn(
                        'w-full text-left',
                        i === currentStep
                          ? 'bg-accent-blue dark:text-offgray-900 text-blue-100 dark:bg-blue-300'
                          : 'dark:bg-offgray-950 text-whit bg-gray-300',
                      )}
                    >
                      {t(step.title as any)}
                    </Button>
                  </Drawer.Close>
                ))}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
