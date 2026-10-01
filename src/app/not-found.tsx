import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-[#0f1115]">
      <div className="relative mb-6">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#222732] font-(family-name:--font-oswald) select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#ccff00] font-(family-name:--font-oswald)">
            PAGE NOT FOUND
          </span>
        </div>
      </div>

      <p className="text-gray-400 text-sm sm:text-base max-w-md mb-8">
        The lift or workout routine you are looking for doesn&apos;t exist or
        has been moved to another station.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 bg-[#ccff00] text-black font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-[#b8e600] transition-colors"
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Return to Library</span>
      </Link>
    </div>
  );
}
