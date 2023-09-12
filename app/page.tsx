import { UserButton } from '@clerk/nextjs';

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl text-blue-400">Landing Page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}