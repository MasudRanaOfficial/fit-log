# FitLog — Workout Library & Gym Companion
A dark, no-nonsense gym companion to pick lifts, build daily training plans, and track personal fitness progress.[cite: 1]

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project
FitLog is a modern web application designed for gym-goers and fitness enthusiasts who want a streamlined, dark-mode workout interface.[cite: 1] It serves as an interactive workout library where users can explore exercises targeting every major muscle group, inspect biomechanical details and instructions, and build a focused training routine capped at five daily lifts.[cite: 1]

---

## Project Overview
FitLog solves the problem of clunky, over-complicated fitness trackers by providing a fast, distraction-free environment:
- **Focused Routine:** Restricts daily exercise routines to a maximum of 5 lifts to prevent overtraining and maintain high-intent sessions.[cite: 1]
- **Dynamic Metrics:** Automatically computes live totals for completed exercises, training duration (minutes), and calories burned as items are manipulated.[cite: 1]
- **Data Persistence:** Uses local storage to ensure users' active workout sessions and saved exercises remain intact across page reloads.[cite: 1]

---

## Key Features
- **Comprehensive Workout Library:** Displays lifts across major muscle groups with responsive grid cards showcasing target categories, equipment, duration, calories burned, and user ratings.[cite: 1]
- **Detailed Lift Specifications:** Provides two-column workout overviews with ordered execution steps and key specs tables (Difficulty, Sets, Reps, Duration, Calories, Equipment).[cite: 1]
- **Active Plan Management:** Add exercises directly to "Today's Plan" (max 5) or bookmark them under "Saved" for future sessions.[cite: 1]
- **Interactive Exercise Logging:** Mark exercises as completed ("Mark as Done") or remove them with real-time toast feedback and dynamic stat recalculation.[cite: 1]
- **Multi-Attribute Sorting:** Re-sort workouts seamlessly by duration, calories burned, or rating with chevron-supported dropdown filters.[cite: 1]

---

## Tech Stack
**Frontend:** Next.js (App Router) · React · TypeScript · Tailwind CSS · DaisyUI[cite: 1]  
**State & Storage:** React Context API · LocalStorage[cite: 1]  
**Feedback & Notification:** React Hot Toast[cite: 1]  
**Fonts & Icons:** Google Fonts (Oswald & Inter)[cite: 1]

---

## Dependencies
Major dependencies used in this project:

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-hot-toast": "^2.x",
  "daisyui": "^4.x",
  "tailwindcss": "^3.x",
  "typescript": "^5.x"
}