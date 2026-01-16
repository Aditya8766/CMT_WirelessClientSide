import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import IphoneRepairPage from "./pages/iphoneRepair/IphoneRepair";
import ContactUs from "./pages/contactUS/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone-repair" element={<IphoneRepairPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
