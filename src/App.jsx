import "./App.css";
import Advantage from "./Components/Advantage";
// import AllChart from "./Components/AllChart";
import CustomerTestimonials from "./Components/CustomerTestimonials";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Result from "./Components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section id="hero">
          <HeroSection />
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="result">
                  <Result />
                </section>
                <section id="advantage">
                  <Advantage />
                </section>
                <CustomerTestimonials />
              </>
            }
          />
          {/* <Route path="/chart/:id" element={<AllChart />} /> */}
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
