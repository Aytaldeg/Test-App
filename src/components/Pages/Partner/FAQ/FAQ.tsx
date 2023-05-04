import "../../../styles/partner.scss";

function FAQ() {
  return (
    <div className="faq">
      <div className="wrapper">
        <div className="faq-title">F.A.Q</div>
        <div className="faq-content">
          <div className="faq-leftSide">
            <div className="faq-line">
              <div className="faq-dotup" />
              <div className="faq-straight" />
              <div className="faq-dotdown" />
            </div>
            <div className="faq-upfirst">
              <div className="faq-ftext">
                <div className="faq-titletext">
                  Взимается ли плата за 
                  использование системы Retaily?
                </div>
                <div className="faq-text">
                  Использование мобильного приложения и 
                  сайта для пользователей (торговых точек,
                   контрагентов и т.д.) бесплатное.
                </div>
              </div>

              <div className="faq-downfirst">
                <div className="faq-ftext">
                  <div className="faq-titletext">
                    Возможно ли установить
                     персональные цены для разных 
                    контрагентов?
                  </div>
                  <div className="faq-text">
                    Цены для контрагентов в системе устанавливаются
                     и отображаются согласно условиям заключенных 
                    договоров с поставщиком.
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div className="faq-rightSide">
              <div className="faq-line">
                <div className="faq-dotup" />
                <div className="faq-straight" />
                <div className="faq-dotdown" />
              </div>
              <div className="faq-upsecond">
                <div className="faq-ftext">
                  <div className="faq-titletext">
                    Какое время занимает подключение к системе Retaily и сколько
                    она стоит?
                  </div>
                  <div className="faq-text">
                    Скорость подключения к системе от 14 дней в зависимости от
                    дополнительных настроек. Плата за подключение и
                    дополнительные настройки интерфейса не взимается.
                  </div>
                </div>

                <div className="faq-downsecond">
                  <div className="faq-ftext">
                    <div className="faq-titletext">
                      Как загружать фото продукции?
                    </div>
                    <div className="faq-text">
                      Фотографии продукции можно загрузить как в личном
                      кабинете, так и через обмен данными с 1С предприятия.
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
