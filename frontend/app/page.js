import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ToLet</h1>
      <p className="mb-4">Find your perfect home with ToLet</p>
      <div className="space-x-4">
        <Link href="/search" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search Homes
        </Link>
        <Link href="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
