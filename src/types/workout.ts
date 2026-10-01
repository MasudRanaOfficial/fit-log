export interface Workout {
  id: string | number;
  name: string;
  category: string[];
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
  image: string;
  description?: string;
  instructions?: string[];
  difficulty?: string;
  sets?: number;
  reps?: string;
  isDone?: boolean;
}

export type SortOption = "Duration" | "Calories" | "Rating";
