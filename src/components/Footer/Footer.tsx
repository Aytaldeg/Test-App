import "../styles/partner.scss";
import apple from "../Assets/apple.png";
import google from "../Assets/google.png";
import qr from "../Assets/qr.png";
import logo from "../Assets/logo.png";
import { isMobile } from "react-device-detect";
import { Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
        {isMobile ? (
          <Fragment>
            <div className="footer-content">
              <div className="footer-gorizontal">
                <div className="footer-info">
                  <div className="footer-left">
                    <Link
                      className="footer-logo"
                      to="header"
                      smooth={true}
                      duration={500}
                    >
                      <img src={logo} />
                    </Link>
                    {arrayLeft.map((item: any) => (
                      <div className="footer-leftext">{item.text}</div>
                    ))}
                  </div>
                  <div className="footer-mid">
                    <Link
                      className="footer-midtext"
                      to={"main"}
                      smooth={true}
                      duration={1000}
                      offset={190}
                    >
                      Главная
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"retaily"}
                      smooth={true}
                      duration={1000}
                      offset={80}
                    >
                      Преимущества
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"provider"}
                      smooth={true}
                      duration={1000}
                      offset={40}
                    >
                      Как стать поставщиком?
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"faq"}
                      smooth={true}
                      duration={1000}
                      offset={-200}
                    >
                      F.A.Q
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"feedback"}
                      smooth={true}
                      duration={500}
                      offset={100}
                    >
                      Обратная связь
                    </Link>
                  </div>
                </div>
                <div className="footer-tlinks">
                  <div className="footer-oc">
                    {" "}
                    <div className="footer-google">
                      <img src={google} />
                    </div>
                    <div className="footer-qr">
                      <img src={qr} />
                    </div>
                  </div>
                  <div className="footer-oc">
                    <div className="footer-appstore">
                      <img src={apple} />
                    </div>
                    <div className="footer-pqr">
                      <img src={qr} />
                    </div>
                  </div>
                </div>
                <div className="footer-tcompany">
                  <div className="footer-firstext">
                    c 2022, ООО “Ретейли”, официальный сайт
                  </div>
                  <div className="footer-tsecondtext">
                    <div className="footer-tfirst">Дизайн выполнен в</div>
                    <div className="footer-tsecond">3Limbs</div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="footer-content">
              <div className="footer-gorizontal">
                <div className="footer-info">
                  <div className="footer-left">
                    <Link
                      className="footer-logo"
                      smooth={true}
                      to="header"
                      duration={500}
                    >
                      <img src={logo} />
                    </Link>
                    {arrayLeft.map((item: any) => (
                      <div className="footer-leftext">{item.text}</div>
                    ))}
                  </div>
                  <div className="footer-mid">
                    <Link
                      className="footer-midtext"
                      to={"main"}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      Главная
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"retaily"}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      Преимущества
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"provider"}
                      smooth={true}
                      duration={500}
                      offset={-60}
                    >
                      Как стать поставщиком?
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"faq"}
                      smooth={true}
                      duration={500}
                      offset={-120}
                    >
                      F.A.Q
                    </Link>
                    <Link
                      className="footer-midtext"
                      to={"feedback"}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      Обратная связь
                    </Link>
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
                  <div className="footer-secondtext">
                    Дизайн выполнен в 3Limbs
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Footer;
