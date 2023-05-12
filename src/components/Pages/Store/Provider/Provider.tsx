import { Fragment } from "react";
import { isMobile } from "react-device-detect";

function Provider() {
  return (
    <div className="pprovider" id="provider">
      <div className="pprovider-bg"></div>
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            {" "}
            <div className="pprovider-title">Как сделать заказ?</div>
            <div className="ppprovider-maincont">
              <div className="pprovider-contentup">
                <div className="pprovider-content">
                  <div className="pprovider-second">
                    <div className="pprovider-line" />
                    <div className="pprovider-dotsprov">
                      <div className="pprovider-dotprov_active" />
                      <div className="pprovider-dotprov" />
                      <div className="pprovider-dotprov" />
                      <div className="pprovider-dotprov" />
                      <div className="pprovider-dotprov" />
                    </div>
                  </div>

                  <div className="pprovider-first">
                    <div className="pprovider-numbers">
                      <div className="pprovider-number">1</div>
                      <div className="pprovider-text">
                        Зарегистрируйтесь на сайте или <br />
                        установите мобильное <br />
                        приложение
                      </div>
                    </div>
                    <div className="pprovider-num">
                      <div className="pprovider-numbers">
                        <div className="pprovider-numbertwo">2</div>
                        <div className="pprovider-texttwo">
                          Выберите интересующего <br />
                          поставщика и, при <br />
                          необходимости, заключите <br />
                          договор поставки
                        </div>
                      </div>
                      <div className="pprovider-num2">
                        <div className="pprovider-numbers">
                          <div className="pprovider-number">3</div>
                          <div className="pprovider-text">
                            Выберите товарную позицию из <br />
                            каталога и добавьте в корзину <br />
                            необходимое количество
                          </div>
                        </div>
                        <div className="pprovider-num3">
                          <div className="pprovider-numbers">
                            <div className="pprovider-number">4</div>
                            <div className="pprovider-text">
                              Нажмите кнопку Оформить <br /> заявку и ожидайте
                              доставку от <br />
                              Поставщика
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ppprovider-ccontentdown">
                  {" "}
                  <div className="pprovider-second-bbutton">ПОДРОБНЕЕ</div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <div className="pprovider-title">Как сделать заказ?</div>
            <div className="pprovider-maincont"></div>
            <div className="pprovider-content">
              <div className="pprovider-first">
                <div className="pprovider-numbers">
                  <div className="pprovider-number">1</div>
                  <div className="pprovider-text">
                    Зарегистрируйтесь на сайте <br />
                    или установите мобильное <br />
                    приложение
                  </div>
                </div>
                <div className="pprovider-numbers">
                  <div className="pprovider-number">3</div>
                  <div className="pprovider-text">
                    Выберите товарную позицию из каталога и добавьте в корзину
                    необходимое количество
                  </div>
                </div>
              </div>

              <div className="pprovider-second">
                <div className="pprovider-line" />
                <div className="pprovider-dotsprov">
                  <div className="pprovider-dotprov_active" />
                  <div className="pprovider-dotprov" />
                  <div className="pprovider-dotprov" />
                  <div className="pprovider-dotprov" />
                  <div className="pprovider-dotprov" />
                </div>
                <div className="pprovider-second-button">ПОДРОБНЕЕ</div>
              </div>

              <div className="pprovider-third">
                <div className="pprovider-numbers">
                  <div className="pprovider-numbertwo">2</div>
                  <div className="pprovider-texttwo">
                    Выберите интересующего поставщика и, при необходимости,
                    заключите договор поставки
                  </div>
                </div>
                <div className="pprovider-numbers">
                  <div className="pprovider-number">4</div>
                  <div className="pprovider-text">
                    Нажмите кнопку Оформить заявку и ожидайте доставку от
                    Поставщика
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Provider;
