import mac3 from "../../../Assets/Mac3.png";
import iphone from "../../../Assets/iphone.png";
import apple2 from "../../../Assets/apple2.png";
import google2 from "../../../Assets/google2.png";
import qr2 from "../../../Assets/qr2.png";

function Download() {
  return (
    <div className="download">
      <div className="download-bg" />
      <div className="wrapper">
        <div className="download-content">
          <div className="download-try">
            <div className="download-title">
              <div className="download-text">
                Скачайте приложение или <br /> оформляйте заказы на сайте <br />
                Retaily.online!
              </div>
              <div className="download-button">ПОПРОБОВАТЬ</div>
            </div>
            <div className="download-pict">
              <div className="download-Mac3">
                <img src={mac3} />
              </div>
              <div className="download-iphone">
                <img src={iphone} />
              </div>
            </div>
          </div>
          <div className="download-links">
            {" "}
            <div className="download-google">
              <img src={google2} />
            </div>
            <div className="download-qr">
              <img src={qr2} />
            </div>
            <div className="download-appstore">
              <img src={apple2} />
            </div>
            <div className="download-qr">
              <img src={qr2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
