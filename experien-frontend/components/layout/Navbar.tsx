import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-line bg-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-ink">experien</Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/industries" className="hidden md:inline">Industries</Link>
          <Link href="/industries" className="hidden md:inline">Courses</Link>
          <Link href="/#how-it-works" className="hidden md:inline">How it works</Link>
          <Link href="/login">Log in</Link>
          <Link href="/register" className="rounded-md bg-lime px-4 py-2 font-semibold text-ink hover:brightness-95">Sign up</Link>
        </div>
      </nav>
    </header>
  );
}
