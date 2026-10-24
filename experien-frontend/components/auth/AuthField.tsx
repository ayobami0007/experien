type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  hint?: string;
};

export default function AuthField({ label, name, type = "text", placeholder, autoComplete, error, hint }: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none"
      />
      {error ? (
        <p className="mt-1 text-[11px] text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-[11px] text-muted">{hint}</p>
      ) : null}
    </div>
  );
}
