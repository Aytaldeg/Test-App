function FAQ() {
  return (
    <div className="pfaq" id="faq">
      <div className="wrapper">
        <div className="pfaq-title">F.A.Q</div>
        <div className="pfaq-content">
          <div className="pfaq-leftSidee">
            <div className="pfaq-line">
              <div className="pfaq-dotup" />
              <div className="pfaq-straight" />
              <div className="pfaq-dotdown" />
            </div>
            <div className="pfaq-upfirste">
              <div className="pfaq-ftext">
                <div className="pfaq-titletext">Как работает Retaily?</div>
                <div className="pfaq-text">
                  Сервис Retaily автоматизирует вашу систему заявок Поставщикам
                  товаров – теперь ваши заявки автоматически доходят до
                  Поставщика. Установите приложение «RETАILY» из Аpp Store или
                  PlayMarket на Ваше устройство и следуйте инструкциям.
                </div>
              </div>

              <div className="pfaq-downfirst">
                <div className="pfaq-ftext">
                  <div className="pfaq-titletext">
                    Видны ли остатки на складах у поставщика?
                  </div>
                  <div className="pfaq-text">Да</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pfaq-rightSidee">
            <div className="pfaq-line">
              <div className="pfaq-dotup" />
              <div className="pfaq-straight" />
              <div className="pfaq-dotdown" />
            </div>
            <div className="pfaq-upsecond">
              <div className="pfaq-ftext">
                <div className="pfaq-titletext">
                  Как быстро обрабатываются заявки?
                </div>
                <div className="pfaq-text">
                  Сформированные в системе заявки автоматически передаются
                  поставщику по каналам связи в их учетную программу (1С). Далее
                  поставщик отрабатывает заявку согласно своим стандартам и
                  правилам.
                </div>
              </div>

              <div className="pfaq-downsecond">
                <div className="pfaq-ftext">
                  <div className="pfaq-titletext">
                    Могу ли я заключить договор поставки с поставщиком?
                  </div>
                  <div className="pfaq-text">
                    Да, в мобильном приложении реализован функционал подписания
                    договора поставки. Если договор уже есть – при регистрации
                    данные будут автоматически получены от поставщика.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
