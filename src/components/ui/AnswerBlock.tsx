import { Eyebrow } from './Eyebrow'

interface AnswerBlockProps {
  /** The "What is…" question shown as a kicker. */
  kicker: string
  /** 2–3 sentence direct answer (the answer-engine block, plan §7.4). */
  answer: string
}

/**
 * The AEO direct-answer block that opens role/guide pages: a self-contained,
 * quotable 2–3 sentence answer before any marketing copy.
 */
export function AnswerBlock({ kicker, answer }: AnswerBlockProps) {
  return (
    <div className="mx-auto max-w-prose text-center">
      <Eyebrow className="mb-4">{kicker}</Eyebrow>
      <p className="font-serif text-subtitle text-ve-text-primary text-balance">{answer}</p>
    </div>
  )
}
