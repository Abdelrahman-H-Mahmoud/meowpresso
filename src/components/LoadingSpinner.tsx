export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700" />
        <div className="absolute inset-0 rounded-full border-4 border-brown-500 dark:border-accent-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-gray-500 dark:text-gray-400 animate-pulse">
        Brewing your content...
      </p>
    </div>
  );
} 