import Button from "@/components/ui/Button";

export default function CheckoutSuccessPage() {
  return (
    <div className="space-y-4 py-10 text-center">
      <h1 className="text-2xl font-bold text-green-700">Payment successful</h1>
      <p className="text-gray-600">You are now enrolled. Start learning from your dashboard.</p>
      <Button href="/dashboard">Go to dashboard</Button>
    </div>
  );
}
