// import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Moments from "./components/Moments/Moments";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Moments />
      <Footer />
    </div>
  );
}

export default App;
