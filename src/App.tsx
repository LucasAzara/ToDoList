// Imports
import { v4 as uuidv4 } from "uuid";

// Components
import { Header } from "./Components/Header/Header";
import { Input } from "./Components/Input/Input";
import { List } from "./Components/List/List";

// Styles
import "./global.scss";
import style from "./App.module.scss";

// React
import { useState } from "react";
import { DeviceTabletSpeaker } from "phosphor-react";

// TypeScript
export interface IListState {
  id: string;
  isChecked: boolean;
  title: string;
}

function App() {
  const [list, setList] = useState<IListState[]>([]);

  const handleAddList = (title: string) => {
    setList([...list, { id: uuidv4(), isChecked: false, title: title }]);
  };

  const handleDeleteList = (id: string) => {
    const updatedList = list.filter((task) => task.id != id);
    setList(updatedList);
  };

  const handleCheckList = (id: string) => {
    const updatedList = list.map((task) => {
      if (task.id == id)
        return { id: task.id, isChecked: !task.isChecked, title: task.title };
      return task;
    });

    setList(updatedList);
  };

  return (
    <>
      <Header />
      <div className={style.container}>
        <Input addList={handleAddList} />
        <List
          list={list}
          deleteList={handleDeleteList}
          checkList={handleCheckList}
        />
      </div>
    </>
  );
}

export default App;
