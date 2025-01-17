import { PageLayout } from '@/components/marketing/page-layout';
import { unauthorized } from 'next/navigation';
import { getSession } from '@/lib/session';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/image';
import { Button } from '@/components/ui/button';

export default async function ProfilePage() {
  const session = await getSession();

  if (!session.data) {
    return unauthorized();
  }

  return (
    <PageLayout
      pageDescription="profile.description"
      pageHeading="profile.title"
      className="mx-auto flex w-full max-w-(--breakpoint-sm) max-w-2xl! flex-col items-center gap-8 md:max-w-[1200px]"
    >
      <Card title="Hesabınız" description="Hesap Detaylarınız. ACME bilgilerinizi güvenle saklar">
        <Image
          removeStyles
          className="size-16"
          alt={`${session.data.user.name}'s picture`}
          lightSrc={session.data.user.image ?? '/mock-user.png'}
          darkSrc={session.data.user.image ?? '/mock-user.png'}
        />
        <div>
          <p className="font-bold">{session.data.user.name}</p>
          <p className="">{session.data.user.email}</p>
        </div>
      </Card>
      <Card
        variant="destructive"
        title="Hesabınız"
        description="Hesap Detaylarınız. ACME bilgilerinizi güvenle saklar"
      >
        <Button variant="destructive">Çıkış Yap</Button>
        <Button variant="destructive">Çıkış Yap</Button>
      </Card>
    </PageLayout>
  );
}
