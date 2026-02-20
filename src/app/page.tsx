'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getQuestionStats } from '@/data/questions';

export default function HomePage() {
  const stats = getQuestionStats();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('afa_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            AFA <span className="text-blue-400">Prep</span>
          </h1>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-white/80 text-sm">Bonjour, {user.firstName || user.email}</span>
                <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={() => { localStorage.removeItem('afa_user'); localStorage.removeItem('afa_token'); setUser(null); }}
                  className="bg-red-500/20 text-red-300 px-3 py-1.5 rounded text-sm hover:bg-red-500/30"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-white/80 hover:text-white text-sm">
                  Connexion
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Réussissez votre examen
            <span className="text-blue-400"> AFA</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
            Préparez-vous à l'épreuve "Compétences et connaissances générales" -
            La première étape obligatoire pour devenir intermédiaire d'assurance.
          </p>
          <p className="text-white/50 mb-8">
            Séries de 17 à 25 questions aléatoires - Entraînez-vous autant de fois que nécessaire
          </p>

          {user ? (
            <Link
              href="/test"
              className="inline-block bg-blue-600 text-white text-lg font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
            >
              Démarrer une série de test
            </Link>
          ) : (
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white text-lg font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
            >
              Commencer gratuitement
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">{stats.total}</div>
            <p className="text-white/70">Questions disponibles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">{stats.themes}</div>
            <p className="text-white/70">Thèmes couverts</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">17-25</div>
            <p className="text-white/70">Questions par série</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <p className="text-white/70">Conforme AFA</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Séries Aléatoires</h3>
            <p className="text-white/60">
              Chaque test est unique avec 17 à 25 questions tirées aléatoirement de notre base de données complète.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Suivi de Progression</h3>
            <p className="text-white/60">
              Consultez vos résultats détaillés et suivez votre progression au fil du temps avec des statistiques par thème.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Thèmes Complets</h3>
            <p className="text-white/60">
              Droit (LSA, LCA), Industrie de l'assurance, gestion des risques, primes et classification.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Tarif simple et transparent</h3>
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30">
            <div className="text-blue-400 font-bold text-lg mb-2">Accès Complet</div>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-5xl font-bold text-white">9.90</span>
              <span className="text-white/60">CHF / semaine</span>
            </div>
            <ul className="text-white/70 text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Accès illimité à toutes les séries
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> {stats.total}+ questions d'examen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Suivi de progression détaillé
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Correction instantanée
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Statistiques par thème
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Annulation à tout moment
              </li>
            </ul>
            <Link
              href="/register"
              className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Commencer maintenant
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white/40 py-8 border-t border-white/10">
          <p>&copy; 2024 AFA Prep - Plateforme de préparation à l'examen AFA</p>
          <p className="text-sm mt-2">Compétences et connaissances générales - Intermédiaires d'assurance</p>
        </footer>
      </main>
    </div>
  );
}
