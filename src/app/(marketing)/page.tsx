import { redirect } from 'next/navigation';

export default function MarkettingPage() {
    redirect('/pricing'); // TODO: Remove this line for development
    return (
        <div>
            <h1>Marketting Page</h1>
        </div>
    );
}
