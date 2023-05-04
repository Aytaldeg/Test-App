import play from "../../../Assets/play.png";

function Main() {
  return (
    <div className="main">
      <div className="main-bgImage"></div>
      <div className="main-bgColor"></div>
      <div className="wrapper">
        <div className="main-title">
          Покупайте напрямую у лучших
          <br /> поставщиков вашего города
        </div>
        <div className="main-subtitle">
          Скачайте приложение Retaily на Ваше мобильное устройство <br />
          или оформляйте заказы на Retaily.online!
          <div className="main-play">
            <img src={play} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
