import { useRef } from "react";

import {
  PlayCircleIcon,
  StopCircleIcon,
} from "lucide-react";

import { useTaskContext } from "../../contexts/taskContext/useTaskContext";

import type { TaskModel } from "../../models/taskModel";

import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInput =
    useRef<HTMLInputElement>(null);

  const nextCycle =
    getNextCycle(state.currentCycle);

  const nextCycleType =
    getNextCycleType(nextCycle);

  function handleCreateNewTask(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName =
      taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining =
      newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining:
          formatSecondsToMinutes(
            secondsRemaining,
          ),
        tasks: [
          ...prevState.tasks,
          newTask,
        ],
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,

        activeTask: null,

        secondsRemaining: 0,

        formattedSecondsRemaining: "00:00",

        tasks: prevState.tasks.map((task) => {
          if (
            prevState.activeTask &&
            prevState.activeTask.id === task.id
          ) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }

          return task;
        }),
      };
    });
  }

  return (
    <form
      className="form"
      action=""
      onSubmit={handleCreateNewTask}
    >
      <div className="formRow">
        <DefaultInput
          labelText="Task"
          id="myInput"
          type="text"
          placeholder="Enter your task"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        )}

        {state.activeTask && (
          <DefaultButton
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="botao_interromper"
          />
        )}
      </div>
    </form>
  );
}