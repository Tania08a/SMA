import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutAME from "../pages/AboutAME";
import KnowUs from "../pages/KnowUs";
import News from "../pages/News";
import Care from "../pages/Care";
import Activities from "../pages/Activities";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-ame" element={<AboutAME />} />
          <Route path="/conocenos" element={<KnowUs />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/care" element={<Care />} />
          <Route path="/activities" element={<Activities />} />

        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
