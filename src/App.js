import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import SecurityRecognitions from "./components/SecurityRecognitions";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <SecurityRecognitions />
       <Certificates />
      <Contact />
      <Footer />   
    </>
  );
}

export default App;
