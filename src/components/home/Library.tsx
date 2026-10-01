"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types/workout";
import { getAllWorkouts } from "@/utils/api";
import WorkoutCard from "./WorkoutCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load workouts",
        );
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section id="library" className="w-full py-16 sm:py-20 bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="pb-10 border-b border-[#222732]">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-(family-name:--font-oswald)">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Content Area */}
        <div className="pt-10">
          {loading && <LoadingSpinner />}

          {error && (
            <div className="text-center py-16">
              <p className="text-red-400 font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-[#1b1f28] border border-[#2b313d] text-white rounded-md text-sm hover:border-[#ccff00]"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
