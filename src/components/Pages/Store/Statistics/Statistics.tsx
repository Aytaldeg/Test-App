import { Fragment } from "react";
import { isMobile } from "react-device-detect";

function Statistics() {
  return (
    <div className="pstatistics" id="statistics">
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
            <div className="pstatistics-title">
              Сохраняйте время и деньги для вашего бизнеса
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
              <div className="incravgcheck">
                <div className="pstatistics-text1">Полный каталог</div>
                <div className="pstatistics-undertext">
                  продукции поставщика
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Statistics;
