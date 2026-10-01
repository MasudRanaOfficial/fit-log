import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="w-full bg-[#161920]/60 border border-[#262b36] rounded-2xl py-16 px-4 flex flex-col items-center justify-center text-center space-y-4 my-6">
      <div className="w-16 h-16 rounded-full bg-[#202531] flex items-center justify-center text-gray-400 mb-2">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-(family-name:--font-oswald)">
        NOTHING HERE YET
      </h3>

      <p className="text-gray-400 text-sm max-w-sm">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#b8e600] transition-colors"
      >
        <span>Go to workouts</span>
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
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
}
