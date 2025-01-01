'use client';
import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { Steps } from '@/components/marketing/steps';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Step1 = () => {
    const [startupName, setStartupName] = React.useState('');
    const [userType, setUserType] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const project = JSON.parse(sessionStorage.getItem('project') || '{}');
        sessionStorage.setItem('project', JSON.stringify({ ...project, startupName, userType }));
    };

    return (
        <div className="w-full">
            <h3 className="font-lora text-accent-blue border-b-accent-blue mb-2.5 mb-4 scroll-mt-24 border-b pb-1 text-start text-xl font-medium text-pretty dark:border-blue-300 dark:text-blue-300">
                Girişimci Bilgileri
            </h3>
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 md:flex-row">
                <label className="relative block w-full">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Search className="size-4 text-gray-400" />
                    </span>
                    <Input
                        id="startup-name"
                        placeholder="Girişimci Adı:"
                        value={startupName}
                        onChange={(e) => setStartupName(e.target.value)}
                    />
                </label>
                <label className="relative block w-full">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Search className="size-4 text-gray-400" />
                    </span>
                    <select
                        id="user-type"
                        className="inline-flex h-10 w-full items-center rounded-sm border border-gray-300 bg-white py-2 pr-3 pl-9 shadow-xs outline-offset-2 placeholder:italic placeholder:opacity-90 focus-within:outline-2 focus-within:outline-[#094ece80] focus:outline-[#094ece80] sm:text-sm dark:border-gray-400/20 dark:bg-[hsl(218,_13%,_10%)] dark:text-white dark:shadow-black dark:placeholder:opacity-40"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="1">Girişimci</option>
                        <option value="2">Yatırımcı</option>
                        <option value="3">Danışman</option>
                    </select>
                </label>
                <Button type="submit" className="w-full md:w-auto">
                    İlerle
                </Button>
            </form>
        </div>
    );
};

const Step2: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 2: Details</h2>
        <p>In this step, we'll gather some important information from you.</p>
    </div>
);

const Step3: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 3: Confirmation</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const Step4: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 4: Son</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const Step5: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 5: Son</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const Step6: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 6: Son</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const Step7: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 7: Son</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const Step8: React.FC = () => (
    <div className="">
        <h2 className="mb-4 text-2xl font-bold">Adım 8: Son</h2>
        <p>Great! You've reached the final step. Let's review and confirm everything.</p>
    </div>
);

const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

export default function PricingPage() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    id: '1',
                    name: 'Ön fizibilite raporu',
                    href: '/test1',
                },
                {
                    id: '2',
                    name: 'Rapor Oluştur',
                    href: '/test2',
                },
            ]}
            pageHeading="Oluştur"
            pageDescription="Rapor Oluşturun"
        >
            <Steps steps={steps} endStep={<span>son</span>} />
        </PageLayout>
    );
}
