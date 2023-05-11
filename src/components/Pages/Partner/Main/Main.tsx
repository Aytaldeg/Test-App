import { Fragment } from "react";
import play from "../../../Assets/play.png";
import { isMobile } from "react-device-detect";

function Main() {
  return (
    <div className="pmain" id="main">
      <div className="pmain-bgImage" />
      <div className="pmain-bgColor" />
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            {" "}
            <div className="pmain-ttitle">
              Сокращайте свои <br /> операционные расходы
              <br /> и увеличивайте прибыль
              <br />
              вместе с Retaily
            </div>
            <div className="pmain-tsubtitle">
              Автоматизируем прием заказов от торговых точек
            </div>
            <div className="pmain-tplay">
              <img src={play} />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <div className="pmain-title">
              Сокращайте свои операционные расходы и увеличивайте прибыль вместе
              с Retaily
            </div>
            <div className="pmain-subtitle">
              Автоматизируем прием заказов от торговых точек
            </div>
            <div className="pmain-play">
              <img src={play} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Main;
