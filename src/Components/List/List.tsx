// CSS
import style from "./List.module.scss";
// IMG
import ClipBoard from "../../asset/Clipboard.svg";
// Component
import { Task } from "./Task";
// Interface
import { IListState } from "../../App";
interface IList {
  list: IListState[];
  deleteList: (id: string) => void;
  checkList: (id: string) => void;
}

export function List({ list, deleteList, checkList }: IList) {
  // Total Task Length
  const totalTask = list.length;
  // Completed Task Length
  const completedTask = list.filter((task) => task.isChecked == true).length;
  // Create string for completed tasks header
  const completed =
    totalTask == 0 ? totalTask : `${completedTask} de ${totalTask}`;

  return (
    <>
      <div className={style.listHeader}>
        <p className={style.created}>
          Tarefas Criadas <span>{totalTask}</span>
        </p>
        <p className={style.completed}>
          Concluídas <span>{completed}</span>
        </p>
      </div>
      <ul className={style.list}>
        {list.length == 0 ? (
          <EmptyList />
        ) : (
          list.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isChecked={task.isChecked}
                deleteList={deleteList}
                checkList={checkList}
              />
            );
          })
        )}
      </ul>
    </>
  );
}

function EmptyList() {
  return (
    <div className={style.emptyContainer}>
      <img src={ClipBoard} alt="clipboard" />
      <div className={style.emptyMessage}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
