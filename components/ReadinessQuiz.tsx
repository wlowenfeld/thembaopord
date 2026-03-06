'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  points: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Do you know what you want to do after the military?',
    answers: [
      { text: 'Yes, I have a clear target industry and role', points: 3 },
      { text: 'I have a general direction but need to refine it', points: 2 },
      { text: "Not yet -- that's part of why I'm considering an MBA", points: 1 },
    ],
  },
  {
    id: 2,
    text: 'Have you looked into how to fund your MBA?',
    answers: [
      { text: 'Yes -- I know my GI Bill and Yellow Ribbon situation', points: 3 },
      { text: "I know the basics but haven't done the math", points: 2 },
      { text: "Not really -- I assumed it would work out", points: 1 },
    ],
  },
  {
    id: 3,
    text: 'Have you talked to your spouse/partner/family about this?',
    answers: [
      { text: "Yes, we've had real conversations about timeline and tradeoffs", points: 3 },
      { text: "They know I'm thinking about it", points: 2 },
      { text: 'Not yet / not applicable', points: 1 },
    ],
  },
  {
    id: 4,
    text: 'Why do you want an MBA? Be honest.',
    answers: [
      { text: 'I have a specific career goal that requires it', points: 3 },
      { text: 'I want to accelerate my transition and open doors', points: 2 },
      { text: 'It seems like what successful officers do', points: 1 },
    ],
  },
  {
    id: 5,
    text: "How's your academic foundation?",
    answers: [
      { text: 'Solid GPA, confident in standardized tests', points: 3 },
      { text: "GPA wasn't great but I can crush the GMAT/GRE", points: 2 },
      { text: 'Academics were never my strength', points: 1 },
    ],
  },
  {
    id: 6,
    text: 'Are you ready to recruit aggressively during school?',
    answers: [
      { text: 'Absolutely -- networking and recruiting are the whole point', points: 3 },
      { text: "I think so, but I'm not sure what that looks like", points: 2 },
      { text: "I figured I'd focus on classes first", points: 1 },
    ],
  },
  {
    id: 7,
    text: 'How do you think about your military identity?',
    answers: [
      { text: "It's a huge asset, and I know how to translate it", points: 3 },
      { text: "I'm proud of it but not sure how civilians see it", points: 2 },
      { text: "I'm worried it might work against me", points: 1 },
    ],
  },
  {
    id: 8,
    text: 'When are you targeting?',
    answers: [
      { text: 'I have a specific application round in mind', points: 3 },
      { text: 'Next 1-2 years, still figuring out timing', points: 2 },
      { text: 'No timeline yet', points: 1 },
    ],
  },
];

// Max score: 24. Thresholds: 20+ = Ready, 14-19 = Almost, <14 = Early
function getResult(score: number) {
  if (score >= 20) {
    return {
      category: 'Ready to Execute',
      subtitle: "You've done the homework. You know what you want, you know how to fund it, and you've got a timeline. Now it's about execution -- nailing the application, framing your story right, and making sure nothing falls through the cracks.",
      primaryCta: { text: 'Book a Free Strategy Call', href: '/coaching#strategy-call' },
      secondaryCta: { text: 'Get the Book', href: '/book' },
      color: 'bg-green-500',
    };
  } else if (score >= 14) {
    return {
      category: 'Almost There',
      subtitle: "You're thinking seriously about this, but there are gaps -- maybe funding, maybe your story, maybe timing. The good news: those gaps are closeable. You need a plan, not more thinking.",
      primaryCta: { text: 'Get the Book', href: '/book' },
      secondaryCta: { text: 'Book a Free Strategy Call', href: '/coaching#strategy-call' },
      color: 'bg-gold',
    };
  } else {
    return {
      category: 'Early Recon',
      subtitle: "An MBA could be the right move, but you're early in the process. Before committing time and money to applications, you need to get clear on your goals, your funding, and whether this is actually the right path for you right now.",
      primaryCta: { text: 'Get the Book', href: '/book' },
      secondaryCta: { text: 'Read the Blog', href: '/blog' },
      color: 'bg-navy',
    };
  }
}

