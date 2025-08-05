import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import overlayImg from "./assets/bg.jpg";
import Mission from "./Components/Mission";
import Programs from "./Components/Programs";
import CoreValues from "./Components/CoreValues";
import WwDn from "./Components/WwDn";
import YoungPeople from "./Components/YoungPeople";
import Change from "./Components/Change";
import OurVision from "./Components/OurVision";
import Volunteer from "./Components/Volunteer";
import Rating from "./Components/Rating";
import BeenChanging from "./Components/BeenChanging";
import Gallery from "./Components/Gallery";
import Team from "./Components/Team";
import Partners from "./Components/Patners"; // Make sure the file is really named "Patners.jsx"
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${overlayImg})` }}
    >
      <div className="bg-black/70 min-h-screen">
        <Navbar />
        <main>
          <Hero />

          {/* Section: Mission, Programs, WWDN, Core Values */}
          <div className="bg-[#fefaf3] pt-32 pb-32 relative z-0">
            <div className="max-w-7xl mx-auto px-4 -mt-40">
              <Mission />
              <Programs />
              <WwDn />
              <CoreValues />
            </div>
          </div>

          <YoungPeople />
          <Change />
          <OurVision />
          <Volunteer />
          <Rating />
          <BeenChanging />

          {/* Section: Gallery, Team, Partners */}
          <div className="bg-[#fefaf3] pt-32 pb-32 relative z-0">
            <div className="max-w-7xl mx-auto px-4 -mt-40">
              <Gallery />
              <Team />
              <Partners />
            </div>
          </div>

          <GetInTouch />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
