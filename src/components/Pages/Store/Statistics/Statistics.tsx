import { Fragment } from "react";
import { isMobile } from "react-device-detect";

function Statistics() {
  return (
    <div className="pstatistics">
      <div className="wrapper">
        {isMobile ? (
          <Fragment>
            <div className="pstatistics-title">
              Сохраняйте время и <br />
              деньги для вашего <br />
              бизнеса
            </div>
            <div className="pstatistics-dataa">
              <div className="pstatistics-orders">
                <div className="pstatistics-text1">Оформляйте заявки</div>
                <div className="pstatistics-undertext">без лишних звонков</div>
              </div>
              <div className="pstatistics-entrepreneurs">
                <div className="pstatistics-text1">Заключайте договора</div>
                <div className="pstatistics-undertext">с поставщиками</div>
              </div>
              <div className="pincravgcheck">
                <div className="pstatistics-text1">Полный каталог</div>
                <div className="pstatistics-undertext">
                  продукции поставщика
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="statistics-title">
              Сохраняйте время и деньги для вашего бизнеса
            </div>
            <div className="statistics-dataa">
              <div className="statistics-orders">
                <div className="statistics-text1">Оформляйте заявки</div>
                <div className="statistics-undertext">без лишних звонков</div>
              </div>
              <div className="statistics-entrepreneurs">
                <div className="statistics-text1">Заключайте договора</div>
                <div className="statistics-undertext">с поставщиками</div>
              </div>
              <div className="incravgcheck">
                <div className="statistics-text1">Полный каталог</div>
                <div className="statistics-undertext">продукции поставщика</div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Statistics;
