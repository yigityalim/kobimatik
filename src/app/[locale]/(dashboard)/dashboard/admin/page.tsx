import { authClient } from '@/lib/auth/client';
import { forbidden } from 'next/navigation';

export default async function DashboardPage() {
  const session = await authClient.getSession();

  // TEST
  if (!session.data) forbidden();

  return (
    <div>
      <h1>Dashboard admin Page</h1>
    </div>
  );
}
