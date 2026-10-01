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

export interface SingleWorkoutResponse {
  data?: Workout;
  status?: string | number;
  message?: string;
}

export interface AllWorkoutsResponse {
  data?: Workout[];
  status?: string | number;
  message?: string;
}

export type SortOption = "Duration" | "Calories" | "Rating";

export interface MetricsSummary {
  exercises: number;
  minutes: number;
  calories: number;
}