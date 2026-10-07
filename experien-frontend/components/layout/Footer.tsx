import Link from "next/link";

const col = "space-y-2 text-sm text-white/80";

export default function Footer() {
  return (
    <footer className="bg-ink  ">
      <div className="bg-ink text-white mx-auto max-w-[1400px]  px-6 md:px-16 md:px-16 py-12 ">
      <div className="grid gap-8  md:grid-cols-[2fr_1fr_1fr]">
        <div>
      

           {/* Logo */}
  <Link href="/" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
  <img src="/logo2.png" alt="Experien" className="h-9 w-auto md:h-11" />
</Link>

          <p className=" max-w-xs text-xs text-white/70">Industry-focused project management training.</p>
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
      <div className="mt-8 border-t border-white/40 py-4 text-center text-xs text-white/60 flex justify-between">
        <p>Experien</p>
          <p> Industry-focused Learning</p>

      </div>
      </div>
    </footer>
  );
}
