import team from "../../Assets/team.png";
import zakharov from "../../Assets/zakharov.png";
import gorokhov from "../../Assets/gorokhov.png";
import starostin from "../../Assets/starostin.png";
import bolshakov from "../../Assets/bolshakov.png";
import sedalishev from "../../Assets/sedalishev.png";
import popov from "../../Assets/popov.png";

function AboutCompany() {
  return (
    <div className="about">
      <div className="about-bg"></div>
      <div className="wrapper">
        <div className="about-main">
          <div className="about-sidepanel">
            <div className="about-active">О компании</div>
            <div>Документы</div>
            <div>Вакансии</div>
            <div>Контакты</div>
          </div>
          <div className="about-content">
            <div className="about-title">О компании</div>
            <div className="about-photo">
              <img src={team} />
            </div>
            <div className="about-info">
              <div className="about-infotitle">
                КОМПАНИЯ «РЕТЕЙЛИ» стартовала на рынке IT услуг в начале 2021
                года.
              </div>
              <div className="about-text">
                За короткий период мы стали официальными партнерами крупнейших
                товаропроизводителей Республики Саха (Якутия) (Россия) - АО
                «Якутский хлебокомбинат», ООО «Якутский Гормолзавод», АО ФАПК
                «Якутия» и др.
              </div>
              <div className="about-text">
                За неполный год работы мы смогли поднять продажи наших
                партнеров, систематизировали работу торговых агентов,
                оптимизировали работу диспетчеров{" "}
                <span className="about-blue">(снижение нагрузки до 40%)</span>,
                создали{" "}
                <span className="about-blue">
                  уникальные инструменты продвижения
                </span>{" "}
                новинок на рынки сбыта, позволили сэкономить ФОТ, создали новую
                полноценную экосистему для товаропроизводителей и оптовиков по
                продвижению продуктов питания на рынки сбыта. Уже сегодня, на
                нашу систему приходится{" "}
                <span className="about-blue">более 50% продаж</span> наших
                партнеров.
              </div>
            </div>
            <div className="about-team">
              Команда
              <div className="about-persons">
                <div className="-about-person">
                  <div className="about-pphoto">
                    <img src={zakharov} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">ЗАХАРОВ</div>
                      <div className="about-second">Афанасий Иванович</div>
                    </div>
                    <div className="about-job">
                      Основатель / генеральный директор
                    </div>
                  </div>
                </div>
                <div className="about-person">
                  <div className="about-pphoto">
                    <img src={gorokhov} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">ГОРОХОВ</div>
                      <div className="about-second">Илья Гаврильевич</div>
                    </div>
                    <div className="about-job">Финансовый директор</div>
                  </div>
                </div>
                <div className="about-person">
                  <div className="about-pphoto">
                    <img src={starostin} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">СТАРОСТИН</div>
                      <div className="about-second">Петр Николаевич</div>
                    </div>
                    <div className="about-job">Технический директор</div>
                  </div>
                </div>
                <div className="about-person">
                  <div className="about-pphoto">
                    <img src={bolshakov} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">БОЛЬШАКОВ</div>
                      <div className="about-second">Егор Егорович</div>
                    </div>
                    <div className="about-job">
                      Главный архитектор программного обеспечения
                    </div>
                  </div>
                </div>
                <div className="about-person">
                  <div className="about-pphoto">
                    <img src={sedalishev} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">СЕДАЛИЩЕВ</div>
                      <div className="about-second">Айаал Романович</div>
                    </div>
                    <div className="about-job">
                      Директор по работе с ключевыми клиентами
                    </div>
                  </div>
                </div>
                <div className="about-person">
                  <div className="about-pphoto">
                    <img src={popov} />
                  </div>
                  <div className="about-aperson">
                    <div className="about-name">
                      <div className="about-first">ПОПОВ</div>
                      <div className="about-second">Николай Сергеевич</div>
                    </div>
                    <div className="about-job">
                      Директор по управлению данными
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-ooo">
              ООО «Ретейли», ИНН 1435357777/ КПП 143501001/ ОГРН 1211400000657
              от 28.01.2021 г.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
