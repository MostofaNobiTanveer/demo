import React from "react";
import { Contact, Experience, Footer, Hero, Nav, Projects } from "./components";

const App = () => {
  return (
    <main>
      {/* <div className="noise"></div> */}
      <div className="relative container mx-auto py-20 px-10">
        <Nav />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* <div className="bg-[#181818] text-white">
        <div className="container mx-auto py-20 px-10">
          <Contact />
          <Footer />
        </div>
      </div> */}
    </main>
  );
};

export default App;
