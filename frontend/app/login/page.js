'use client';
import Auth from '../components/Auth';

export default function LoginPage() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Login or Register</h1>
      <Auth />
    </div>
  );
}