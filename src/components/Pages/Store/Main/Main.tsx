import { isMobile } from "react-device-detect";
import play from "../../../Assets/play.png";
import { Fragment } from "react";

function Main() {
  return (
    <div className="pmain" id="main">
      <div className="pmain-bgImage" />
      <div className="pmain-bgColor" />
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            <div className="pmain-ttitle">
              Покупайте напрямую у <br />
              лучших поставщиков <br />
              вашего города
            </div>
            <div className="pmain-tsubtitle">
              Скачайте приложение Retaily на Ваше <br />
              мобильное устройство или оформляйте заказы
              <br /> на Retaily.online!
              <div className="pmain-tplay">
                <img src={play} />
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="pmain-title">
              Покупайте напрямую у лучших
              <br /> поставщиков вашего города
            </div>
            <div className="pmain-subtitle">
              Скачайте приложение Retaily на Ваше мобильное устройство <br />
              или оформляйте заказы на Retaily.online!
              <div className="pmain-play">
                <img src={play} />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Main;
