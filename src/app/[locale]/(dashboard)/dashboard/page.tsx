import { getSession } from '@/lib/session';

export default async function DashboardPage() {
  const data = await getSession();

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}
