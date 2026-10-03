"use client";

import { usePathname } from "next/navigation";

// The landing page is full-width. All other pages sit in a centred container.
export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <main className="flex-1">{children}</main>;
  return <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>;
}
