"use client";

import { useState, useMemo } from "react";
import toast from "react-hot-toast";
import { useWorkout } from "@/context/WorkoutContext";
import { SortOption } from "@/types/workout";
import MetricsRow from "@/components/my-plan/MetricsRow";
import PlannedCard from "@/components/my-plan/PlannedCard";
import EmptyState from "@/components/my-plan/EmptyState";
import SortDropdown from "@/components/ui/SortDropdown";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [currentSort, setCurrentSort] = useState<SortOption>("Duration");

  const { planList, savedList, removeFromPlan, removeFromSaved, markAsDone } =
    useWorkout();

  // Metrics live calculation for Today's Plan
  const metrics = planList.reduce(
    (acc, curr) => ({
      exercises: acc.exercises + 1,
      minutes: acc.minutes + (Number(curr.duration) || 0),
      calories: acc.calories + (Number(curr.caloriesBurned) || 0),
    }),
    { exercises: 0, minutes: 0, calories: 0 },
  );

  const handleRemoveFromPlan = (id: string | number) => {
    removeFromPlan(id);
    toast.success("Removed from plan");
  };

  const handleRemoveFromSaved = (id: string | number) => {
    removeFromSaved(id);
    toast.success("Removed from saved list");
  };

  const handleMarkAsDone = (id: string | number) => {
    markAsDone(id);
    const item = planList.find((p) => String(p.id) === String(id));
    if (item?.isDone) {
      toast("Workout marked as uncompleted");
    } else {
      toast.success("Marked as done! Keep crushing it.");
    }
  };

  // Sort list based on current active tab & sort option
  const sortedList = useMemo(() => {
    const list = [...(activeTab === "plan" ? planList : savedList)];

    if (currentSort === "Duration") {
      return list.sort(
        (a, b) => (Number(a.duration) || 0) - (Number(b.duration) || 0),
      );
    }
    if (currentSort === "Calories") {
      return list.sort(
        (a, b) =>
          (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0),
      );
    }
    if (currentSort === "Rating") {
      return list.sort(
        (a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0),
      );
    }
    return list;
  }, [activeTab, planList, savedList, currentSort]);

  return (
    <div className="w-full py-10 md:py-16 bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white font-(family-name:--font-oswald)">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary Row */}
        <MetricsRow
          exercises={metrics.exercises}
          minutes={metrics.minutes}
          calories={metrics.calories}
        />

        {/* Tabs & Sort Dropdown Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222732] mb-8 pb-3 sm:pb-0">
          {/* Tabs */}
          <div className="flex">
            <button
              onClick={() => setActiveTab("plan")}
              className={`pb-3.5 px-6 font-semibold text-sm tracking-wider uppercase transition-all relative ${
                activeTab === "plan"
                  ? "text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan ({planList.length})
              {activeTab === "plan" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ccff00]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-3.5 px-6 font-semibold text-sm tracking-wider uppercase transition-all relative ${
                activeTab === "saved"
                  ? "text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved ({savedList.length})
              {activeTab === "saved" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ccff00]" />
              )}
            </button>
          </div>

          {/* Sort Dropdown (Visible when list has items) */}
          {sortedList.length > 0 && (
            <div className="sm:pb-3">
              <SortDropdown
                currentSort={currentSort}
                onSortChange={setCurrentSort}
              />
            </div>
          )}
        </div>

        {/* Content List / Empty State */}
        {sortedList.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {sortedList.map((item) => (
              <PlannedCard
                key={item.id}
                workout={item}
                isPlanTab={activeTab === "plan"}
                onRemove={
                  activeTab === "plan"
                    ? handleRemoveFromPlan
                    : handleRemoveFromSaved
                }
                onMarkDone={activeTab === "plan" ? handleMarkAsDone : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
