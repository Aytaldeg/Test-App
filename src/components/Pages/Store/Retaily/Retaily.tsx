import Mac2 from "../../../Assets/Mac2.png";
import smartphon from "../../../Assets/smartphon.png";

function Retaily() {
  return (
    <div className="retaily">
      <div className="retaily-bg">RETAILY</div>
      <div className="wrapper">
        <div className="retaily-content">
          <div className="retaily-textp">
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Полный каталог продукции по ценам производителей
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">Без ожидания ответа диспетчера</div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Push-уведомления (с нами полки всегда заполнены)
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">Сохранение истории заявок</div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Онлайн мониторинг статуса вашей заявки (принят, отгружается и
                др.)
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">Контроль закупок</div>
            </div>
          </div>

          <div className="retaily-img">
            <div className="retaily-mac">
              <img src={Mac2} />
            </div>

            <div className="retaily-smartphon">
              <img src={smartphon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retaily;
