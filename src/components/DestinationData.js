import "../components/Destinationstyles.css";

function DestinationData(props) {
  return (
    <div className="first-des">
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img
          alt="img"
          src="https://w0.peakpx.com/wallpaper/181/242/HD-wallpaper-minar-e-pakistan-garden-lahore-landscape-nature-pak-pakistani-park-punjab.jpg"
        />
        <img
          alt="img"
          src="https://w0.peakpx.com/wallpaper/476/316/HD-wallpaper-the-fort-lahore-fort-lahore-shahi-qilla-pakistan-punjab-place-evening-beautiful-nature.jpg"
        />
      </div>
    </div>
  );
}

export default DestinationData;
