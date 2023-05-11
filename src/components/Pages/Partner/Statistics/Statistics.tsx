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
            <div className="pstatistics-data">
              <div className="pstatistics-orders">
                <div className="pstatistics-text">заказов в месяц</div>
                <div className="pstatistics-numbers">&gt;10 000</div>
              </div>
              <div className="pstatistics-entrepreneurs">
                <div className="pstatistics-text">предпренимателей</div>
                <div className="pstatistics-numbers">&gt;1000</div>
              </div>
              <div className="pincravgcheck">
                <div className="pstatistics-text">увеличим средний чек</div>
                <div className="pstatistics-numbers">от 20%</div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="pstatistics-title">
              Сохраняйте время и деньги для вашего бизнеса
            </div>
            <div className="pstatistics-data">
              <div className="pstatistics-orders">
                <div className="pstatistics-text">заказов в месяц</div>
                <div className="pstatistics-numbers">&gt;10 000</div>
              </div>
              <div className="pstatistics-entrepreneurs">
                <div className="pstatistics-text">предпренимателей</div>
                <div className="pstatistics-numbers">&gt;1000</div>
              </div>
              <div className="pincravgcheck">
                <div className="pstatistics-text">увеличим средний чек</div>
                <div className="pstatistics-numbers">от 20%</div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Statistics;
