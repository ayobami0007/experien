import Link from "next/link";

export default function PaymentNotConfirmed({ slug, paymentRef }: { slug: string; paymentRef: string }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          If payment is not confirmed
        </p>
        <h2 className="mt-2 text-xl font-medium tracking-tight">
          Your access stays inactive until payment is confirmed.
        </h2>
        <p className="mt-2 max-w-xl text-xs text-muted">
          Retry the payment or check the status of an existing transaction. Experien should not
          create a duplicate enrolment.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 md:flex-col">
        <Link
          href={`/checkout/${slug}`}
          className="rounded-lg bg-lime px-4 py-2 text-center text-xs font-medium text-ink hover:brightness-95"
        >
          Retry payment
        </Link>
        <Link
          href={`/checkout/success?course=${slug}&reference=${encodeURIComponent(paymentRef)}`}
          className="rounded-lg border border-ink px-4 py-2 text-center text-xs font-medium hover:bg-[#F6F8F3]"
        >
          Check payment status
        </Link>
      </div>
    </div>
  );
}