import { Module } from "@/types";

export default function Curriculum({ modules }: { modules: Module[] }) {
  return (
    <ol className="space-y-2">
      {modules.map((m) => (
        <li key={m.id} className="rounded border p-3 text-sm">{m.title}</li>
      ))}
    </ol>
  );
}
