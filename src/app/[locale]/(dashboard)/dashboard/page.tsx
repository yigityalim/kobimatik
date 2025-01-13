import { authClient } from '@/lib/auth/client';
import { unauthorized } from 'next/navigation';

export default async function DashboardPage() {
  const session = await authClient.getSession();

  // TEST
  if (!session.data) unauthorized();

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}
