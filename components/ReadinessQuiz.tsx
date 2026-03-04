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

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  completed: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Do you know what you want to do after the military?',
    answers: [
      { text: 'Yes, I have a clear target industry/role', points: 3 },
      { text: 'I have a general direction but need to refine it', points: 2 },
      {
        text: "Not yet -- that's part of why I'm considering an MBA",
        points: 1,
      },
    ],
  },
  {
    id: 2,
    text: 'Have you looked into how to fund your MBA?',
    answers: [
      {
        text: 'Yes -- I know my GI Bill and Yellow Ribbon situation',
        points: 3,
      },
      { text: "I know the basics but haven't done the math", points: 2 },
      {
        text: "Not really -- I assumed it would work out",
        points: 1,
      },
    ],
  },
  {
    id: 3,
    text: 'Have you talked to your spouse/partner/family about this?',
    answers: [
      {
        text: "Yes, we've had real conversations about timeline and tradeoffs",
        points: 3,
      },
      { text: "They know I'm thinking about it", points: 2 },
      { text: 'Not yet / not applicable', points: 1 },
    ],
  },
  {
    id: 4,
    text: 'Why do you want an MBA? Be honest.',
    answers: [
      {
        text: 'I have a specific career goal that requires it',
        points: 3,
      },
      {
        text: 'I want to accelerate my transition and open doors',
        points: 2,
      },
      {
        text: 'It seems like what successful officers do',
        points: 1,
      },
    ],
  },
  {
    id: 5,
    text: "How's your academic foundation?",
    answers: [
      {
        text: 'Solid GPA, confident in standardized tests',
        points: 3,
      },
      {
        text: "GPA wasn't great but I can crush the GMAT/GRE",
        points: 2,
      },
      {
        text: 'Academics were never my strength',
        points: 1,
      },
    ],
  },
  {
    id: 6,
    text: 'Are you ready to recruit aggressively during school?',
    answers: [
      {
        text: 'Absolutely -- networking and recruiting are the whole point',
        points: 3,
      },
      {
        text: "I think so, but I'm not sure what that looks like",
        points: 2,
      },
      { text: "I figured I'd focus on classes first", points: 1 },
    ],
  },
  {
    id: 7,
    text: 'How do you think about your military identity?',
    answers: [
      {
        text: "It's a huge asset, and I know how to translate it",
        points: 3,
      },
      {
        text:
          "I'm proud of it but not sure how civilians see it",
        points: 2,
      },
      {
        text: "I'm worried it might work against me",
        points: 1,
      },
    ],
  },
  {
    id: 8,
    text: 'When are you targeting?',
    answers: [
      {
        text: 'I have a specific application round in mind',
        points: 3,
      },
      { text: 'Next 1-2 years, still figuring out timing', points: 2 },
      { text: 'No timeline yet', points: 1 },
    ],
  },
];

function getResultCategory(
  score: number
): { category: string; subtitle: string; color: string } {
  if (score >= 6) {
    return {
      category: 'Ready to Execute',
      subtitle:
        "You've got the clarity and mindset that separates officers who succeed from those who get stuck. You're ready to move.",
      color: 'text-amber-600',
    };
  } else if (score >= 4) {
    return {
      category: 'Almost There',
      subtitle:
        "You're thinking strategically about the transition. A little more structure on the fundamentals will unlock your readiness.",
      color: 'text-amber-700',
    };
  } else {
    return {
      category: 'Early Recon',
      subtitle:
        "You're in the right space to start exploring. The MBA can be the right move, but you need a clearer map first.",
      color: 'text-slate-600',
    };
  }
}

function getCtaLinks(score: number): { primary: string; secondary: string } {
  if (score >= 6) {
    return {
      primary: '/coaching',
      secondary: '/book',
    };
  } else if (score >= 4) {
    return {
      primary: '/book',
      secondary: '/strategy-call',
    };
  } else {
    return {
      primary: '/book',
      secondary: '/blog',
    };
  }
}

