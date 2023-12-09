// components/LoginScreen.tsx
import React from 'react';
import Link from 'next/link';

const LoginScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-8">Cosmic Retreat</h1>
      <Link href="/game">
        <a className="inline-block px-4 py-2 bg-blue-500 text-white text-lg rounded transition duration-300 ease-in-out hover:bg-blue-700">
          Play
        </a>
      </Link>
    </div>
  );
};

export default LoginScreen;
