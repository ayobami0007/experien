import Link from "next/link";

const col = "space-y-2 text-sm text-white/80";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-extrabold">experien</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">Industry-focused project management training.</p>
        </div>
        <ul className={col}>
          <li className="font-semibold text-white">Explore</li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/industries">Courses</Link></li>
          <li><Link href="/#how-it-works">How it works</Link></li>
        </ul>
        <ul className={col}>
          <li className="font-semibold text-white">Learn</li>
          <li><Link href="/dashboard">Start learning</Link></li>
          <li><Link href="/dashboard">My learning</Link></li>
          <li>Course modules</li>
          <li>Quizzes and progress</li>
        </ul>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Experien · PNA 5
      </div>
    </footer>
  );
}
