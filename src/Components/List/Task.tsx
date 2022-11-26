// CSS
import style from "./Task.module.scss";
// Icons
import { CheckCircle, Circle, Trash } from "phosphor-react";
// Interface
import { IListState } from "../../App";
interface ITask extends IListState {
  deleteList: (id: string) => void;
  checkList: (id: string) => void;
}

export function Task({ id, isChecked, title, deleteList, checkList }: ITask) {
  const deleteTask = () => {
    deleteList(id);
  };

  const checkTask = () => {
    checkList(id);
  };

  return (
    <li className={style.task}>
      {isChecked ? (
        <CheckCircle className={style.check} onClick={checkTask} />
      ) : (
        <Circle className={style.uncheck} onClick={checkTask} />
      )}
      <p>{title}</p>
      <Trash className={style.trash} onClick={deleteTask} />
    </li>
  );
}
