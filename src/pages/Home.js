import Destination from "../components/Destination";
import DestinationData from "../components/DestinationData";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero
        cName="Hero"
        heroImg="https://images.unsplash.com/photo-1557223563-8db8e5e7d90b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        title="''How You Do Anything Is How You Do Everything''"
        text="Choose Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <DestinationData />
      <Footer />
    </>
  );
}

export default Home;
