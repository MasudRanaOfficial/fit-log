import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const {
    id,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    image,
  } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="group flex flex-col justify-between bg-[#161920] border border-[#262b36] hover:border-[#ccff00]/60 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    >
      <div>
        <div className="relative w-full h-52 bg-[#1b1f28] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#242a36] text-gray-300"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold uppercase tracking-tight text-white font-(family-name:--font-oswald) group-hover:text-[#ccff00] transition-colors line-clamp-1">
            {name}
          </h3>

          <p className="text-xs text-gray-400 mt-1 line-clamp-1">
            <span className="text-gray-500">Equipment:</span> {equipment}
          </p>
        </div>
      </div>

      <div className="px-5 py-3.5 border-t border-[#222732] bg-[#13151b] flex items-center justify-between text-xs text-gray-400 font-medium">
        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#ccff00]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
          <span>{caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400 fill-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-gray-200 font-semibold">{rating}</span>
        </div>
      </div>
    </Link>
  );
}
