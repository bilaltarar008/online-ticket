import "./Destinationstyles.css";

function DestinationData(props) {
  return (
    <div className="first-des">
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1Src} />
        <img alt="img" src={props.img2Src} />
      </div>
    </div>
  );
}

export default DestinationData;
