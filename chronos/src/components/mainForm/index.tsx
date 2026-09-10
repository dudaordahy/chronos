import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task"
          id="myInput"
          type="text"
          placeholder="Enter your task"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}