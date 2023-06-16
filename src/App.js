import "./App.css";
import Content from "./component/Content.js";
import SideFilter from "./component/SideFilter";
import Header from "./component/Header.js";
import BottomSection from "./component/BottomSection";

export default function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header></Header>
        <div className="MiddleContent">
          <div className="SideFilter">
            <SideFilter></SideFilter>
          </div>
          <Content></Content>
        </div>
        <BottomSection></BottomSection>
      </div>
    </div>
  );
}
