import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Caramba</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/ask" className="hover:underline">Ask Carly</Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
    </div>
  )
}