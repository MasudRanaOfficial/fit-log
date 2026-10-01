import Image from "next/image";
import Link from "next/link";
import { PlannedWorkout } from "@/types/workout";

interface PlannedCardProps {
  workout: PlannedWorkout;
  isPlanTab: boolean;
  onRemove: (id: string | number) => void;
  onMarkDone?: (id: string | number) => void;
}

export default function PlannedCard({
  workout,
  isPlanTab,
  onRemove,
  onMarkDone,
}: PlannedCardProps) {
  const {
    id,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
    image,
    isDone,
  } = workout;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-5 p-4 sm:p-5 rounded-xl border transition-all ${
        isDone
          ? "bg-[#14181f]/60 border-green-900/40 opacity-75"
          : "bg-[#161920] border-[#262b36] hover:border-gray-700"
      }`}
    >
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#222731] shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>

        <div>
          <h4
            className={`font-bold uppercase tracking-tight text-base sm:text-lg font-(family-name:--font-oswald) ${
              isDone ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {name}
          </h4>

          <p className="text-xs text-gray-400 mt-0.5">
            <span className="text-gray-500">Equipment:</span> {equipment}
          </p>

          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
            <span>{duration} min</span>
            <span>•</span>
            <span>{caloriesBurned} kcal</span>
            <span>•</span>
            <span className="text-yellow-400 font-semibold">★ {rating}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end pt-3 sm:pt-0 border-t sm:border-t-0 border-[#222732]">
        <Link
          href={`/workout/${id}`}
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#242a36] text-gray-200 hover:text-white hover:bg-[#2d3442] transition-colors"
        >
          View Details
        </Link>

        {isPlanTab && onMarkDone && (
          <button
            onClick={() => onMarkDone(id)}
            className={`p-2 rounded-lg border transition-colors ${
              isDone
                ? "bg-green-600/20 border-green-500 text-green-400"
                : "border-[#2d3442] text-gray-400 hover:text-[#ccff00] hover:border-[#ccff00]"
            }`}
            title={isDone ? "Completed" : "Mark as Done"}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        )}

        <button
          onClick={() => onRemove(id)}
          className="p-2 rounded-lg border border-[#2d3442] text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
          title="Remove"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
