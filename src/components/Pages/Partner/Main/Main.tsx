import play from "../../../Assets/play.png";

function Main() {
  return (
    <div className="main">
      <div className="main-bgImage"></div>
      <div className="main-bgColor"></div>
      <div className="wrapper">
        <div className="main-title">
          Сокращайте свои операционные расходы и увеличивайте прибыль вместе с
          Retaily
        </div>
        <div className="main-subtitle">
          Автоматизируем прием заказов от торговых точек
        </div>
        <div className="main-play">
          <img src={play} />
        </div>
      </div>
    </div>
  );
}

export default Main;
