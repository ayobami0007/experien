import Link from "next/link";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "outline" };

export default function Button({ href, children, variant = "primary" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border border-brand text-brand hover:bg-brand-light";
  return (
    <Link href={href} className={`inline-block rounded-md px-4 py-2 text-sm font-medium ${styles}`}>
      {children}
    </Link>
  );
}
