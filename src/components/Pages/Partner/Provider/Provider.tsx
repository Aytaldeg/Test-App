import { Fragment } from "react";
import { isMobile } from "react-device-detect";

function Provider() {
  return (
    <div className="pprovider" id="provider">
      <div className="pprovider-bg"></div>
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            <div className="pprovider-title">Как стать поставщиком?</div>
            <div className="pprovider-maincont">
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
                      <div className="pprovider-text">Заключение договора</div>
                      <div className="pprovider-numbers-button">
                        СКАЧАТЬ ОБРАЗЕЦ
                      </div>
                    </div>

                    <div className="pprovider-num">
                      <div className="pprovider-numbers">
                        <div className="pprovider-numbertwo">2</div>
                        <div className="pprovider-texttwo">
                          {" "}
                          Передача API и интеграция с <br /> 1С поставщика
                        </div>
                        <div className="pprovider-numbers-buttontwo">
                          СПЕЦИФИКАЦИЯ
                        </div>
                      </div>

                      <div className="pprovider-num2">
                        <div className="pprovider-numbers">
                          <div className="pprovider-number">3</div>
                          <div className="pprovider-text">
                            Тестирование на фирменной <br />
                            торговой сети (при наличии)
                          </div>
                        </div>
                        <div className="pprovider-num3">
                          <div className="pprovider-numbers">
                            <div className="pprovider-number">4</div>
                            <div className="pprovider-text">
                              Пользование и техническое <br /> сопровождение
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pprovider-contentdown">
                {" "}
                <div className="pprovider-second-button">ПОДРОБНЕЕ</div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="pprovider-title">Как стать поставщиком?</div>
            <div className="pprovider-content">
              <div className="pprovider-first">
                <div className="pprovider-numbers">
                  <div className="pprovider-number">1</div>
                  <div className="pprovider-text">Заключение договора</div>
                  <div className="pprovider-numbers-button">
                    СКАЧАТЬ ОБРАЗЕЦ
                  </div>
                </div>
                <div className="pprovider-numbers">
                  <div className="pprovider-number">3</div>
                  <div className="pprovider-text">
                    Тестирование на фирменной <br />
                    торговой сети (при наличии)
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
                    Передача API и интеграция с <br /> 1С поставщика
                  </div>
                  <div className="pprovider-numbers-buttontwo">
                    СПЕЦИФИКАЦИЯ
                  </div>
                </div>
                <div className="pprovider-numbers">
                  <div className="pprovider-number">4</div>
                  <div className="pprovider-text">
                    Пользование и техническое <br /> сопровождение
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
