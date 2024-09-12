'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminStatus = localStorage.getItem('isAdmin');
    setIsLoggedIn(!!token);
    setIsAdmin(adminStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);
    router.push('/');
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tight hover:text-yellow-300 transition duration-300">
            ToLet
          </Link>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-yellow-300 transition duration-300">Search</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link href="/dashboard" className="hover:text-yellow-300 transition duration-300">Dashboard</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link href="/admin" className="hover:text-yellow-300 transition duration-300">Admin</Link>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}