'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { generateTestSeries, Question } from '@/data/questions';

export default function TestPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[][]>([]);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem('afa_user');
    if (!user) {
      router.push('/login');
      return;
    }
    const series = generateTestSeries();
    setQuestions(series);
    setUserAnswers(series.map(q => Array(q.answers.length).fill(false)));
    setStartTime(Date.now());
  }, [router]);

  useEffect(() => {
    if (submitted || !startTime) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, submitted]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const toggleAnswer = (answerIdx: number) => {
    if (submitted) return;
    const q = questions[currentIndex];
    const isMultiple = q.answers.filter(a => a.correct).length > 1;

    setUserAnswers(prev => {
      const next = prev.map(a => [...a]);
      if (isMultiple) {
        next[currentIndex][answerIdx] = !next[currentIndex][answerIdx];
      } else {
        next[currentIndex] = next[currentIndex].map((_, i) => i === answerIdx);
      }
      return next;
    });
  };

  const handleSubmit = () => {
    if (!confirm('Êtes-vous sûr de vouloir soumettre ce test ?')) return;

    let correctCount = 0;
    const themeBreakdown: Record<string, { correct: number; total: number }> = {};

    const details = questions.map((q, qi) => {
      const userSelected = userAnswers[qi];
      const isCorrect = q.answers.every((a, ai) => a.correct === userSelected[ai]);
      if (isCorrect) correctCount++;

      const theme = q.theme.split(',')[0].trim();
      if (!themeBreakdown[theme]) themeBreakdown[theme] = { correct: 0, total: 0 };
      themeBreakdown[theme].total++;
      if (isCorrect) themeBreakdown[theme].correct++;

      return { question: q, userSelected, isCorrect };
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const result = {
      id: `test_${Date.now()}`,
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      score,
      duration: elapsed,
      themeBreakdown,
      details
    };

    // Save to localStorage
    const history = JSON.parse(localStorage.getItem('afa_history') || '[]');
    history.unshift(result);
    localStorage.setItem('afa_history', JSON.stringify(history.slice(0, 100)));

    setResults(result);
    setSubmitted(true);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Chargement des questions...</div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const isMultiple = q.answers.filter(a => a.correct).length > 1;
  const answeredCount = userAnswers.filter(a => a.some(v => v)).length;

  // Results view
  if (submitted && results) {
    return (
      <div className="min-h-screen bg-slate-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Score Card */}
          <div className={`rounded-2xl p-8 mb-8 text-center ${
            results.score >= 80 ? 'bg-green-900/30 border border-green-500/30' :
            results.score >= 60 ? 'bg-yellow-900/30 border border-yellow-500/30' :
            'bg-red-900/30 border border-red-500/30'
          }`}>
            <div className={`text-7xl font-bold mb-2 ${
              results.score >= 80 ? 'text-green-400' : results.score >= 60 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {results.score}%
            </div>
            <div className="text-white text-xl mb-1">
              {results.correctAnswers}/{results.totalQuestions} réponses correctes
            </div>
            <div className="text-white/60">Durée: {formatTime(results.duration)}</div>
            <div className="text-white/60 mt-2">
              {results.score >= 80 ? 'Excellent !' : results.score >= 60 ? 'Bon travail !' : 'Continuez vos efforts !'}
            </div>
          </div>

          {/* Theme Breakdown */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Résultats par thème</h3>
            <div className="space-y-3">
              {Object.entries(results.themeBreakdown).map(([theme, data]: [string, any]) => {
                const pct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={theme} className="flex items-center gap-4">
                    <span className="w-24 text-sm text-white/70 truncate">{theme}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className={`h-full rounded-full ${
                        pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-sm text-white/70 w-20 text-right">{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Answers */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Détail des réponses</h3>
            <div className="space-y-4">
              {results.details.map((d: any, i: number) => (
                <div key={i} className={`rounded-lg p-4 border-l-4 ${
                  d.isCorrect ? 'border-green-500 bg-green-900/10' : 'border-red-500 bg-red-900/10'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium text-sm">Q{i+1}. {d.question.question.substring(0, 100)}...</p>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      d.isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {d.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  {!d.isCorrect && (
                    <div className="mt-2 space-y-1">
                      {d.question.answers.map((a: any, ai: number) => (
                        <div key={ai} className={`text-xs px-2 py-1 rounded ${
                          a.correct ? 'text-green-400 bg-green-900/20' :
                          d.userSelected[ai] ? 'text-red-400 bg-red-900/20' : 'text-white/40'
                        }`}>
                          {a.correct ? '✓' : d.userSelected[ai] ? '✗' : '○'} {a.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button onClick={() => router.push('/')} className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 font-semibold">
              Accueil
            </button>
            <button onClick={() => window.location.reload()} className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-semibold">
              Nouveau test
            </button>
            <button onClick={() => router.push('/dashboard')} className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 font-semibold">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      {/* Header bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{formatTime(elapsed)}</div>
            <p className="text-xs text-white/50">Temps</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{currentIndex + 1}/{questions.length}</div>
            <p className="text-xs text-white/50">Question</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{answeredCount}/{questions.length}</div>
            <p className="text-xs text-white/50">Répondues</p>
          </div>
        </div>
        <button
          onClick={() => { if (confirm('Quitter le test ?')) router.push('/'); }}
          className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg text-sm hover:bg-red-500/30"
        >
          Quitter
        </button>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10 mb-6">
        <div className="flex gap-2 mb-4">
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-xs font-medium">
            {q.theme.split(',')[0].trim()}
          </span>
          <span className="bg-white/10 text-white/60 px-3 py-1 rounded text-xs">
            {q.complexity} - {q.points} pt{q.points > 1 ? 's' : ''}
          </span>
          <span className="bg-white/10 text-white/60 px-3 py-1 rounded text-xs">
            {isMultiple ? 'Plusieurs réponses' : 'Une seule réponse'}
          </span>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">{q.question}</h2>
        <p className="text-white/50 text-sm mb-6">{q.instruction}</p>

        {/* Answers */}
        <div className="space-y-3">
          {q.answers.map((answer, idx) => (
            <button
              key={idx}
              onClick={() => toggleAnswer(idx)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                userAnswers[currentIndex]?.[idx]
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-${isMultiple ? 'md' : 'full'} border-2 flex items-center justify-center flex-shrink-0 ${
                  userAnswers[currentIndex]?.[idx]
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-white/30'
                }`}>
                  {userAnswers[currentIndex]?.[idx] && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-white/90 text-sm">{answer.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto">
        {/* Question dots */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                idx === currentIndex
                  ? 'bg-blue-600 text-white'
                  : userAnswers[idx]?.some(v => v)
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-white/5 text-white/50 border border-white/10'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 disabled:opacity-30 border border-white/10"
          >
            Précédente
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={answeredCount < questions.length}
              className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-30 font-bold"
            >
              Soumettre ({answeredCount}/{questions.length})
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Suivante
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
