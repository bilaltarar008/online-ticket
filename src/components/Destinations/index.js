import "./Destinationstyles.css";
import Destination from "./Destination";
import { DestinationsData } from "./DestinationsData";

const Destinations = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Make the Best Tour</p>
      {DestinationsData.map((element) => (
        <Destination
          heading={element.heading}
          text={element.text}
          img1Src={element.img1Src}
          img2Src={element.img2Src}
        />
      ))}
    </div>
  );
};
export default Destinations;
