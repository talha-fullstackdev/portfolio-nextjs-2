import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import WorkDetails from "./components/work/WorkDetails";
import Projects from "./components/projects/Projects";
import GetInTouch from "./components/get in touch/GetInTouch";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <div className="dark:bg-white">
     <Header/>
     <Hero/>
     <About/>
     <Services/>
     <WorkDetails/>
     <Projects/>
     <GetInTouch/>
     <Footer/>
    </div>
  );
}
/////////