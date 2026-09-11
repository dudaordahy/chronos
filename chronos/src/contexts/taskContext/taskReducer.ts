import type { TaskStateModel } from "../../models/taskStateModel";

import {
  TaskActionTypes,
  type TaskActionModel,
} from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      // Implementação futura
      return state;
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      // Implementação futura
      return state;
    }

    case TaskActionTypes.RESET_STATE: {
      // Implementação futura
      return state;
    }
  }

  return state;
}