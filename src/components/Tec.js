import react from "react";
import "./Tec.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import all_tec_image from "../images/TEC-1.jpg";

const Tec = () => {
  return (
    <>
      <NavBar />
      <div className="Tec-top-image">
        <img src={all_tec_image} alt="Tec-top-image"></img>
      </div>
      <h2 id="Tec-partners-heading">DST-TEC Network</h2>

      <div className="Tec-container">
        <div className="tec-grid-container">
          <div className="tec-grid-cell">
            <img
              src="https://kiittec.in/wp-content/uploads/2021/12/KIIT-TEC-Logo.png"
            ></img>
            <a href="https://kiittec.in/">
              {" "}
              KIIT TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
              src="https://www.bits-pilani.ac.in/wp-content/uploads/Amrita-vishwa-vidyapeetham-color-logo.png"
            ></img>
            <a href="https://amritatec.in/">
              Amrita TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
              src="https://kiittec.in/wp-content/uploads/2022/01/amity-university-vector-logo.png"
            ></img>
            <a href="https://amity.edu/ditt/dsttec/">
              Amity-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img 
            style={{width:"10rem", height:"10rem"}}
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Anna_University_Logo.png"></img>
            <a href="http://ctdt.annauniv.edu/dst_tec_1/index.html">
              Anna University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Punjab_University_tec.jpg"></img>
            <a href="https://tecpu.in/">
              Punjab University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img src="https://www.bits-pilani.ac.in/wp-content/uploads/NITTE_tec.png"></img>
            <a href="https://nitte.edu.in/technologies.php">
              NITTE-DU-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/sppu_tec.jpg"></img>
            <a href="http://www.unipune.ac.in/">
              Savitribai Phule Pune University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img src="https://www.bits-pilani.ac.in/wp-content/uploads/chitkara-tec.png"></img>
            <a href="https://newgeniedc.chitkara.edu.in/">
              Chitkara University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/University_of_Hyderabad_tec.png"></img>
            <a href="https://uohyd.ac.in/">
              University of Hyderabad-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img 
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Tezpur_University_tec.png"></img>
            <a href="https://www.tezu.ernet.in/tectu/">
              Tezpur University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img src="https://www.bits-pilani.ac.in/wp-content/uploads/NITTE_tec.png"></img>
            <a href="https://dstnutec.in/">
              NITTE University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
              src="https://www.bits-pilani.ac.in/wp-content/uploads/logo.png"
            ></img>
            <a href="https://www.bits-pilani.ac.in/tec/">
              BITS Pilani-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img src="https://www.gbpuat.ac.in/img/Logo1.png"></img>
            <a href="https://www.gbpuat.ac.in/">
              G.B Pant University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img 
            style={{width:"12rem", height:"12rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/GITAM.jpg"></img>
            <a href="https://www.gitam.edu/">
              GITAM-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
              src="https://www.bits-pilani.ac.in/wp-content/uploads/Medicaps-University-TEC.png"
            ></img>
            <a href="https://www.medicaps.ac.in/">
              Medicaps University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img 
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Pandit_Deendayal_Energy_University_logo.png"></img>
            <a href="https://www.pdpu.ac.in/">
              Pandit Deendayal Energy University -TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img src="https://www.bits-pilani.ac.in/wp-content/uploads/CPUH_logo.png"></img>
            <a href="http://cpuh.in/">
              Career Point University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Dr._Hari_Singh_Gour_University_Logo.png"></img>
            <a href="https://www.dhsgsu.edu.in/index.php/en/">
              Dr Harisingh Gour University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img 
            style={{width:"10rem", height:"10rem"}}
            
            src="https://www.bits-pilani.ac.in/wp-content/uploads/Guru-Ghasidas-Central-University-Chhattisgarh.png"></img>
            <a href="https://www.ggu.ac.in/">
              Guru Ghasidas Central University
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
              -TEC
            </a>
          </div>
          <div 
          
          className="tec-grid-cell">
            <img 
            style={{width:"10rem", height:"10rem"}}

            src="https://www.bits-pilani.ac.in/wp-content/uploads/Rajiv_Gandhi_University_Logo.jpg"></img>
            <a href="https://rgu.ac.in/">
              Rajiv Gandhi University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
              src="https://www.bits-pilani.ac.in/wp-content/uploads/University-of-Ladakh.png"
            ></img>
            <a href="https://uol.ac.in/">
              University of Ladakh-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
          <div className="tec-grid-cell">
            <img
            style={{width:"10rem", height:"10rem"}}
            
            src="	https://www.bits-pilani.ac.in/wp-content/uploads/Mizoram_University_logo.jpg"></img>
            <a href="https://mzu.edu.in/">
              Mizoram University-TEC
              <FontAwesomeIcon
                style={{ marginLeft: "1rem" }}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tec;
