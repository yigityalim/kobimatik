import Link from 'next/link';

export default function Forbidden() {
    return (
        <div>
            <h2>Forbidden</h2>
            <p>You are not authorized to access this resource.</p>
            <Link href="/sign-in" className="mt-4 w-full text-center">
                Login
            </Link>
        </div>
    );
}
