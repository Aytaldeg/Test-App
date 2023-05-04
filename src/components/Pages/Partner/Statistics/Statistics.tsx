import "../../../styles/partner.scss";

function Statistics() {
  return (
    <div className="statistics">
      <div className="wrapper">
        <div className="statistics-title">
          Сохраняйте время и деньги для вашего бизнеса
        </div>
        <div className="statistics-data">
          <div className="statistics-orders">
            <div className="statistics-text">заказов в месяц</div>
            <div className="statistics-numbers">&gt;10 000</div>
          </div>
          <div className="statistics-entrepreneurs">
            <div className="statistics-text">предпренимателей</div>
            <div className="statistics-numbers">&gt;1000</div>
          </div>
          <div className="incravgcheck">
            <div className="statistics-text">увеличим средний чек</div>
            <div className="statistics-numbers">от 20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
