import * as React from 'react';
import { Client } from './page.client';

export default async function RecapPage({
  params,
}: Readonly<{ params: Promise<{ locale: string; year: string }> }>) {
  const { locale, year } = await params;
  return <Client year={year} locale={locale} />;
}
