import "./App.css";
import Content from "./component/Content.js";
import SideFilter from "./component/SideFilter";
import Header from "./component/Header.js";
import BottomSection from "./component/BottomSection";
import Navbar from "./gitPulls/mission-x-frontend-2305-t1/src/common/Navbar";
import Footer from "./gitPulls/mission-x-frontend-2305-t1/src/common/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Header">
        <Header></Header>
        <div className="MiddleContent">
          <div className="SideFilter">
            <SideFilter></SideFilter>
          </div>
          <Content></Content>
        </div>
        <BottomSection></BottomSection>
        <Footer></Footer>
      </div>
    </div>
  );
}
