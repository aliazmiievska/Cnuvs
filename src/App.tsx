import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col justify-between font-myfont min-h-[100svh]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
