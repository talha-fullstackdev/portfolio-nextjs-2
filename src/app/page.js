import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import WorkDetails from "./work/WorkDetails";
export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Services/>
     <WorkDetails/>
    </>
  );
}
