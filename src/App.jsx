import Brands from "./components/Brands/Brands";
import Cars from "./components/Cars/Cars";
import Footer from "./components/Footer/Footer";
import GetStared from "./components/GetStarted/GetStared";
import Header from "./components/Header/Header";
import  Hero  from "./components/Hero/Hero";
import Value from "./components/Value/Value";
import Contact from "./components/contact/Contact";




function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Brands/>
      <Cars/>
      <Value/>
      <Contact/>
      <GetStared/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
