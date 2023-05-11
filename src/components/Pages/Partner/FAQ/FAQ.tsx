function FAQ() {
  return (
    <div className="pfaq">
      <div className="wrapper">
        <div className="pfaq-title">F.A.Q</div>
        <div className="pfaq-content">
          <div className="pfaq-leftSide">
            <div className="pfaq-line">
              <div className="pfaq-dotup" />
              <div className="pfaq-straight" />
              <div className="pfaq-dotdown" />
            </div>
            <div className="pfaq-upfirst">
              <div className="pfaq-ftext">
                <div className="pfaq-titletext">
                  Взимается ли плата за использование системы Retaily?
                </div>
                <div className="pfaq-text">
                  Использование мобильного приложения и сайта для пользователей
                  (торговых точек, контрагентов и т.д.) бесплатное.
                </div>
              </div>

              <div className="pfaq-downfirst">
                <div className="pfaq-ftext">
                  <div className="pfaq-titletext">
                    Возможно ли установить персональные цены для разных
                    контрагентов?
                  </div>
                  <div className="pfaq-text">
                    Цены для контрагентов в системе устанавливаются и
                    отображаются согласно условиям заключенных договоров с
                    поставщиком.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pfaq-rightSide">
            <div className="pfaq-line">
              <div className="pfaq-dotup" />
              <div className="pfaq-straight" />
              <div className="pfaq-dotdown" />
            </div>
            <div className="pfaq-upsecond">
              <div className="pfaq-ftext">
                <div className="pfaq-titletext">
                  Какое время занимает подключение к системе Retaily и сколько
                  она стоит?
                </div>
                <div className="pfaq-text">
                  Скорость подключения к системе от 14 дней в зависимости от
                  дополнительных настроек. Плата за подключение и дополнительные
                  настройки интерфейса не взимается.
                </div>
              </div>

              <div className="pfaq-downsecond">
                <div className="pfaq-ftext">
                  <div className="pfaq-titletext">
                    Как загружать фото продукции?
                  </div>
                  <div className="pfaq-text">
                    Фотографии продукции можно загрузить как в личном кабинете,
                    так и через обмен данными с 1С предприятия.
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
