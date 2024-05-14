import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, task: "Hello Wordl!", isCompleted: true },
    { id: 2, task: "Hello Wordl!", isCompleted: true },
    { id: 3, task: "Hello Wordl!", isCompleted: false },
  ],

  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  // markAsCompleted: (taskId) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) => {
  //       if (task.id === taskId) {
  //         return { ...task, isCompleted: !task.isCompleted };
  //       } else {
  //         return task;
  //       }
  //     }),
  //   })),

  markAsCompleted: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),

  ///FIRST SOLUTION////
  // updateTask: (updatedTask) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) =>
  //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
  //     ),
  //   })),

  ///SECOND SOLUTION////

  // updateTask: (updatedTask) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) =>
  //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
  //     ),
  //   })),

  ///THIRD SOLUTION////

  updateTask: (updateId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updateId ? { ...task, ...updatedTask } : task
      ),
    })),
}));
