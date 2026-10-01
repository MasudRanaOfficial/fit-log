"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = useWorkout();

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workout");
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222731] bg-[#0f1115]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold tracking-wider text-xl font-(family-name:--font-oswald) text-white">
            FITLOG
          </span>
        </Link>

        {/* Center: Nav Links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isMyPlanActive
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right: Status Badges (Counters) */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ccff00] text-black font-semibold text-xs tracking-wider transition-opacity hover:opacity-90"
          >
            <span>Plan</span>
            <span className="bg-black/15 px-1.5 py-0.5 rounded-full font-bold text-[11px]">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-600 text-gray-300 font-semibold text-xs tracking-wider transition-colors hover:border-gray-400 hover:text-white"
          >
            <span>Saved</span>
            <span className="bg-white/10 px-1.5 py-0.5 rounded-full font-bold text-[11px] text-white">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
