'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('afa_user');
    if (!stored) { router.push('/login'); return; }
    setUser(JSON.parse(stored));
    setHistory(JSON.parse(localStorage.getItem('afa_history') || '[]'));
  }, [router]);

  if (!user) return null;

  const totalTests = history.length;
  const avgScore = totalTests > 0 ? Math.round(history.reduce((s, h) => s + h.score, 0) / totalTests) : 0;
  const bestScore = totalTests > 0 ? Math.max(...history.map(h => h.score)) : 0;
  const totalQ = history.reduce((s, h) => s + h.totalQuestions, 0);

  return (
    <div className="min-h-screen bg-slate-900 p-4">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 bg-white/5 rounded-xl p-4 border border-white/10">
        <h1 className="text-2xl font-bold text-white">
          AFA <span className="text-blue-400">Prep</span> - Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm">{user.firstName || user.email}</span>
          <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            Accueil
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-white/50 text-sm mb-2">Total Tests</div>
            <div className="text-4xl font-bold text-blue-400">{totalTests}</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-white/50 text-sm mb-2">Score Moyen</div>
            <div className="text-4xl font-bold text-green-400">{avgScore}%</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-white/50 text-sm mb-2">Meilleur Score</div>
            <div className="text-4xl font-bold text-purple-400">{bestScore}%</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-white/50 text-sm mb-2">Questions Pratiquées</div>
            <div className="text-4xl font-bold text-yellow-400">{totalQ}</div>
          </div>
        </div>

        {/* Progress Chart (simple) */}
        {history.length > 0 && (
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Progression des scores</h2>
            <div className="flex items-end gap-2 h-40">
              {history.slice(0, 20).reverse().map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-white/40">{h.score}%</span>
                  <div
                    className={`w-full rounded-t ${
                      h.score >= 80 ? 'bg-green-500' : h.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ height: `${h.score}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-white/30">Ancien</span>
              <span className="text-xs text-white/30">Récent</span>
            </div>
          </div>
        )}

        {/* Score Distribution */}
        {history.length > 0 && (
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Distribution des scores</h2>
            <div className="space-y-3">
              {[
                { range: '90-100%', color: 'bg-green-500', count: history.filter(h => h.score >= 90).length },
                { range: '80-89%', color: 'bg-blue-500', count: history.filter(h => h.score >= 80 && h.score < 90).length },
                { range: '70-79%', color: 'bg-yellow-500', count: history.filter(h => h.score >= 70 && h.score < 80).length },
                { range: '60-69%', color: 'bg-orange-500', count: history.filter(h => h.score >= 60 && h.score < 70).length },
                { range: '<60%', color: 'bg-red-500', count: history.filter(h => h.score < 60).length },
              ].map(item => (
                <div key={item.range} className="flex items-center gap-3">
                  <span className="w-16 text-sm text-white/60">{item.range}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${totalTests > 0 ? (item.count / totalTests) * 100 : 0}%` }} />
                  </div>
                  <span className="w-8 text-right text-sm text-white/60">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test History */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Historique des tests</h2>
          {history.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-sm text-white/50">Date</th>
                    <th className="px-4 py-3 text-left text-sm text-white/50">Score</th>
                    <th className="px-4 py-3 text-left text-sm text-white/50">Réponses</th>
                    <th className="px-4 py-3 text-left text-sm text-white/50">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(0, 20).map((test, i) => {
                    const d = new Date(test.date);
                    const min = Math.floor(test.duration / 60);
                    const sec = test.duration % 60;
                    return (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-4 py-3 text-sm text-white/70">
                          {d.toLocaleDateString('fr-CH')} {d.toLocaleTimeString('fr-CH', { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            test.score >= 80 ? 'bg-green-500/20 text-green-400' :
                            test.score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {test.score}%
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-white/70">
                          {test.correctAnswers}/{test.totalQuestions}
                        </td>
                        <td className="px-4 py-3 text-sm text-white/70">{min}m {sec}s</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-white/40">
              Aucun test effectué. Commencez un test maintenant!
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/test" className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition">
            Démarrer un nouveau test
          </Link>
        </div>
      </div>
    </div>
  );
}
