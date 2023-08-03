import "./Footerstyles.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <div>
          <h1> Travel </h1>
          <p>Choose your Favourite Destination </p>
        </div>

        <div>
          <a href="/">
            <i class="fa-brands fa-square-facebook fa-fade"></i>
          </a>

          <a href="/">
            <i class="fa-brands fa-square-instagram fa-fade"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changes</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
