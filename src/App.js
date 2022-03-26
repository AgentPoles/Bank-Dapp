import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import User from "./pages/user";
import Brands from "./pages/brands";
import Team from "./pages/team";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/business" element={<Brands />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
