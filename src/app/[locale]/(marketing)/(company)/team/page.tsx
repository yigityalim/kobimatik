import { PageLayout } from '@/components/marketing/page-layout';
import { menu } from '@/lib/menu';

export default function TeamPage() {
    const menuFlatten = menu
        .flat()
        .find((item) => item.id === 'more')
        ?.children?.find((item) => item.id === 'company');
    return (
        <PageLayout>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Takımımız</h1>
        </PageLayout>
    );
}
