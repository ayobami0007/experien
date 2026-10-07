"use client";

import { usePathname } from "next/navigation";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullWidth = pathname === "/" || pathname.startsWith("/industries");
  if (fullWidth) return <main className="flex-1">{children}</main>;
  return <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>;
}