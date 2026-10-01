import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222731] bg-[#0b0d10] py-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand Logo + Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="font-extrabold tracking-wider text-lg font-(family-name:--font-oswald) text-white">
            FITLOG
          </span>
        </Link>

        {/* Right: Copyright Line */}
        <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
