function Feedback() {
  return (
    <div className="pfeedback" id="feedback">
      <div className="pfeedback-bg" />
      <div className="wrapper">
        <div className="pfeedback-content">
          <div className="pfeedback-title">
            ПИШИТЕ ПО ВСЕМ <br /> ВОПРОСАМ
          </div>
          <div className="pfeedback-form">
            <div className="pfeedback-input">
              <div className="pfeedback-fio">ФИО</div>
              <div className="pfeedback-mail">E-mail</div>
              <div className="pfeedback-company">Название компании</div>
              <div className="pfeedback-link">Ссылка на сайт компании</div>
            </div>
            <div className="pfeedback-agreement">
              <div className="pfeedback-dot" />
              <div className="pfeedback-text">
                Я согласен на обработку персональных данных
              </div>
            </div>
            <div className="pfeedback-button">ОТПРАВИТЬ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
