import { Routes, Route, Navigate } from "react-router-dom";

import { Footer, Header } from "./components/layout/index";

import {
  About,
  AppDesign,
  Contact,
  GraphicDesign,
  Home,
  Locations,
  WebDesign,
} from "./pages/index";

const App = () => {
  return (
    <div style={{ background: "#99b4b4" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
