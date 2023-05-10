import "../styles/main.scss";
import Vector from "../Assets/Vector.png";
import { Link, NavLink } from "react-router-dom";

type PropsType = {
  isSwitched: boolean;
  toggled: () => void;
};

function Header(props: PropsType) {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-items">
          <div className="header-logo">
            <NavLink to="/">
              <div className="header-logo_logo">
                <img src={Vector} />
              </div>
            </NavLink>
            <NavLink to="/" className="header-logo-text">
              <div className="header-logo-text">retaily</div>
            </NavLink>
          </div>

          <div
            className="header-slider"
            onClick={() => {
              props.toggled();
            }}
          >
            <div
              className={
                props.isSwitched
                  ? "header-slider-button_active"
                  : "header-slider-button"
              }
            >
              Поставщик
            </div>
            <div
              className={
                props.isSwitched
                  ? "header-slider-button"
                  : "header-slider-button_active"
              }
            >
              Торговая точка
            </div>
          </div>

          <NavLink to="/" className="header-item_active">
            Стать партнером
          </NavLink>
          <NavLink to="/about" className="header-item">
            О нас
          </NavLink>
          <NavLink to="/jobs" className="header-item">
            Ваканции
          </NavLink>
          <NavLink to="/contacts" className="header-item">
            Контакты
          </NavLink>
          {/* <NavLink to="/" className="header-log">
            Войти
          </NavLink> */}
          <div className="header-log"> Войти</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
