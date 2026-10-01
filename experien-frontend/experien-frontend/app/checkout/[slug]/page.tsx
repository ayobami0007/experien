import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getCourse } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils/format";

export default function CheckoutPage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="rounded border p-4">
        <p className="font-medium">{course.title}</p>
        <p className="text-sm text-gray-600">{formatPrice(course.price)}</p>
      </div>
      {/* TODO: replace with real payment integration from the backend team */}
      <Button href="/checkout/success">Pay now (demo)</Button>
    </div>
  );
}
