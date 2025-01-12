import { authClient } from '@/lib/auth/client';
import { redirect } from 'next/navigation';
import { WordAnimation } from '@/components/word-animation';
import { ForgotPasswordForm } from '@/components/forms/forgot-password/index';

export default async function ForgotPasswordPage() {
    const session = await authClient.getSession();

    if (session?.data?.session) {
        redirect('/dashboard');
    }

    return (
        <div>
            <header className="z-2 fixed right-0 left-0 w-full">
                <div className="mt-4 ml-5 md:mt-10 md:ml-10">LOGO</div>
            </header>

            <div className="flex min-h-screen items-center justify-center overflow-hidden p-6 md:p-0">
                <div
                    className="relative z-20 h-full flex items-center justify-center w-full max-w-[380px] flex-col py-8">
                    <div className="z-2 relative flex w-full flex-col">
                        <div
                            className="inline-block bg-gradient-to-r from-[#FAFAFA] to-[#000] bg-clip-text pb-4 text-transparent dark:via-[#FAFAFA] dark:to-[#848484]">
                            <h1 className="pb-1 text-5xl font-medium font-lora italic">Şifrenizi mi unuttunuz?</h1>
                        </div>

                        <div className="py-4 pb-6 text-2xl font-medium text-[#878787]">
                            Kontrol Paneli. <br />
                            Sitenizin performansını takip edin. <br />
                            <WordAnimation
                                className="text-accent-blue dark:text-blue-300 italic font-mono pt-2 leading-relaxed tracking-tighter" />
                        </div>
                        <ForgotPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

