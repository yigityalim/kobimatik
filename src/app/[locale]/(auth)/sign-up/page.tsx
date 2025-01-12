'use client';

import { authClient } from '@/lib/auth/client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function SignUp() {
    const session = authClient.useSession();

    if (session.data) redirect('/dashboard');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState<{}>();

    const signUp = async () => {
        const { data, error } = await authClient.signUp.email(
            {
                email,
                password,
                name,
            },
            {
                onRequest: (ctx) => {
                    //show loading
                },
                onSuccess: (ctx) => {
                    console.log('SUCCESS: ', ctx);
                },
                onError: (ctx) => {
                    setError(ctx);
                },
            },
        );

        if (error) {
            setError(error);
        }

        console.log(data);
    };

    return (
        <div>
            <header className="fixed right-0 left-0 w-full">
                <div className="mt-4 ml-5 md:mt-10 md:ml-10">LOGO</div>
            </header>

            <div className="flex min-h-screen items-center justify-center overflow-hidden p-6 md:p-0">
                <div className="relative z-20 m-auto flex w-full max-w-[380px] flex-col py-8">
                    <div className="relative flex w-full flex-col">
                        <div className="inline-block bg-gradient-to-r from-[#FAFAFA] to-[#000] bg-clip-text pb-4 text-transparent dark:via-[#FAFAFA] dark:to-[#848484]">
                            <h1 className="pb-1 text-3xl font-medium">Kayıt Ol</h1>
                        </div>

                        <p className="pb-1 text-2xl font-medium text-[#878787]">
                            Durum takibi yapın. <br />
                            Sitenizin durumlarını öğrenin
                        </p>

                        <div className="pointer-events-auto mt-6 mb-6 flex flex-col gap-2">
                            <Input
                                icon={Mail}
                                type="text"
                                className="border-foreground border px-4 py-2"
                                placeholder="Adınız:"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                type="email"
                                className="border-foreground border px-4 py-2"
                                placeholder="E-postanız:"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                className="border-foreground border px-4 py-2"
                                placeholder="Şifreniz:"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className="w-full" onClick={signUp}>
                                Kayıt ol
                            </Button>
                        </div>

                        <div className="mb-8 w-full">
                            <Link href="/sign-in" className="w-full px-2 py-1 text-lg underline">
                                Giriş Yap
                            </Link>
                        </div>

                        <p className="text-xs text-[#878787]">
                            "Kayıt Ol" butonuna tıklayarak,{' '}
                            <Link href="/terms" className="underline">
                                Kullanım Koşulları
                            </Link>
                            'nı kabul etmiş olursunuz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
