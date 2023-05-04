import "../styles/main.scss";

function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback-bg" />
      <div className="wrapper">
        <div className="feedback-content">
          <div className="feedback-title">ПИШИТЕ <br /> ПО ВСЕМ <br /> ВОПРОСАМ</div>
          <div className="feedback-form">
            <div className="feedback-input">
              <div className="feedback-fio">ФИО</div>
              <div className="feedback-mail">E-mail</div>
              <div className="feedback-company">Название компании</div>
              <div className="feedback-link">Ссылка на сайт компании</div>
            </div>
            <div className="feedback-agreement">
              <div className="feedback-dot" />
              <div className="feedback-text">
                Я согласен на обработку персональных данных
              </div>
            </div>
            <div className="feedback-button">ОТПРАВИТЬ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
