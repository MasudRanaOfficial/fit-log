interface InstructionsProps {
  instructions: string[];
}

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <div className="w-full my-6">
      <h3 className="text-lg font-bold tracking-wider uppercase text-white font-(family-name:--font-oswald) mb-4">
        INSTRUCTIONS
      </h3>
      <div className="space-y-3">
        {instructions?.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3.5 bg-[#161920] border border-[#262b36] p-4 rounded-lg"
          >
            <span className="shrink-0 w-6 h-6 rounded-full bg-[#ccff00] text-black font-extrabold text-xs flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
