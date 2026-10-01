import { Workout } from "@/types/workout";

interface WorkoutSpecsProps {
  workout: Workout;
}

export default function WorkoutSpecs({ workout }: WorkoutSpecsProps) {
  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="w-full bg-[#161920] border border-[#262b36] rounded-xl overflow-hidden my-6">
      <div className="divide-y divide-[#222732]">
        {specs.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 text-xs sm:text-sm"
          >
            <span className="text-gray-400 font-semibold tracking-wider uppercase">
              {item.label}
            </span>
            <span className="text-white font-medium text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
