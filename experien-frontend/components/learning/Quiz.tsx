"use client";

import { useState } from "react";
import { QuizQuestion } from "@/types";

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter((q) => answers[q.id] === q.answerIndex).length;

  return (
    <div className="space-y-5">
      {questions.map((q) => (
        <div key={q.id}>
          <p className="font-medium">{q.question}</p>
          <div className="mt-2 space-y-1">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name={q.id}
                  disabled={submitted}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="rounded-md bg-brand px-4 py-2 text-sm text-white hover:bg-brand-dark">
          Submit quiz
        </button>
      ) : (
        <p className="font-semibold">You scored {score} / {questions.length}</p>
      )}
    </div>
  );
}
