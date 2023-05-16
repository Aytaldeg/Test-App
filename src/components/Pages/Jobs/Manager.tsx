import link from "../../Assets/link.png";
import ellipse1 from "../../Assets/ellipse1.png";
import ellipse2 from "../../Assets/ellipse2.png";
import Sidebar from "../../Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import { FC } from "react";

const Manager = () => {
  return (
    <div className="manager">
      <div className="manager-bg" />
      <div className="wrapper">
        <Sidebar />
        <div className="manager-main">
          <div className="manager-sales">
            <NavLink to="/jobs" style={{ textDecoration: "none" }}>
              <span className="manager-opacity">Вакансии</span>
            </NavLink>{" "}
            /Менеджер по продажам
          </div>
          <div className="manager-money">от 135 000 - 150 000 руб./месяц</div>
          <div className="manager-respons">
            Обязанности:
            <br /> - Сопровождение и мониторинг сетевой составляющей работы
            серверов;
            <br /> - работа с системами автоматизации конфигураций;
            <br />
            -настройка систем виртуализации;
            <br />- ввод в строй и техническое сопровождение серверного
            оборудования;
            <br />- настройка и обслуживание сервисов под управлением ОС Linux;{" "}
            <br />- документирование решений своих задач.
            <br />
            <br />
            Требования:
            <br />
            -Знание Docker, систем виртуализации, Linux;
            <br />- опыт работы с СУБД (MySQL/Postgres);
            <br />- понимание модели OSI.
            <br /> <br />
            Желательно:
            <br />- плюсом будет умение настройки DNS-серверов, VPN: Strongswan,
            wireguard, системы виртуализации: QEMU, язык программирования:
            Python;
            <br />- умение читать, понимать, создавать техническую документацию.
            <br />
            <br />
            Условия работы:
            <br />
            - стабильную заработную плату, соблюдение ТК РФ, ДМС со
            стоматологией;
            <br />
            - современные MacBook Pro и другое необходимое для работы
            оборудование;
            <br />
            - гибридный график работы с возможностью частичной удаленной
            занятости;
            <br />
            - неограниченные возможности профессионального и карьерного роста,
            регулярное внешнее и внутреннее обучение от наших партнеров;
            <br />- частичноили полностью оплачиваемые дополнительные обучающие
            курсы, в том числе занятия английским языком;
            <br />- бесплатное посещение всех мастер-классов в центре
            IT-развития “Смарт”;
            <br />- возможность стать частью международной команды
            профессионалов и просто хороших людей, которые все вместе создают
            одну из самых крутых историй успеха в мировой IT-индустрии.
          </div>
          <div className="manager-do">
            <div className="manager-title">ЧТОБЫ НАЧАТЬ ЗАРАБАТЫВАТЬ</div>
            <div className="manager-subtext">
              Введите фамилию, имя и номер телефона
            </div>
            <div className="manager-form">
              <div className="manager-datas">
                <div className="manager-data">Имя</div>
                <div className="manager-data">Фамилия</div>
                <div className="manager-data">Номер телефона</div>
              </div>
              <div className="manager-file">
                <img src={link} />
                Прикрепить файл
              </div>
            </div>
            <div className="manager-agreement">
              <img className="manager-ellipse1" src={ellipse1} />
              <img className="manager-ellipse2" src={ellipse2} />
              <span className="manager-opacity">
                Нажимая «отправить», вы даёте{" "}
              </span>
              <span className="manager-blue">
                согласие на обработку персональных данных{" "}
              </span>
            </div>
            <div className="manager-button">ОТПРАВИТЬ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
