import { db } from '@/db';
import { createDefaultOrganization, getDefaultOrganization } from '@/db/queries/organization';
import * as schema from '@/db/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { organization } from 'better-auth/plugins';
import { getAppUrl } from '@/lib/utils';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'sqlite',
        usePlural: true,
        schema,
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({user, url, token}, request) => {
            console.log('sendResetPassword', user, url, token, request);
            /*await resend.emails.send({
                from: 'Kobimatik <help@kobimatik.com>',
                to: user.email,
                subject: 'Reset your password',
                react: ResetPasswordEmail({url, token}),
            })*/
        },
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    await createDefaultOrganization(user);

                    // Send welcome email to new user
                    try {
                        /*await resend.emails.send({
                            from: 'Kobimatik <hello@emails.kobimatik>',
                            to: user.email,
                            subject: 'Welcome to Kobimatik',
                            react: WelcomeEmail({ name: user.name }),
                        });*/
                    } catch (error) {
                        console.error('Error sending welcome email', error);
                    }
                },
            },
        },
        session: {
            create: {
                before: async (session) => {
                    const org = await getDefaultOrganization(session.userId);

                    return {
                        data: {
                            ...session,
                            activeOrganizationId: org?.organizations?.id,
                        },
                    };
                },
            },
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60, // 1 hour
        },
        expiresIn: 60 * 60, // 1 hour
        updateAge: 60 * 60, // 1 hour
    },
    plugins: [
        organization({
            async sendInvitationEmail(data) {
                const inviteLink = `${getAppUrl()}/invite/${data.id}`;

                try {
                    /*await resend.emails.send({
                        from: "Kobimatik <hello@emails.kobimatik.com>",
                        to: data.email,
                        subject: `You've been invited to join ${data.organization.name} on Kobimatik`,
                        react: InviteEmail({
                            invitedByUsername: data.inviter.user.name,
                            invitedByEmail: data.inviter.user.email,
                            teamName: data.organization.name,
                            inviteLink,
                        }),
                    });*/
                } catch (error) {
                    console.error('Error sending welcome email', error);
                }
            },
        }),
    ],
});
