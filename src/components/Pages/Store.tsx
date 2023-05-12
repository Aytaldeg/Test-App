import "../../App.css";
import "../../components/styles/store.scss";
import Main from "../../components/Pages/Store/Main/Main";
import Strategy from "../../components/Pages/Store/Strategy/Strategy";
import Retaily from "../../components/Pages/Store/Retaily/Retaily";
import Statistics from "../../components/Pages/Store/Statistics/Statistics";
import Provider from "../../components/Pages/Store/Provider/Provider";
import Download from "../../components/Pages/Store/Download/Download";
import FAQ from "../../components/Pages/Store/FAQ/FAQ";
import Feedback from "../../components/Pages/Store/Feedback/Feedback";

function Store() {
  return (
    <div className="Store">
      <Main />
      <Strategy />
      <Retaily />
      <Statistics />
      {/* <Provider />
      <Download />
      <FAQ />
      <Feedback /> */}
    </div>
  );
}

export default Store;
