"use client";

import Image from "next/image";

export default function HeroBanner() {
  const handleScrollToLibrary = () => {
    const librarySection = document.getElementById("library");
    if (librarySection) {
      librarySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full border-b border-[#222731] bg-[#0f1115] overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col items-start space-y-5">
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#ccff00] uppercase">
              WORKOUT LIBRARY
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-font-(family-name:--font-oswald) leading-[1.1]">
              TRAIN WITH INTENT. <br />
              LOG EVERY SET.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleScrollToLibrary}
              className="mt-2 inline-flex items-center gap-3 bg-[#ccff00] text-black font-bold text-sm sm:text-base px-6 py-3.5 rounded-md hover:bg-[#b8e600] transition-colors tracking-wide"
            >
              <span>BROWSE WORKOUTS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          {/* Right: Banner Image */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none h-85 sm:h-105 lg:h-120">
              <Image
                src="/banner.png"
                alt="Fitness Training Illustration"
                fill
                priority
                className="object-contain drop-shadow-[0_10px_35px_rgba(204,255,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
