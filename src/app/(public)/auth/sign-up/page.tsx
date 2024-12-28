import { Login } from '../../login';
import { redirect } from 'next/navigation';

export default function SignUpPage() {
    redirect('/pricing'); // TODO: Remove this line for development
    //return <Login mode="signup" />;
}
