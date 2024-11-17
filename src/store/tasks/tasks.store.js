import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, task: "Hello World!", isCompleted: true },
    { id: 2, task: "Hello World!", isCompleted: true },
    { id: 3, task: "Hello World!", isCompleted: false },
  ],

  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  markAsCompleted: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),

  updateTask: (updateId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updateId ? { ...task, ...updatedTask } : task
      ),
    })),
}));
