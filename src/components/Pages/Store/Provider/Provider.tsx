function Provider() {
  return (
    <div className="provider">
      <div className="provider-bg"></div>
      <div className="wrapper">
        <div className="provider-title">Как сделать заказ?</div>
        <div className="provider-content">
          <div className="provider-first">
            <div className="provider-numbers">
              <div className="provider-number">1</div>
              <div className="provider-text">
                Зарегистрируйтесь на сайте <br />
                или установите мобильное <br />
                приложение
              </div>
            </div>
            <div className="provider-numbers">
              <div className="provider-number">3</div>
              <div className="provider-text">
                Выберите товарную позицию из каталога и добавьте в корзину
                необходимое количество
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
                Выберите интересующего поставщика и, при необходимости,
                заключите договор поставки
              </div>
            </div>
            <div className="provider-numbers">
              <div className="provider-number">4</div>
              <div className="provider-text">
                Нажмите кнопку Оформить заявку и ожидайте доставку от Поставщика
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Provider;
