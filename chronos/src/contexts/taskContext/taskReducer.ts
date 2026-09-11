case TaskActionTypes.COMPLETE_TASK: {
  return {
    ...state,

    activeTask: null,

    secondsRemaining: 0,

    formattedSecondsRemaining: "00:00",

    tasks: state.tasks.map((task) => {
      if (
        state.activeTask &&
        state.activeTask.id === task.id
      ) {
        return {
          ...task,
          completeDate: Date.now(),
        };
      }

      return task;
    }),
  };
}

case TaskActionTypes.COUNT_DOWN: {
  return {
    ...state,

    secondsRemaining:
      action.payload.secondsRemaining,

    formattedSecondsRemaining:
      formatSecondsToMinutes(
        action.payload.secondsRemaining,
      ),
  };
}