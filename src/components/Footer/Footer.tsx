import "../styles/partner.scss";
import apple from "../Assets/apple.png";
import google from "../Assets/google.png";
import qr from "../Assets/qr.png";
import logo from "../Assets/logo.png";

function Footer() {
  const arrayLeft = [
    { text: "О компании" },
    { text: "Документы" },
    { text: "Вакансии" },
    { text: "Контакты" },
  ];

  return (
    <div className="footer">
      <div className="footer-bg" />
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-gorizontal">
            <div className="footer-info">
              <div className="footer-left">
                <div className="footer-logo">
                  <img src={logo} />
                </div>
                {arrayLeft.map((item: any) => (
                  <div className="footer-leftext">{item.text}</div>
                ))}
              </div>
              <div className="footer-mid">
                <div className="footer-midtext">Главная</div>
                <div className="footer-midtext">Преимущества</div>
                <div className="footer-midtext">Как стать поставщиком?</div>
                <div className="footer-midtext">F.A.Q</div>
                <div className="footer-midtext">Обратная связь</div>
              </div>
              <div className="footer-right">
                <div className="footer-phone">
                  <div className="footer-rightext">Телефон</div>
                  <div className="footer-rightsub">+7 (964) 333-33-33</div>
                </div>
                <div className="footer-mail">
                  {" "}
                  <div className="footer-rightext">E-mail</div>
                  <div className="footer-rightsub">info@retaily.online</div>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-google">
                <img src={google} />
              </div>
              <div className="footer-qr">
                <img src={qr} />
              </div>
              <div className="footer-appstore">
                <img src={apple} />
              </div>
              <div className="footer-qr">
                <img src={qr} />
              </div>
            </div>
            <div className="footer-company">
              <div className="footer-firstext">
                c 2022, ООО “Ретейли”, официальный сайт
              </div>
              <div className="footer-footline" />
              <div className="footer-secondtext">Дизайн выполнен в 3Limbs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
