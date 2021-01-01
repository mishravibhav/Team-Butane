import React from "react";
import Hero from "./Hero";
import Justlaunch from "./Justlaunch";
import Services from "./Services";
import Curated from "./Curated"
import Stories from "./Stories";
import Footer from '../Footer/footer'
class Home extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <Hero />
        <Justlaunch />
        <Services />
        <Stories />
        <Curated/>
        <Footer/>
      </div>
    );
  }
}
export default Home;
