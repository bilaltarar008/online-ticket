import "./Herostyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimg0" src={props.heroImg} />
      </div>

      <div className="Hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;
