import "../styles/main.scss";
import Vector from "../Assets/Vector.png";


function Header() {
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
          <div className="header-slider">
            <div className="header-slider-button_active">Поставщик</div>
            <div className="header-slider-button">Торговая точка</div>
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
