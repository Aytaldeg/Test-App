import { isMobile } from "react-device-detect";
import Mac2 from "../../../Assets/Mac2.png";
import smartphon from "../../../Assets/smartphon.png";
import { Fragment } from "react";

function Retaily() {
  return (
    <div className="pretaily" id="retaily">
      <div className="pretaily-bg">RETAILY</div>
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            {" "}
            <div className="pretaily-content">
              <div className="pretaily-img">
                <div className="pretaily-mac">
                  <img src={Mac2} />
                </div>

                <div className="pretaily-smartphon">
                  <img src={smartphon} />
                </div>
              </div>
              <div className="pretaily-textp">
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Полный каталог продукции по ценам производителей
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Без ожидания ответа диспетчера
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Push-уведомления (с нами полки всегда заполнены)
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">Сохранение истории заявок</div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Онлайн мониторинг статуса вашей заявки (принят, отгружается
                    и др.)
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">Контроль закупок</div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <div className="pretaily-content">
              <div className="pretaily-textp">
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Полный каталог продукции по ценам производителей
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Без ожидания ответа диспетчера
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Push-уведомления (с нами полки всегда заполнены)
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">Сохранение истории заявок</div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Онлайн мониторинг статуса вашей заявки (принят, отгружается
                    и др.)
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">Контроль закупок</div>
                </div>
              </div>

              <div className="pretaily-img">
                <div className="pretaily-mac">
                  <img src={Mac2} />
                </div>

                <div className="pretaily-smartphon">
                  <img src={smartphon} />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Retaily;
