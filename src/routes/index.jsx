import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";
import NavBar from "../components/header";
import NotFound from "../page/notFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />}>
          <Route path="/about/us" element={<Home />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