function getCtaText(
  score: number
): { primary: string; secondary: string } {
  if (score >= 6) {
    return {
      primary: 'Get Coaching',
      secondary: 'Get the Book',
    };
  } else if (score >= 4) {
    return {
      primary: 'Get the Book',
      secondary: 'Schedule Strategy Call',
    };
  } else {
    return {
      primary: 'Get the Book',
      secondary: 'Read the Blog',
    };
  }
}

export default function ReadinessQuiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false,
  });

  const handleAnswer = (points: number) => {
    const newAnswers = [...quizState.answers, points];
    const newScore = quizState.score + points;
    const nextQuestion = quizState.currentQuestion + 1;

    if (nextQuestion >= questions.length) {
      setQuizState({
        currentQuestion: nextQuestion,
        score: newScore,
        answers: newAnswers,
        completed: true,
      });
    } else {
      setQuizState({
        currentQuestion: nextQuestion,
        score: newScore,
        answers: newAnswers,
        completed: false,
      });
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      completed: false,
    });
  };

  const progress = ((quizState.currentQuestion) / questions.length) * 100;

  if (quizState.completed) {
    const result = getResultCategory(quizState.score);
    const ctas = getCtaLinks(quizState.score);
    const ctaTexts = getCtaText(quizState.score);

    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-cream px-4 py-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Results Card */}
          <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
            {/* Score Badge */}
            <div className="mb-8 flex justify-center">
              <div
                className="relative h-32 w-32 rounded-full"
                style={{
                  background: `conic-gradient(#C4973B ${quizState.score * (360 / 24)}deg, #E5E7EB 0deg)`,
                }}
              >
                <div className="absolute inset-2 flex flex-col items-center justify-center rounded-full bg-white">
                  <div className="text-4xl font-bold text-navy">
                    {quizState.score}
                  </div>
                  <div className="text-xs text-slate">/ 24</div>
                </div>
              </div>
            </div>

            {/* Result Category */}
            <h2 className="mb-3 text-center text-3xl font-bold text-navy md:text-4xl">
              {result.category}
            </h2>
            <p className="mb-8 text-center text-lg text-slate md:text-xl">
              {result.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={ctas.primary}
                className="btn-shine rounded-xl bg-amber-600 px-8 py-4 text-center font-semibold text-white transition-all hover:bg-amber-700"
              >
                {ctaTexts.primary}
              </Link>
              <Link
                href={ctas.secondary}
                className="card-hover rounded-xl border-2 border-navy bg-transparent px-8 py-4 text-center font-semibold text-navy transition-all hover:bg-navy hover:text-cream"
              >
                {ctaTexts.secondary}
              </Link>
            </div>

            {/* Retake Button */}
            <button
              onClick={resetQuiz}
              className="mx-auto block text-sm font-medium text-slate transition-colors hover:text-navy"
            >
              Retake Quiz
            </button>

            {/* Disclaimer */}
            <p className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-slate">
              This quiz is a starting point to help you think through your MBA readiness. Your actual path will depend on your goals, circumstances, and the schools you're targeting.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-navy md:text-5xl">
            MBA Readiness Quiz
          </h1>
          <p className="text-lg text-slate">
            Let's figure out where you stand.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-slate">
              Question {quizState.currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-amber-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-amber-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div
          key={currentQ.id}
          className="animate-fade-in rounded-xl bg-white p-8 shadow-lg md:p-10"
        >
          {/* Question Text */}
          <h2 className="mb-8 text-2xl font-bold text-navy md:text-3xl">
            {currentQ.text}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQ.answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(answer.points)}
                className="card-hover group w-full rounded-xl border-2 border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:border-amber-600 hover:bg-amber-50 md:p-6"
              >
                <p className="text-base font-medium text-navy group-hover:text-amber-700 md:text-lg">
                  {answer.text}
                </p>
              </button>
            ))}
          </div>

          {/* Helpful Text */}
          <p className="mt-8 text-center text-sm text-slate">
            There are no wrong answers. We're just trying to understand where you're at.
          </p>
        </div>

        {/* Skip/Back Info */}
        <div className="mt-8 text-center text-xs text-slate">
          <p>
            You're {quizState.currentQuestion + 1} of {questions.length} questions in.
          </p>
        </div>
      </div>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
