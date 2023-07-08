import { Routes, Route, Navigate } from "react-router-dom";

import { Footer, Header } from "./components/layout/index";

import { About, Contact, Home, Locations, DesignPage } from "./pages/index";

const App = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="flex-1 content max-w-1440 md:px-10 lg:px-41">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app-design" element={<DesignPage type="app" />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/graphic-design"
            element={<DesignPage type="graphic" />}
          />
          <Route path="/locations" element={<Locations />} />
          <Route path="/web-design" element={<DesignPage type="web" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
