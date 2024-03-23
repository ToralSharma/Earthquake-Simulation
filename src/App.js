import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Predict from "./Components/Predict";

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
                  
                  {/* <Testimonials />
                  <Contact /> */}
                  <Footer />
                </>
              }
            />
            <Route path="predict" element={<Predict />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
