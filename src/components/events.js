import React from "react";
import "./events.css"; // Import your CSS file here
import NavBar from "./NavBar";
import Footer from "./footer";

function Events() {
  return (
    <>
      <NavBar />{" "}
      <div className="timeline-card">
        <h1 className="timeline-title">Events timeline cards</h1>
        <ul className="timeline-list">
          <li className="timeline-item" style={{ "--accent-color": "#41516C" }}>
            <div className="date">17 and 18 April 2023</div>
            <div className="title">Hyderabad Conclave</div>
            <div className="descr">
            The two-day event was marked by spirited discussions, insightful presentations, and a vision of collaboration and knowledge sharing among the attending universities. 
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#FBCA3E" }}>
            <div className="date">1-7 May 2023</div>
            <div className="title">Hands on Training on “Advance Research Equipments”</div>
            <div className="descr">
            Hands on Training on “Advance Research Equipments” have conducted at the innovation centre by Department of Science & Technology-Technology Enabling Centre (DST-TEC) in collaboration with Training and Placement Cell, Bundelkhand University, Jhansi
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#E24A68" }}>
            <div className="date">25-30 May 2023</div>
            <div className="title">Technology Hackthon- 1 (Screening Round)</div>
            <div className="descr">
            For the screening of project proposals received under Technology Hackathon Phase 1 module was held during May 25-30, 2023, 11:00 am onward at the Innovation Centre, Bundelkhand University, Jhansi. 
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#1B5F8C" }}>
            <div className="date">01 June 2023</div>
            <div className="title">Nurturing innovative ideas for social benefits (Invited Lecture)</div>
            <div className="descr">
            Department of Science & Technology -Technology Enabling Centre (DST-TEC) and Innovation Centre, Bundelkhand University, Jhansi organized an invited Lecture with the theme entitled “Nurturing innovative ideas for social benefits” by Prof. P.K. Vajpayee, TEC Coordinator, Guru Ghasidas University, Bilaspur on 01st June 2023. 
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#4CADAD" }}>
            <div className="date">19 June 2023</div>
            <div className="title">The Industrial Expert visit </div>
            <div className="descr">
            The Industrial Expert visit program has driven by DST-TEC Bundelkhand University, Jhansi joining with the hands of Baidyanath Ayurveda, Jhansi.  The main objective of this program was to understand the present prospective status where the students can implement their ideology and to explore new avenues and skills in the field of Ayurvedic research. Dr. Lavkush Dwivedi, Institute of Biomedical Sciences, Co-Coordinator of DST-Technology Enabling Centre & Innovation Centre has organized the program on 19 June 2023 at the innovation Centre with the panel of industrial professionals.
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#41516C" }}>
            <div className="date">15 July 2023</div>
            <div className="title">Technology Hackthon- 1 (FinalSelection)</div>
            <div className="descr">
            On July 15, 2023, Prof. Yogesh Goswami, ITM University Gwalior, Dr. Ravi Prakash Saini, Sr. Scientist, ICAR-IGFRI, Jhansi, Dr.Lavkush Dwivedi, Co-Coordinator, DST- TEC, Bundelkhand University Jhansi, Prof. Soma Anil Mishra, Director, Institute of Architecture & Town Planning, BU Jhansi, Dr. Vinit Kumar, Associate Professor, Institute of Environmental Science & Developmental Studies, BU Jhansi, Dr. Nupur Gautam, Associate Professor, Department of Food Science & Technology, BU Jhansi, and Dr.Sadik Khan, Dept. of Computer Science Engineering, Institute of Engineering & Technology, BU Jhansi are the following Projects Evaluation Committee members were present in the meeting for the evaluation of project proposals at the Innovation Centre, Bundelkhand University, Jhansi.
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#FBCA3E" }}>
            <div className="date">25 to 31 July 2023</div>
            <div className="title">One Week Training on Advanced Research Equipments for Technological Advancement of MSMEs</div>
            <div className="descr">
            The one week training program was organised for providing detailed information on innovative equipments, the participants were highly benefited by the knowledge imparted in the seven day workshop.
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#E24A68" }}>
            <div className="date">15 Sep 2023</div>
            <div className="title">Technology Hackthon - 2 (Poster Release)</div>
            <div className="descr">
            The process of selection of projects for the Hackathon-2 started with the release of poster on 15th September 2023. The last date to submit the entries was 10th October 2023.
            </div>
          </li>
          <li className="timeline-item" style={{ "--accent-color": "#1B5F8C" }}>
            <div className="date">12 to 18 Oct 2023</div>
            <div className="title">One Week Training cum Workshop on Industry Oriented Spectroscopic Techniques</div>
            <div className="descr">
            The training was a great success with more than 45 registrations, The students were marked on their attendance and daily assessments. The Experts & participants were given certificates by hon'ble Vice Chancellor of Bundelkhand University, Jhansi
            </div>
          </li>
         
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Events;
