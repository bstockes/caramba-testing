import Link from 'next/link'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
<div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Caramba</h1>
          <div className="space-x-4 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/ask" className="text-gray-700 hover:text-blue-600">Ask Carly</Link>
            <Link href="/mygarage" className="text-gray-700 hover:text-blue-600">My Garage</Link>
            <Link href="/myinfo" className="text-gray-700 hover:text-blue-600">My Info</Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">Account</Link>
          </>
  )
        </>
  )
      </nav>
      <main className="max-w-3xl mx-auto p-4 flex-grow">{children}</main>
    </>
  )
  )
}