export default function ReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<'quiz' | 'email' | 'results'>('quiz');
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    const next = currentQuestion + 1;

    if (next >= questions.length) {
      setScore(newScore);
      setPhase('email');
    } else {
      setScore(newScore);
      setCurrentQuestion(next);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setPhase('results');
      } else {
        setEmailStatus('error');
      }
    } catch {
      setEmailStatus('error');
    }
  };

  const skipEmail = () => {
    setPhase('results');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setPhase('quiz');
    setEmail('');
    setEmailStatus('idle');
  };

  const progress = (currentQuestion / questions.length) * 100;

  // === EMAIL GATE ===
  if (phase === 'email') {
    return (
      <div className="max-w-xl mx-auto">
        <div className="rounded-xl bg-white p-8 shadow-lg md:p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-cta text-2xl font-bold">&#10003;</span>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-3">Quiz complete!</h3>
          <p className="text-slate-dark mb-8">
            Enter your email to get your personalized readiness report with specific next steps.
          </p>
          <form onSubmit={handleEmailSubmit} className="space-y-3 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta"
            />
            <button
              type="submit"
              disabled={emailStatus === 'loading'}
              className="btn-shine w-full px-6 py-3 bg-cta hover:bg-cta-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
            >
              {emailStatus === 'loading' ? 'Sending...' : 'Get My Results'}
            </button>
          </form>
          {emailStatus === 'error' && (
            <p className="text-red-600 text-sm mt-2">Something went wrong. Try again.</p>
          )}
          <button
            onClick={skipEmail}
            className="mt-4 text-xs text-slate hover:text-navy transition-colors"
          >
            Skip and see results
          </button>
        </div>
      </div>
    );
  }

  // === RESULTS ===
  if (phase === 'results') {
    const result = getResult(score);

    return (
      <div className="max-w-xl mx-auto">
        <div className="rounded-xl bg-white p-8 shadow-lg md:p-10">
          {/* Score ring */}
          <div className="mb-8 flex justify-center">
            <div
              className="relative h-28 w-28 rounded-full"
              style={{
                background: `conic-gradient(#E8593A ${score * (360 / 24)}deg, #E5E7EB 0deg)`,
              }}
            >
              <div className="absolute inset-2 flex flex-col items-center justify-center rounded-full bg-white">
                <div className="text-3xl font-bold text-navy">{score}</div>
                <div className="text-xs text-slate">/ 24</div>
              </div>
            </div>
          </div>

          <h3 className="mb-3 text-center text-2xl font-bold text-navy md:text-3xl">
            {result.category}
          </h3>
          <p className="mb-8 text-center text-slate-dark leading-relaxed">
            {result.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-6">
            <Link
              href={result.primaryCta.href}
              className="btn-shine rounded-lg bg-cta hover:bg-cta-dark px-6 py-3 text-center font-semibold text-white transition-colors"
            >
              {result.primaryCta.text}
            </Link>
            <Link
              href={result.secondaryCta.href}
              className="rounded-lg border-2 border-navy px-6 py-3 text-center font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              {result.secondaryCta.text}
            </Link>
          </div>

          <button
            onClick={resetQuiz}
            className="mx-auto block text-sm text-slate hover:text-navy transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // === QUIZ QUESTIONS ===
  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-cta">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-cta transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-xl bg-white p-8 shadow-lg md:p-10">
        <h3 className="mb-6 text-xl font-bold text-navy md:text-2xl">
          {currentQ.text}
        </h3>

        <div className="space-y-3">
          {currentQ.answers.map((answer, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(answer.points)}
              className="group w-full rounded-lg border-2 border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-cta hover:bg-cta/5"
            >
              <p className="text-sm font-medium text-navy group-hover:text-cta-dark md:text-base">
                {answer.text}
              </p>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate">
          No wrong answers. Just trying to understand where you are.
        </p>
      </div>
    </div>
  );
}
