import { Fragment } from "react";
import Mac from "../../../Assets/Mac.png";
import smartphon from "../../../Assets/smartphon.png";
import { isMobile } from "react-device-detect";

function Retaily() {
  return (
    <div className="pretaily">
      <div className="pretaily-bg">RETAILY</div>
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            {" "}
            <div className="pretaily-content">
              <div className="pretaily-img">
                <div className="pretaily-mac">
                  <img src={Mac} />
                </div>

                <div className="pretaily-smartphon">
                  <img src={smartphon} />
                </div>
              </div>
              <div className="pretaily-textp">
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Система приема и обработки заявок на поставку товаров для
                    торговых точек
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Личный кабинет поставщика на портале retaily.online
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Онлайн-заключение договоров поставок с контрагентами
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Кастомизация цены и категории товаров для отдельных
                    контрагентов
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Возможность показать в формате сториз акции, новинки, другую
                    полезную информацию
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Возможность размещения рекламных баннеров на главной
                    странице
                  </div>
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
                    Система приема и обработки заявок на поставку товаров для
                    торговых точек
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Личный кабинет поставщика на портале retaily.online
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Онлайн-заключение договоров поставок с контрагентами
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Кастомизация цены и категории товаров для отдельных
                    контрагентов
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Возможность показать в формате сториз акции, новинки, другую
                    полезную информацию
                  </div>
                </div>
                <div className="pretaily-item">
                  <div className="pretaily-dot" />
                  <div className="pretaily-text">
                    Возможность размещения рекламных баннеров на главной
                    странице
                  </div>
                </div>
              </div>

              <div className="pretaily-img">
                <div className="pretaily-mac">
                  <img src={Mac} />
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
