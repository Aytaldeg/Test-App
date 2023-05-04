import "../styles/main.scss";
import Vector from "../Assets/Vector.png";

type PropsType = {
  isSwitched: boolean
  toggled: () => void;
}

function Header(props: PropsType) {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-items">
          <div className="header-logo">
            <div className="header-logo_logo">
              <img src={Vector} />
            </div>
            <div className="header-logo-text">retaily</div>
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
          <div className="header-item_active">Стать партнером</div>
          <div className="header-item">О нас</div>
          <div className="header-item">Ваканции</div>
          <div className="header-item">Контакты</div>
          <div className="header-log">Войти</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
