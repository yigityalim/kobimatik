import { authClient } from '@/lib/auth/client';
import { redirect } from 'next/navigation';
import { WordAnimation } from '@/components/word-animation';
import { ForgotPasswordForm } from '@/components/forms/forgot-password';

export default async function ForgotPasswordPage() {
  const session = await authClient.getSession();

  if (session?.data?.session) {
    redirect('/dashboard');
  }

  return (
    <div>
      <header className="fixed right-0 left-0 z-2 w-full">
        <div className="mt-4 ml-5 md:mt-10 md:ml-10">LOGO</div>
      </header>

      <div className="flex min-h-screen items-center justify-center overflow-hidden p-6 md:p-0">
        <div className="relative z-20 flex h-full w-full max-w-[380px] flex-col items-center justify-center py-8">
          <div className="relative z-2 flex w-full flex-col">
            <div className="inline-block bg-gradient-to-r from-[#FAFAFA] to-[#000] bg-clip-text pb-4 text-transparent dark:via-[#FAFAFA] dark:to-[#848484]">
              <h1 className="font-lora pb-1 text-5xl font-medium italic">
                Şifrenizi mi unuttunuz?
              </h1>
            </div>

            <div className="py-4 pb-6 text-2xl font-medium text-[#878787]">
              Kontrol Paneli. <br />
              Sitenizin performansını takip edin. <br />
              <WordAnimation className="text-accent-blue pt-2 font-mono leading-relaxed tracking-tighter italic dark:text-blue-300" />
            </div>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
