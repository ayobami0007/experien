import { Progress } from "@/types";

const label: Record<Progress, string> = {
  not_started: "Not Started",
  in_progress: "In Progress",
  completed: "Completed",
};
const color: Record<Progress, string> = {
  not_started: "bg-gray-200 text-gray-700",
  in_progress: "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
};

export default function ProgressBadge({ status }: { status: Progress }) {
  return <span className={`rounded px-2 py-1 text-xs font-medium ${color[status]}`}>{label[status]}</span>;
}
