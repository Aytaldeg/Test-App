import "../../App.css";
import "../../components/styles/partner.scss";
import Main from "../../components/Pages/Partner/Main/Main";
import Strategy from "../../components/Pages/Partner/Strategy/Strategy";
import Retaily from "../../components/Pages/Partner/Retaily/Retaily";
import Statistics from "../../components/Pages/Partner/Statistics/Statistics";
import Provider from "../../components/Pages/Partner/Provider/Provider";
import FAQ from "../../components/Pages/Partner/FAQ/FAQ";
import Feedback from "../../components/Pages/Partner/Feedback/Feedback";

function Partner() {
  return (
    <div className="Partner">
      <Main />
      <Strategy />
      <Retaily />
      <Statistics />
      <Provider />
      {/* <FAQ />
      <Feedback /> */}
    </div>
  );
}

export default Partner;
