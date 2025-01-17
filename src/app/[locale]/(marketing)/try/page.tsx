import { getSession } from '@/lib/session';

export default async function TryPage() {
  const session = await getSession();

  if (session?.data?.user) {
    return <div>oturum açılmamış. formu belli bir yerden sonrasında limitle</div>;
  }

  return (
    <div>
      oturum açmış. ücretsiz olanını kullanabilir. bu yüzden /reports/crate'e redirect edebilirsin.
    </div>
  );
}
