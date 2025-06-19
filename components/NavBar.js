import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-4 mb-6 font-medium text-blue-700">
      <Link href="/">Home</Link>
      <Link href="/ask">Ask Carly</Link>
      <Link href="/mygarage">My Garage</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}