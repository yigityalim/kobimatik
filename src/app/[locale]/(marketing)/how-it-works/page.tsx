import { PageLayout } from '@/components/marketing/page-layout';
import { Tabs } from '@/components/marketing/tabs';

const tabs = [
    {
        title: 'Account',
        content: 'Make changes to your account.',
    },
    {
        title: 'Documents',
        content: 'Access and update your documents.',
    },
    {
        title: 'Settings',
        content: 'Edit your profile or update contact information.',
    },
];

export default function Page() {
    return (
        <PageLayout pageHeading="howItWorks.title" pageDescription="howItWorks.description">
            <h1 className="font-lora">Nasıl Çalışıyor?</h1>
            <p>eklenecek.</p>
        </PageLayout>
    );
}
