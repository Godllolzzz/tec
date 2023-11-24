import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import "./Patents2.css";
import NavBar from "./NavBar";
import Footer from "./footer";

const Patents2 = () => {
  return (
    <>
      <NavBar />
      <div className="outer-patents2-container">
        <h1 className="patents2-main-heading">Our Patents</h1>
        <div className="patents2-container">
          <div className="patents2-image">
            <img src={img1} alt="patents-image"></img>
          </div>
          <div className="patents2-content">
            <div className="patents2-title">Smart Helmet</div>
            <div className="patents2-developed-by">
              <div>DEVELOPED BY-</div>
              <div>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Co-Coordinator DST-TEC</div>
                <div>Dr. Rohit Peardon Principal Investigator</div>
              </div>
            </div>
            <p className="patents2-inner-content">
              The present invention provides a safety system for a wearable
              helmet that keeps a regular check on a rider in 5-minute intervals
              ensuring that whether the rider is wearing the helmet or not. The
              system has an advantage over existing techniques by generating a
              continuous warning sound attached to the regular horn of the bike
              instead of directly turning off the ignition. Existing
              technologies are directly turning the ignition off in case of
              taking off the helmet while driving which may result in a fatal
              accident on busy roads. Whereas the system turns off the ignition
              after 5 minutes of giving the alarming sound and takes a picture
              of a rider at the moment the rider takes off the helmet and sends
              the alarming message to the owner. The impact sensor is placed on
              the helmet.
            </p>
          </div>
        </div>
        <div className="patents2-container">
          <div className="patents2-image">
            <img src={img2} alt="patents-image"></img>
          </div>
          <div className="patents2-content">
            <div className="patents2-title">
              A Predictive In-Silico Tool for Online Self Health Risk Assessment
              and Their Management
            </div>
            <div className="patents2-developed-by">
              <div>DEVELOPED BY-</div>
              <div>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Principal Investigator</div>
                <div>Dr. Anupam Vyas Co-Principal Investigator</div>
              </div>
            </div>
            <p className="patents2-inner-content">
              A system to predict the health risks by monitoring various factors
              related to occupational, environmental, and regional specific
              hazards and to further provide the user ways to manage or mitigate
              the predicted health risks. The present system is characterized by
              assessing the occupational and environmental related factors as
              crucial elements in assessing health risks for a user. The system
              generates health reports using bio-calculators to facilitate ease
              of understanding to the user. The present system to be integrated
              with the existing smart communication gadgets to serve most of the
              population. The system 15 collects and share the data of the users
              to the government agencies which can help them to device any
              health schemes.{" "}
            </p>
          </div>
        </div>
        <div className="patents2-container">
          <div className="patents2-image">
            <img src={img3} alt="patents-image"></img>
          </div>
          <div className="patents2-content">
            <div className="patents2-title">System for Preventing Suicides</div>

            <div className="patents2-developed-by">
              <div>DEVELOPED BY-</div>
              <div>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Principal Investigator</div>
              </div>
            </div>
            <p className="patents2-inner-content">
              Increasing stress, depression, anxiety, intolerance, disrespected
              and value for life is leading a significant population to suicidal
              tendency all over the world. There are few systems available in
              the market which claim for assessing the stress level of the
              individual but either they are centric to one type of population
              like students, house wives, workers etc. or limited to show the
              stress levels only. The present invention provides a system for
              prevention of suicide that estimates the mental stress on the
              basis of physiological, vocal and internet behaviour of the
              subjects. The system sends alerts according to the stress level to
              the near and dears, security. personnels, and counsellors. The
              proposed invention is provided with a network of volunteers who
              may immediately support the candidate in reducing stress and
              normalizing the condition as per geographic location.
            </p>
          </div>
        </div>
        <div className="see_more">
          <a href="http://bujhansi.co.in/bujhansi.ac.in/en/page/patents.html">
            See more...
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Patents2;
