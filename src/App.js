import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Films from "./Films/Films";
function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Category />
        <Routes>
          <Route path="/films" element={<Films />} exact></Route>
          <Route path="/contact" element={<Contact />} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
