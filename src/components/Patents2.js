import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import img4 from "../images/patent4.jpg";
import img5 from "../images/patent5.jpg";
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
              <div style={{fontWeight:"bold"}}>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Co-Coordinator DST-TEC</div>
                <div>Dr. Rohit Peardon Principal Investigator</div>
              </div>
            </div>
            <br></br>
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
              <div style={{fontWeight:"bold"}}>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Principal Investigator</div>
                <div>Dr. Anupam Vyas Co-Principal Investigator</div>
              </div>
            </div>
            <br></br>
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
              <div style={{fontWeight:"bold"}}>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Lavkush Dwivedi Principal Investigator</div>
              </div>
            </div>
            <br></br>
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
        <div className="patents2-container">
          <div className="patents2-image">
            <img src={img4} alt="patents-image"></img>
          </div>
          <div className="patents2-content">
            <div className="patents2-title">
              Portable Solar Power Charger for Electronic Devices
            </div>
            <div className="patents2-developed-by">
              <div>DEVELOPED BY-</div>
              <div style={{fontWeight:"bold"}}>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Anupam Vyas Co-Principal Investigator</div>
                <div>DR. S K Srivastava</div>
                <div>Dr. Lavkush Dwivedi Principal Investigator</div>
                <div>Dr. Surendra Verma</div>
                <div>Dr. Priyanka Tripathi</div>
              </div>
            </div>
            <br></br>
            <p className="patents2-inner-content">
              Portable solar power for electronic devices offers a convenient
              and sustainable solution for on-the-go energy needs. These compact
              and efficient solar chargers utilize photovoltaic technology to
              harness sunlight and convert it into usable electrical energy.
              Designed with the modern, mobile lifestyle in mind, these portable
              solar panels can be easily folded or rolled up, making them
              lightweight and highly portable. Equipped with USB ports or other
              compatible connectors, they can charge a variety of electronic
              devices such as smartphones, tablets, cameras, and power banks
              directly from the sun. This eco-friendly alternative not only
              reduces reliance on traditional energy sources but also ensures
              that electronic devices can be powered up wherever there is access
              to sunlight, making it an ideal companion for outdoor activities,
              travel, and emergency situations. As the demand for sustainable
              energy solutions grows, portable solar power for electronic
              devices emerges as a practical and environmentally conscious
              choice for powering our tech-savvy lives.
            </p>
          </div>
        </div>
        <div className="patents2-container">
          <div className="patents2-image">
            <img src={img5} alt="patents-image"></img>
          </div>
          <div className="patents2-content">
            <div className="patents2-title">
              Eco-friendly Fully Renewable Energy-Based E-Vehicle for Movement
              in Campus of Bundelkhand University
            </div>
            <div className="patents2-developed-by">
              <div>DEVELOPED BY-</div>
              <div style={{fontWeight:"bold"}}>
                <div>Prof. Mukesh Pandey Hon'ble Vice-Chancellor,</div>
                <div>Dr. Deepak Tomar</div>
                <div>Dr. Zakir Ali</div>
                <div>DR. Sadik Khan</div>
                <div>Mr. Sabir Ali</div>
              </div>
            </div>
            <br></br>
            <p className="patents2-inner-content">
              Eco-friendly, fully renewable energy-based electric vehicles
              represent a revolutionary leap towards sustainable transportation.
              These vehicles will rely on renewable energy sources such as solar
              energy to charge their batteries, minimizing their carbon
              footprint and reducing dependence on fossil fuels. Harnessing the
              power of nature, these e-vehicles contribute significantly to
              mitigating climate change and promoting environmental
              conservation. The integration of advanced technologies, such as
              regenerative braking systems and energy-efficient motors, enhances
              the overall efficiency of these electric vehicles. By embracing
              renewable energy, e-vehicles not only reduce air pollution and
              greenhouse gas emissions but also pave the way for a cleaner and
              greener future. As society increasingly prioritizes environmental
              consciousness, the adoption of these eco-friendly e-vehicles plays
              a pivotal role in promoting a sustainable and responsible approach
              to transportation.
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
