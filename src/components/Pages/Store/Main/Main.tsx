import { isMobile } from "react-device-detect";
import play from "../../../Assets/play.png";
import { Fragment } from "react";

function Main() {
  return (
    <div className="smain" id="main">
      <div className="smain-bgImage" />
      <div className="smain-bgColor" />
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            <div className="smain-ttitle">
              Покупайте напрямую у <br />
              лучших поставщиков <br />
              вашего города
            </div>
            <div className="smain-tsubtitle">
              Скачайте приложение Retaily на Ваше <br />
              мобильное устройство или оформляйте заказы
              <br /> на Retaily.online!
              <div className="smain-tplay">
                <img src={play} />
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="smain-title">
              Покупайте напрямую у лучших
              <br /> поставщиков вашего города
            </div>
            <div className="smain-subtitle">
              Скачайте приложение Retaily на Ваше мобильное устройство <br />
              или оформляйте заказы на Retaily.online!
              <div className="smain-play">
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
