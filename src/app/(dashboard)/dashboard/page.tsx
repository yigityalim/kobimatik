import { redirect } from 'next/navigation';

export default function DashboardPage() {
    redirect('/pricing'); // TODO: Remove this line for development
    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
}
