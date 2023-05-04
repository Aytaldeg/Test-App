import "../../../styles/partner.scss";
import Mac from "../../../Assets/Mac.png";
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
                Система приема и обработки заявок на поставку товаров для
                торговых точек
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Личный кабинет поставщика на портале retaily.online
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Онлайн-заключение договоров поставок с контрагентами
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Кастомизация цены и категории товаров для отдельных контрагентов
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Возможность показать в формате сториз акции, новинки, другую
                полезную информацию
              </div>
            </div>
            <div className="retaily-item">
              <div className="retaily-dot" />
              <div className="retaily-text">
                Возможность размещения рекламных баннеров на главной странице
              </div>
            </div>
          </div>

          <div className="retaily-img">
            <div className="retaily-mac">
              <img src={Mac} />
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
