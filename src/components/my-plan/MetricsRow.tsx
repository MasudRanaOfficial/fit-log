interface MetricsRowProps {
  exercises: number;
  minutes: number;
  calories: number;
}

export default function MetricsRow({
  exercises,
  minutes,
  calories,
}: MetricsRowProps) {
  const safeExercises = Number.isFinite(exercises) ? exercises : 0;
  const safeMinutes = Number.isFinite(minutes) ? minutes : 0;
  const safeCalories = Number.isFinite(calories) ? calories : 0;

  const metrics = [
    { label: "EXERCISES", value: safeExercises, unit: "lifts" },
    { label: "MINUTES", value: safeMinutes, unit: "min" },
    { label: "CALORIES", value: safeCalories, unit: "kcal" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#161920] border border-[#262b36] rounded-xl p-5 flex flex-col justify-between"
        >
          <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
            {item.label}
          </span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-oswald)">
              {String(item.value)}
            </span>
            <span className="text-xs font-medium text-gray-500">
              {item.unit}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
