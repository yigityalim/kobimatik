import { organizationClient } from 'better-auth/client/plugins';
import { nextCookies } from 'better-auth/next-js';
import { createAuthClient } from 'better-auth/react';
import { ac, admin, exclusiveMember, member, owner, proMember } from '@/lib/auth/permissions';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  plugins: [
    nextCookies(),
    organizationClient({
      ac,
      roles: {
        member,
        proMember,
        exclusiveMember,
        admin,
        owner,
      },
    }),
  ],
});
