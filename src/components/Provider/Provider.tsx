import "../styles/main.scss";

function Provider() {
  return (
    <div className="provider">
      <div className="provider-bg"></div>
      <div className="wrapper">
        <div className="provider-title">Как стать поставщиком?</div>
        <div className="provider-content">
          <div className="provider-first">
            <div className="provider-numbers">
              <div className="provider-number">1</div>
              <div className="provider-text">Заключение договора</div>
              <div className="provider-numbers-button">СКАЧАТЬ ОБРАЗЕЦ</div>
            </div>
            <div className="provider-numbers">
              <div className="provider-number">3</div>
              <div className="provider-text">
                Тестирование на фирменной <br />
                торговой сети (при наличии)
              </div>
            </div>
          </div>

          <div className="provider-second">
            <div className="provider-line" />
            <div className="provider-dotsprov">
              <div className="provider-dotprov_active" />
              <div className="provider-dotprov" />
              <div className="provider-dotprov" />
              <div className="provider-dotprov" />
              <div className="provider-dotprov" />
            </div>
            <div className="provider-second-button">ПОДРОБНЕЕ</div>
          </div>

          <div className="provider-third">
            <div className="provider-numbers">
              <div className="provider-numbertwo">2</div>
              <div className="provider-texttwo">
                Передача API и интеграция с <br /> 1С поставщика
              </div>
              <div className="provider-numbers-buttontwo">СПЕЦИФИКАЦИЯ</div>
            </div>
            <div className="provider-numbers">
              <div className="provider-number">4</div>
              <div className="provider-text">
                Пользование и техническое <br /> сопровождение
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Provider;
