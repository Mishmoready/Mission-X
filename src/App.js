import "./App.css";
import Content from "./component/Content.js";
import SideFilter from "./component/SideFilter";
import Header from "./component/Header.js";
import BottomSection from "./component/BottomSection";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Content></Content>
        <SideFilter></SideFilter>
        <BottomSection></BottomSection>
      </div>
    </div>
  );
}
