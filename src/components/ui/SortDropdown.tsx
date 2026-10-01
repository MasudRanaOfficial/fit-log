"use client";

import { SortOption } from "@/types/workout";

interface SortDropdownProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortDropdown({
  currentSort,
  onSortChange,
}: SortDropdownProps) {
  const options: SortOption[] = ["Duration", "Calories", "Rating"];

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs sm:text-sm text-gray-400 font-medium">
        Sort By:
      </span>
      <div className="relative">
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="appearance-none bg-[#161920] border border-[#262b36] text-white text-xs sm:text-sm rounded-lg px-3.5 py-2 pr-9 focus:outline-none focus:border-[#ccff00] cursor-pointer tracking-wide"
        >
          {options.map((option) => (
            <option key={option} value={option} className="bg-[#161920]">
              {option}
            </option>
          ))}
        </select>
        {/* Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
