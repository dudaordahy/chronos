import React, { createContext, useContext } from "react";

import type { TaskStateModel } from "../../models/taskStateModel";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,

  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const initialContextValue: TaskContextProps = {
  state: initialState,
  setState: () => {},
};

export const TaskContext =
  createContext<TaskContextProps>(initialContextValue);

type TaskProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({
  children,
}: TaskProviderProps) {
  const [state, setState] = React.useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTaskContext must be used within a TaskContextProvider",
    );
  }

  return context;
}