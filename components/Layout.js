import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Caramba</h1>
          <div className="space-x-4 text-sm">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/ask" className="text-gray-700 hover:text-blue-600">Ask Carly</Link>
            <Link href="/mygarage" className="text-gray-700 hover:text-blue-600">My Garage</Link>
            <Link href="/myinfo" className="text-gray-700 hover:text-blue-600">My Info</Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">Account</Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1 max-w-3xl mx-auto p-4">{children}</main>
    </div>
  );
}