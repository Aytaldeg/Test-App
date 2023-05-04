function FAQ() {
  return (
    <div className="faq">
      <div className="wrapper">
        <div className="faq-title">F.A.Q</div>
        <div className="faq-content">
          <div className="faq-leftSidee">
            <div className="faq-line">
              <div className="faq-dotup" />
              <div className="faq-straight" />
              <div className="faq-dotdown" />
            </div>
            <div className="faq-upfirst">
              <div className="faq-ftext">
                <div className="faq-titletext">Как работает Retaily?</div>
                <div className="faq-text">
                  Сервис Retaily автоматизирует вашу систему заявок Поставщикам
                  товаров – теперь ваши заявки автоматически доходят до
                  Поставщика. Установите приложение «RETАILY» из Аpp Store или
                  PlayMarket на Ваше устройство и следуйте инструкциям.
                </div>
              </div>

              <div className="faq-downfirst">
                <div className="faq-ftext">
                  <div className="faq-titletext">
                    Видны ли остатки на складах у поставщика?
                  </div>
                  <div className="faq-text">Да</div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-rightSidee">
            <div className="faq-line">
              <div className="faq-dotup" />
              <div className="faq-straight" />
              <div className="faq-dotdown" />
            </div>
            <div className="faq-upsecond">
              <div className="faq-ftext">
                <div className="faq-titletext">
                  Как быстро обрабатываются заявки?
                </div>
                <div className="faq-text">
                  Сформированные в системе заявки автоматически передаются
                  поставщику по каналам связи в их учетную программу (1С). Далее
                  поставщик отрабатывает заявку согласно своим стандартам и
                  правилам.
                </div>
              </div>

              <div className="faq-downsecond">
                <div className="faq-ftext">
                  <div className="faq-titletext">
                    Могу ли я заключить договор поставки с поставщиком?
                  </div>
                  <div className="faq-text">
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
