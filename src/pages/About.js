import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Hero
        cName="Hero-mid"
        heroImg="https://www.economy.pk/wp-content/uploads/2022/07/Top-10-cities-of-Pakistan-based-on-Population.jpg"
        title="About"
        btnClass="hide "
      />
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
}
export default About;
