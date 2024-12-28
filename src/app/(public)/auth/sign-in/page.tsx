import { Login } from '../../login';
import { redirect } from 'next/navigation';

export default function SignInPage() {
    redirect('/pricing'); // TODO: Remove this line for development
    //return <Login mode="signin" />;
}
