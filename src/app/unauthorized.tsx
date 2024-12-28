import Link from 'next/link';

export default function UnauthorizedPage() {
    return (
        <main>
            <h1>401 - Unauthorized</h1>
            <p>Please log in to access this page.</p>
            <Link href="/sign-in" className="mt-4 w-full text-center">
                Login
            </Link>
        </main>
    );
}
