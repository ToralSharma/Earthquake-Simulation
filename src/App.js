import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Predict from "./Components/Predict";
import Pred2 from "./Components/Pred2";

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Work />
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="predict" element={<Predict />} />
            <Route path="pred2" element={<Pred2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;