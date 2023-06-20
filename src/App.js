import "./App.css";
import Content from "./component/Content.js";
import SideFilter from "./component/SideFilter";
import Header from "./component/Header.js";
import BottomSection from "./component/BottomSection";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";

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
