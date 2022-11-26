import style from "./Header.module.scss";
import logo from "../../asset/todo-logo.svg";

export function Header() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="ToDo" />
      </div>
    </>
  );
}
