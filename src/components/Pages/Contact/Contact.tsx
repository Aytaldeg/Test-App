function Contact() {
  return (
    <div className="contacts">
      <div className="contacts-bg" />
      <div className="wrapper">
        <div className="contacts-main">
          <div className="contacts-sidepanel">
            <div>О компании</div>
            <div>Документы</div>
            <div>Вакансии</div>
            <div className="contacts-active">Контакты</div>
          </div>
          <div className="contacts-content">
            <div className="contacts-title">Контакты</div>
            <div className="contacts-contents">
              <div className="contacts-contacts">
                <div className="contacts-place">
                  <div className="contacts-name">Почта</div>
                  <div className="contacts-data">info@retaily.online</div>
                </div>
                <div className="contacts-place">
                  <div className="contacts-name">Адрес</div>
                  <div className="contacts-data">
                    677000, г. Якутск,
                    <br /> ул. Крупской 13, офис 505
                  </div>
                </div>
              </div>
              <div className="contacts-map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64479069d182672f6b4222d0b165b19af5b687cff8ef2008a82dcee32b58f8ad&amp;source=constructor"
                  width="800"
                  height="500"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
