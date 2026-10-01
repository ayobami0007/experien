export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-sm space-y-3">
      <h1 className="text-2xl font-bold">Create account</h1>
      <input className="w-full rounded border p-2 text-sm" placeholder="Full name" />
      <input className="w-full rounded border p-2 text-sm" placeholder="Email" type="email" />
      <input className="w-full rounded border p-2 text-sm" placeholder="Password" type="password" />
      <button className="w-full rounded-md bg-brand py-2 text-sm text-white">Register</button>
    </div>
  );
}
