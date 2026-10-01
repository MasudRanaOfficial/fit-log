"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Workout, PlannedWorkout } from "@/types/workout";

interface WorkoutContextType {
  planList: PlannedWorkout[];
  savedList: Workout[];
  addToPlan: (workout: Workout) => boolean;
  addToSaved: (workout: Workout) => boolean;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
  markAsDone: (id: string | number) => void;
  planCount: number;
  savedCount: number;
  isPlanFull: boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [planList, setPlanList] = useState<PlannedWorkout[]>([]);
  const [savedList, setSavedList] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog_plan");
      const storedSaved = localStorage.getItem("fitlog_saved");
      if (storedPlan) setPlanList(JSON.parse(storedPlan));
      if (storedSaved) setSavedList(JSON.parse(storedSaved));
    } catch {
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_plan", JSON.stringify(planList));
    }
  }, [planList, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_saved", JSON.stringify(savedList));
    }
  }, [savedList, isLoaded]);

  const addToPlan = (workout: Workout): boolean => {
    if (planList.length >= 5) {
      return false;
    }
    const exists = planList.some(
      (item) => String(item.id) === String(workout.id),
    );
    if (exists) {
      return false;
    }
    setPlanList((prev) => [...prev, { ...workout, isDone: false }]);
    return true;
  };

  const addToSaved = (workout: Workout): boolean => {
    const exists = savedList.some(
      (item) => String(item.id) === String(workout.id),
    );
    if (exists) {
      return false;
    }
    setSavedList((prev) => [...prev, workout]);
    return true;
  };

  const removeFromPlan = (id: string | number) => {
    setPlanList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  const removeFromSaved = (id: string | number) => {
    setSavedList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  const markAsDone = (id: string | number) => {
    setPlanList((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, isDone: !item.isDone }
          : item,
      ),
    );
  };

  const planCount = planList.length;
  const savedCount = savedList.length;
  const isPlanFull = planCount >= 5;

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        planCount,
        savedCount,
        isPlanFull,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
}
