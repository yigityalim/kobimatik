import { setStaticParamsLocale } from 'next-international/server';
import { Banner } from '@/components/marketing/banner';
import { HomePageClient } from '@/app/[locale]/(marketing)/page.client';
import { Blockquote } from '@/components/blockquote';

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <main className="pb-24">
      <Banner />
      <HomePageClient />
      <section className="px-6">
        <Blockquote
          title="From the Team"
          from="ACME"
          quote={[
            "We're excited to bring you the latest updates on our platform. \n We've been working hard to make sure you have the best experience possible. We hope you enjoy it!",
            'Programming and the tools we use to do so are changing. As the culmination of 15 years of work developing industry-leading tools for developers like Atom, Electron, and Tree-sitter, Zed strives to be at the forefront of this transformation.',
          ]}
        />
      </section>
    </main>
  );
}
