import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
