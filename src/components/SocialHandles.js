import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialHandles = () => {
  return (
    <div className="social-handles">
      <div className="social-handle">
        <a href="https://www.instagram.com/buiians/">
          <FontAwesomeIcon
            icon={faInstagram}
            beat
            size="l"
            style={{ color: "#a82929" }}
          />
        </a>
      </div>
      <div className="social-handle">
        <a href="https://www.facebook.com/profile.php?id=61567395542132">
          <FontAwesomeIcon
            icon={faFacebook}
            beat
            size="l"
            style={{ color: "#2953a8" }}
          />
        </a>
      </div>
      <div className="social-handle">
        <a href="https://www.linkedin.com/in/dst-bu-tec-and-innovation-centre-2ab45b294/">
          <FontAwesomeIcon
            icon={faLinkedin}
            beat
            size="l"
            style={{ color: "#0047c2" }}
          />
        </a>
      </div>
      <div className="social-handle">
        <a href="https://twitter.com/bu_jhansi?lang=en">
          <FontAwesomeIcon
            icon={faTwitter}
            beat
            size="l"
            style={{ color: "#2953a8" }}
          />
        </a>
      </div>
      <div className="social-handle">
        <a href="https://www.youtube.com/channel/UCTL-YWI3GojQogY-H4qQng">
          <FontAwesomeIcon
            icon={faYoutube}
            beat
            size="l"
            style={{ color: "#a82929" }}
          />
        </a>
      </div>
    </div>
  );
};
export default SocialHandles;
