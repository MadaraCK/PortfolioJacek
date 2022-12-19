import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="container-all">
      <div className="container">
        <nav>
          <Navigation />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Category />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
