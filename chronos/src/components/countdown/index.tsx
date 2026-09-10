import { useTaskContext } from "../../contexts/taskContext";

import styles from "./styles.module.css";

export function Countdown() {
  const { state } = useTaskContext();

  console.log("Countdown taskContext:", state);

  return (
    <div className={styles.container}>
      <span>{state.formattedSecondsRemaining}</span>
    </div>
  );
}