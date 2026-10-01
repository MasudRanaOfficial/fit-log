export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="w-12 h-12 border-4 border-[#222732] border-t-[#ccff00] rounded-full animate-spin" />
      <p className="text-gray-400 text-sm font-medium tracking-wide">
        Loading workouts...
      </p>
    </div>
  );
}
