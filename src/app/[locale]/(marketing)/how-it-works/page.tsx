import { PageLayout } from '@/components/marketing/page-layout';
import { getI18n } from '@/locales/server';
import { Steps } from '@/components/steps';

export default async function Page() {
  //const t = await getI18n();
  return (
    <PageLayout pageHeading="howItWorks.title" pageDescription="howItWorks.description">
      <Steps />
    </PageLayout>
  );
}
