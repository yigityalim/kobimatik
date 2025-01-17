'use server';

import { Cookies } from '@/lib/cookies';
import { addMonths } from 'date-fns';
import { cookies } from 'next/headers';
import { actionClient } from './safe-action';
import { trackingConsentSchema } from './schema';

export const trackingConsentAction = actionClient
  .schema(trackingConsentSchema)
  .action(async ({ parsedInput: value }) => {
    (await cookies()).set({
      name: Cookies.TrackingConsent,
      value: value ? 'true' : 'false',
      expires: addMonths(new Date(), 3),
    });

    return value;
  });
