// CSS
import style from "./Input.module.scss";
// Icons
import { PlusCircle } from "phosphor-react";
// React
import { ChangeEvent, FormEvent, useState } from "react";

interface IInput {
  addList: (title: string) => void;
}

export function Input({ addList }: IInput) {
  const [task, setTask] = useState("");

  const disabled = task == "";

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmitTask = (event: FormEvent) => {
    event.preventDefault();
    addList(task);
    setTask("");
  };

  return (
    <>
      <form className={style.formTask} onSubmit={handleSubmitTask}>
        <input
          className={style.inputTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleTaskChange}
          value={task}
        />
        <button className={style.submitTask} type="submit" disabled={disabled}>
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </>
  );
}
