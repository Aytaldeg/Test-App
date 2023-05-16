import { FC } from "react";
import "../styles/sidebar.scss";
import { NavLink } from "react-router-dom";

type PropsType = {
  breadCramb?: boolean;
};

const Sidebar: FC<PropsType> = ({ breadCramb }) => {
  return (
    <div className="sidepanel">
      <NavLink to="/about" className="non-active">
        О компании
      </NavLink>
      <NavLink to="/documents" className="non-active">
        Документы
      </NavLink>
      <NavLink to="/jobs" className={breadCramb ? ".active" : "non-active"}>
        Вакансии
      </NavLink>
      <NavLink to="/contacts" className="non-active">
        Контакты
      </NavLink>
    </div>
  );
};

export default Sidebar;
