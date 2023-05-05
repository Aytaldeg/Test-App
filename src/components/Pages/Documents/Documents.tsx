import arrow from "../../Assets/arrow.png";

function Documents() {
  return (
    <div className="documents">
      <div className="documents-bg" />
      <div className="wrapper">
        <div className="documents-main">
          <div className="documents-sidepanel">
            <div>О компании</div>
            <div className="documents-active">Документы</div>
            <div>Вакансии</div>
            <div>Контакты</div>
          </div>
          <div className="documents-content">
            <div className="documents-title">Документы</div>
            <div className="documents-info">
              <div className="documents-sections">
                <div className="documents-text">Правила работы</div>
                <div className="documents-button">
                  <img src={arrow} />
                </div>
              </div>
              <div className="documents-sections">
                <div className="documents-text">Официальное уведомление</div>
                <div className="documents-button">
                  <img src={arrow} />
                </div>
              </div>
              <div className="documents-sections">
                <div className="documents-text">
                  Политика в отношении обработки персональных данных
                </div>
                <div className="documents-button">
                  <img src={arrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
