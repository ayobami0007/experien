import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand">Experien</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/industries">Industries</Link>
          <Link href="/dashboard">My Learning</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}
