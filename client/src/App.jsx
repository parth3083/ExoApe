import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Footer/>
    </div>
  );
}

export default App;
