export default function VideoPlayer({ src }: { src?: string }) {
  if (!src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded bg-gray-100 text-sm text-gray-500">
        Video placeholder
      </div>
    );
  }
  return <video src={src} controls className="aspect-video w-full rounded" />;
}
