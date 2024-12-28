'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleIcon, Loader2 } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'sign-up' }: { mode?: 'sign-up' | 'signup' }) {
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');
    const priceId = searchParams.get('priceId');
    const inviteId = searchParams.get('inviteId');
    const [state, formAction, pending] = useActionState<ActionState, FormData>(
        mode === 'sign-up' ? signIn : signUp,
        { error: '' },
    );

    return (
        <div className="flex min-h-[100dvh] flex-col justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <CircleIcon className="h-12 w-12 text-orange-500" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {mode === 'sign-up' ? 'Sign in to your account' : 'Create your account'}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-6" action={formAction}>
                    <input type="hidden" name="redirect" value={redirect || ''} />
                    <input type="hidden" name="priceId" value={priceId || ''} />
                    <input type="hidden" name="inviteId" value={inviteId || ''} />
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                defaultValue={state.email}
                                required
                                maxLength={50}
                                className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:ring-orange-500 focus:outline-none sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div>
                        <Label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete={
                                    mode === 'sign-up' ? 'current-password' : 'new-password'
                                }
                                defaultValue={state.password}
                                required
                                minLength={8}
                                maxLength={100}
                                className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:ring-orange-500 focus:outline-none sm:text-sm"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    {state?.error && <div className="text-sm text-red-500">{state.error}</div>}

                    <div>
                        <Button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                            disabled={pending}
                        >
                            {pending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </>
                            ) : mode === 'sign-up' ? (
                                'Sign in'
                            ) : (
                                'Sign up'
                            )}
                        </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-50 px-2 text-gray-500">
                                {mode === 'sign-up'
                                    ? 'New to our platform?'
                                    : 'Already have an account?'}
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href={`${mode === 'sign-up' ? '/sign-up' : '/sign-in'}${
                                redirect ? `?redirect=${redirect}` : ''
                            }${priceId ? `&priceId=${priceId}` : ''}`}
                            className="flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                        >
                            {mode === 'sign-up'
                                ? 'Create an account'
                                : 'Sign in to existing account'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}