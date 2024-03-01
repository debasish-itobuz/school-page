import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Menu />
      <div className="aboutSection">
        <div className="overlay"></div>
        <p> About</p>
      </div>


    <section className="about">
    <div className="aboutDetails">
        <div className="aboutTop">
          AGRASAIN BOY'S SCHOOL , <span className="yellowText"> LILUAH</span>
        </div>
        <div className="hrLine"></div>
        <div className="aboutBottom">
          The Agrasain Boys' School is the brain child of Sri Basudeo Tikmany,
          who in 1987, visualised, motivated Agarwal Community, successfully
          planned and executed and steered the prestigious Agrasain Balika
          Siksha Sadan, a modern multipurpose girls' Higher Secondary School
          affiliated to Council for the Indian School Certificate Examinations,
          New Delhi, to its grand success since its inception as a founder
          chairman.The school is committed to nurturing little boys and see them
          blossom into individuals full of love, nobility and compassion.
          'Agrasain Boys' School' will be dedicated towards imparting holistic
          education in a congenial environment at affordable cost.
        </div>
      </div>
    </section>

    <Footer />
      
    </>
  );
};

export default About;
