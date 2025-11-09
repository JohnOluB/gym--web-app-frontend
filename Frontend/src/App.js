import "./App.css";
import Hero from "./Components/Hero/hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/programs";
import Reasons from "./Components/Reasons/Reasons";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/Loginpopup/LoginPopup";
import Header from "./Components/Header/Header";

function App() {
  const [showLogin, setShowLogin] = useSate(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Header setShowLogin={setShowLogin} />
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </>
  );
}

export default App;
