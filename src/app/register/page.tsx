'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    if (form.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    const users = JSON.parse(localStorage.getItem('afa_users') || '[]');
    if (users.find((u: any) => u.email === form.email)) {
      setError('Un compte avec cet email existe déjà');
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('afa_users', JSON.stringify(users));
    localStorage.setItem('afa_user', JSON.stringify(newUser));
    localStorage.setItem('afa_token', 'logged_in');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          AFA <span className="text-blue-400">Prep</span>
        </h1>
        <p className="text-white/60 mb-8">Créez votre compte</p>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Prénom</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm(p => ({ ...p, firstName: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Nom</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm(p => ({ ...p, lastName: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Mot de passe</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm(p => ({ ...p, password: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Confirmer le mot de passe</label>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) => setForm(p => ({ ...p, confirmPassword: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center text-white/50 mt-6">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
