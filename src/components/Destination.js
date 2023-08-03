import "../components/Destinationstyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Make the Best Tour</p>

      <DestinationData
        heading="Lahore, Punjab"
        text="Lahore is the second largest city in Pakistan 
        after Karachi and 26th largest in the world, with a
         population of over 13 million. It is situated in the
          north-east of the country with River 
        Ravi flowing north-west of the city. It is the 
        capital of the province of Punjab, where it is the largest city."
      />
    </div>
  );
};
export default Destination;
