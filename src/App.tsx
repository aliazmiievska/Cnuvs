import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-[100svh]">
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
