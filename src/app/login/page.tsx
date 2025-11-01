import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import { loginAction } from '@/app/actions/login';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <LoginForm onSubmit={loginAction} />
    </div>
  );
}
