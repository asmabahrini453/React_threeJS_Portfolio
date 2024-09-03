import { BrowserRouter } from "react-router-dom";

import {  Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, About} from "./components";
//in here we are going to initialize all the components we have made
//i wrapped them in BrowserRouter comp to ensure routing
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;