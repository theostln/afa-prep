'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check stored users
    const users = JSON.parse(localStorage.getItem('afa_users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      setError('Email ou mot de passe incorrect');
      return;
    }

    localStorage.setItem('afa_user', JSON.stringify(user));
    localStorage.setItem('afa_token', 'logged_in');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          AFA <span className="text-blue-400">Prep</span>
        </h1>
        <p className="text-white/60 mb-8">Connectez-vous à votre compte</p>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-white/50 mt-6">
          Pas encore inscrit ?{' '}
          <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
