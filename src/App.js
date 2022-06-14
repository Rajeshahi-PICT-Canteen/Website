import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Viewreport from "./Components/Viewreport";
import Team from "./Components/Team";
import PrintBill from "./Components/PrintBill";
import "./Assets/Styles/Home.css";
import "./Assets/Styles/Team.css";
import "./Assets/Styles/PrintBill.css";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewreport" element={<Viewreport />} />
        <Route path="/team" element={<Team />} />
        <Route path="/printbill" element={<PrintBill />} />
      </Routes>
  );
}