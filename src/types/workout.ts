export interface Workout {
  id: number | string;
  name: string;
  description: string;
  category: string[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | string;
  sets: number;
  reps: string;
  duration: number;
  calories: number;
  rating: number;
  image: string;
  instructions: string[];
}

export interface PlannedWorkout extends Workout {
  isDone?: boolean;
  addedAt?: string;
}

export type WorkoutsResponse = Workout[];

export type SingleWorkoutResponse = Workout;

export type SortOption = "Duration" | "Calories" | "Rating";

export interface MetricsSummary {
  exercises: number;
  minutes: number;
  calories: number;
}
