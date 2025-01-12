import type { Session, User } from 'better-auth';
import { headers } from 'next/headers';

type SessionData = {
    user: User;
    session: Session & { activeOrganizationId: string };
};

export const getSessionFromRequest = async (): Promise<SessionData | null> => {
    "use cache"
    return await fetch(`${process.env.BETTER_AUTH_URL}/api/auth/get-session`, {
        headers: {
            cookie: (await headers()).get('cookie') || '',
        },
    }).then(async (res) => {
        if (!res.ok) return null;

        return res.json();
    });
};
