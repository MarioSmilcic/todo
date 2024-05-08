import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, task: "Hello World!" },
    { id: 2, task: "Hello World 2!" },
    { id: 3, task: "Hello World 3!" },
  ],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));
