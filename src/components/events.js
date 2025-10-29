import React from "react";
import "./events.css"; // Import your CSS file here
import NavBar from "./NavBar";
import Footer from "./footer";
import { useState } from "react";

function Events() {
  const [isUpcomingEventOpen, setIsUpcomingEventOpen] = useState(false);
  const eventToggleHandler = () => {
    setIsUpcomingEventOpen(!isUpcomingEventOpen);
  };

  return (
    <>
      <NavBar />
      <div className="events-outer-container">
        {isUpcomingEventOpen && (
          <div onClick={eventToggleHandler} className="events-toggle-button">
            PAST EVENTS
          </div>
        )}
        {!isUpcomingEventOpen && (
          <div onClick={eventToggleHandler} className="events-toggle-button">
            UPCOMING EVENTS
          </div>
        )}
        {isUpcomingEventOpen && (
          <div className="timeline-card">
            <h1 className="timeline-title">Upcoming Events</h1>
            <ul className="timeline-list">
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">November 06-12, 2025</div>
                <div className="title">Techrise</div>
                <div className="descr">
                  {" "}
                  Techrise - Techrise is an initiative under the each program
                  that focuses on increasing digital proficiency among
                  undergraduate students. The students will be trained to
                  understand and use computer systems efficiently along with
                  basic of coding and application development.
                </div>
              </li>

              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">November 11-17, 2025</div>
                <div className="title">
                  Innovative Embedded System for Advancement in the Field of
                  Technical Research
                </div>
                <div className="descr">
                  This training aims at providing students with basic knowledge
                  about embedded systems and their implementation, the students
                  will also be given hands-on training on PCB designing, etching
                  and assembly.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">December 2025</div>
                <div className="title">Innova-thon 2.0</div>
                <div className="descr">
                  Innova-thon 2.0 is an innovation marathon where participants
                  showcase, and industry experts pitch solutions to real-world
                  challenges, fostering creativity and problem-solving skills in
                  a competitive environment.
                </div>
              </li>
            </ul>
          </div>
        )}
        {/* //past events codes */}
        {!isUpcomingEventOpen && (
          <div className="timeline-card">
            <h1 className="timeline-title">Past Events</h1>
            <ul className="timeline-list">
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">October 15, 2025</div>
                <div className="title">One-day workshop on DataShakti</div>
                <div className="descr">
                  A one day workshop on Data Shakti for SDG driven Development
                  was organized by DST-TEC Bundelkhand University in
                  collaboration with Indian School of Development Management,
                  Noida & SCORE Livelihood Foundation, New Delhi. Among 85
                  registrations 48 NGOs, 20 MSMEs, 10 Faculty members and
                  Government officials and IT professionals also participated.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">March 05, 2025</div>
                <div className="title">
                  Technology Hackathon-4 Final Selection
                </div>
                <div className="descr">
                  The evaluation committee selected five projects keeping needs
                  of the society in priority for funding further development of
                  the presented ideas.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">March - June, 2025 </div>
                <div className="title">STRIDE 2.0 Module 3</div>
                <div className="descr">
                  This module provides an opportunity to implement theoretical
                  and practical knowledge gained by the students in the previous
                  modules. The students are allocated mentors as per their field
                  and choice and under their supervision the students complete a
                  project assigned for research.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">February 06 - March 05, 2025 </div>
                <div className="title">
                  STRIDE 2.0 Module-2 ( Advanced Research Equipment)
                </div>
                <div className="descr">
                  During the training on advanced Research Equipment, we will
                  learn to operate cutting-edge tools, analyze data with
                  precision, and troubleshoot technical issues effectively,
                  enhancing our research capabilities significantly.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">January 30 - March 05, 2025</div>
                <div className="title">
                  STRIDE 2.0 Module 1 (Research Methodology)
                </div>
                <div className="descr">
                  Over the month, we delved into the intricacies of research
                  design, methods, and analysis, refining our skills in
                  systematic inquiry and critical evaluation.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">January 9-11, 2025</div>
                <div className="title">Technology Hackathon-4 ( Screening)</div>
                <div className="descr">
                  All registered candidates presented their innovations and
                  prototypes. The expert panel selected 10 potent ideas for the
                  final presentation.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">December 13, 2024</div>
                <div className="title">
                  Technology Hackathon-3 Final Selection
                </div>
                <div className="descr">
                  The evaluation committee selected five projects keeping needs
                  of the society in priority for funding further development of
                  the presented ideas.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">October 15-16, 2024</div>
                <div className="title">Technology Hackathon-3 ( Screening)</div>
                <div className="descr">
                  All registered candidates presented their innovations and
                  prototypes. The expert panel selected 10 potent ideas for the
                  final presentation.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">October 5, 2024</div>
                <div className="title">Hackathon-2 Review</div>
                <div className="descr">
                  All projects sanctioned under DST-BUTEC in Hackathon-2 were
                  reviewed to check their progress & fund utilisation.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">September 27, 2024</div>
                <div className="title">
                  Safety of cosmetics and personal care products as per GLP
                  compliance
                </div>
                <div className="descr">
                  One day symposium was conducted to spread awareness in
                  students. Experts from industries like Bio tox solutions,
                  Shree Baidhyanath Pvt. Ltd and CSIR -IITR guided the
                  participants about research in their expert areas.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">August 31, 2024 </div>
                <div className="title">Android App Launching Ceremony</div>
                <div className="descr">
                  This event was a great achievement as seven Android
                  Applications were transferred to MSMEs free-of-cost for
                  supporting their digital presence. These apps were developed
                  by students trained by DST-BUTEC.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">August 01 - August 31, 2024 </div>
                <div className="title">
                  STRIDE Module-2 ( Advanced Research Equipment)
                </div>
                <div className="descr">
                  During the training on advanced Research Equipment, we will
                  learn to operate cutting-edge tools, analyze data with
                  precision, and troubleshoot technical issues effectively,
                  enhancing our research capabilities significantly.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">June 3 to July 10, 2024</div>
                <div className="title">
                  STRIDE Module 1 (Research Methodology)
                </div>
                <div className="descr">
                  Over the month, we delved into the intricacies of research
                  design, methods, and analysis, refining our skills in
                  systematic inquiry and critical evaluation.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">May 15, 2024</div>
                <div className="title">
                  INTELLECTUAL PROPERTY AND PATENT DRAFTING IN INDIAN CONTEXT
                </div>
                <div className="descr">
                  One day seminar was conducted by Mr. Vikas Asawat, he is a
                  government certified attorney, who guided the the participants
                  about details related to patent filling in India.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">April 29, 2024</div>
                <div className="title">Award Ceremony Innova-thon</div>
                <div className="descr">
                  The event was marked with great enthusiasm and excitement of
                  students as the teams awarded with cash prices for Innova-thon
                  conducted on 28 Feb 2024. Along with this posters for
                  Innova-thon 2.0 and Hackathon-3 were also released.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">April 27 to May 5, 2024</div>
                <div className="title">
                  One Week Hands-on-Training cum Workshop on IOT & ITS
                  APPLICATIONS IN THE ADVANCEMENT OF TRL’s OF INNOVATIONS IN
                  SCIENCE & TECHNOLOGY
                </div>
                <div className="descr">
                  This one week training helped the students to understand
                  basics of sensors and their implementation in basic
                  electronics circuits. In this training students created small
                  sensor based circuits themselves and created innovative
                  designs to solve day to day problems.
                </div>
              </li>{" "}
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">April 24, 2024</div>
                <div className="title">Faculty RENDEZVOUS</div>
                <div className="descr">
                  The program aimed to create a network in the universities and
                  colleges that will provide a platform for aiding eco system,
                  process and support system to identify young talent, support
                  research ideation,promote innovation, build research capacity,
                  technology development, transfer and their commercialization
                  to the industry.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">March 18, 2024</div>
                <div className="title">Student's Meet</div>
                <div className="descr">
                  {" "}
                  DST-BU TEC organised a students meet to know the status of the
                  projects assigned to them to support the MSMEs of the
                  Bundelkhand Region. The MSME representatives also attended the
                  meeting and here the student teams were assigned to each MSME
                  for digital empowerment.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">March 14, 2024</div>
                <div className="title">
                  TEC Conclave at Jawaharlal Nehru University
                </div>
                <div className="descr">
                  The event was marked by spirited discussions, insightful
                  presentations, and a vision of collaboration and knowledge
                  sharing among the attending universities. All TECs showcased
                  their achievements and key indicators.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">February 28, 2024</div>
                <ul className="title">
                  <li>TOT and MSME Meet</li>
                  <li>Prize Distribution</li>
                  <li>Exhibition Innova-thon</li>
                </ul>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">February 20 to 26, 2024</div>
                <div className="title">
                  AI Ethics & Applications for the technological advancements
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">February 10 to 16, 2024</div>
                <div className="title">
                  Advanced Android Application Developer
                </div>
                <div className="descr">
                  One week training for application development.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">February 05, 2024</div>
                <div className="title">
                  Technology Hackathon-2 Final Selection
                </div>
                <div className="descr">
                  The evaluation committee selected five projects keeping needs
                  of the society in priority for funding further development of
                  the presented ideas.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">February 1, 2024</div>
                <div className="title">
                  {" "}
                  Launch of Technology Hackathon-3 Posters
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">January 16 to 23, 2024</div>
                <div className="title">Advanced Research Equipment</div>
                <div className="descr">
                  One week hands-on training cum workshop was organised for
                  students of Axis College, Kanpur.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">January 9 to 13, 2024</div>
                <div className="title">
                  Technology Hackathon - 2 (Screening){" "}
                </div>
                <div className="descr">
                  More than 60 application were received for registration in
                  Hackathon - 2. These participants presented their idea in both
                  online and offline mode and screening was done to select best
                  10 projects for level 2.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">January 8, 2024</div>
                <div className="title">Technology Hackathon-1 (Review)</div>
                <div className="descr">
                  All the Sanctioned Projects under DST-TEC BU Jhansi were
                  reviewed to check their progress and fund utilization.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">December 28, 2023</div>
                <div className="title">Partner Institute Meet</div>
                <div className="descr">
                  All partner institute representatives were invited along with
                  the core committee to give their suggestions for better
                  working of the technology enabling centre.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">December 16 to 22, 2023</div>
                <div className="title">
                  Advanced Characterization Techniques
                </div>
                <div className="descr">
                  One week training on Advanced Characterization Techniques was
                  a great success along with knowledge about research equipment,
                  students were given information about Patents, Digital
                  Security and other important information related to government
                  policies.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">November 23 to 27, 2023</div>
                <div className="title">
                  International Conference on Ultrasonics and Material Science
                  for Advanced Technology
                </div>
                <div className="descr">
                  The event was marked by spirited discussions, insightful
                  presentations, and a vision of collaboration and knowledge
                  sharing among the attending universities.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">October 12 to 18, 2023</div>
                <div className="title">
                  One Week Training cum Workshop on Industry Oriented
                  Spectroscopic Techniques
                </div>
                <div className="descr">
                  The training was a great success with more than 45
                  registrations, The students were marked on their attendance
                  and daily assessments. The Experts & participants were given
                  certificates by hon'ble Vice Chancellor of Bundelkhand
                  University, Jhansi
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">September 15, 2023</div>
                <div className="title">
                  Technology Hackathon - 2 (Poster Release)
                </div>
                <div className="descr">
                  The process of selection of projects for the Hackathon-2
                  started with the release of poster on 15th September 2023. The
                  last date to submit the entries was 10th October 2023.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">July 25 to 31, 2023</div>
                <div className="title">
                  One Week Training on Advanced Research Equipments for
                  Technological Advancement of MSMEs
                </div>
                <div className="descr">
                  The one week training program was organised for providing
                  detailed information on innovative equipments, the
                  participants were highly benefited by the knowledge imparted
                  in the seven day workshop.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">July 15, 2023</div>
                <div className="title">
                  Technology Hackathon- 1 (FinalSelection)
                </div>
                <div className="descr">
                  The evaluation committee meeting was held on July 15, 2023 for
                  selection of final five projects under TEC - Technology
                  Hackathon-1. Five projects on different areas of the
                  identified social needs were sanctioned.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">June 19, 2023</div>
                <div className="title">The Industrial Expert visit </div>
                <div className="descr">
                  The Industrial Expert visit program has driven by DST-TEC
                  Bundelkhand University, Jhansi joining with the hands of
                  Baidyanath Ayurveda, Jhansi. The main objective of this
                  program was to understand the present prospective status where
                  the students can implement their ideology and to explore new
                  avenues and skills in the field of Ayurvedic research. Dr.
                  Lavkush Dwivedi, Institute of Biomedical Sciences,
                  Co-Coordinator of DST-Technology Enabling Centre & Innovation
                  Centre has organized the program on 19 June 2023 at the
                  innovation Centre with the panel of industrial professionals.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">June 1, 2023</div>
                <div className="title">
                  Nurturing innovative ideas for social benefits (Invited
                  Lecture)
                </div>
                <div className="descr">
                  Department of Science & Technology -Technology Enabling Centre
                  (DST-TEC) and Innovation Centre, Bundelkhand University,
                  Jhansi organized an invited Lecture with the theme entitled
                  “Nurturing innovative ideas for social benefits” by Prof. P.K.
                  Bajpayee, TEC Coordinator, Guru Ghasidas University, Bilaspur
                  on 01st June 2023.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">May 25 to 30, 2023</div>
                <div className="title">
                  Technology Hackathon- 1 (Screening Round)
                </div>
                <div className="descr">
                  For the screening of project proposals received under
                  Technology Hackathon Phase 1 module was held during May 25 to
                  30, 2023, 11:00 am onward at the Innovation Centre,
                  Bundelkhand University, Jhansi.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">May 1 to 7, 2023</div>
                <div className="title">
                  Hands on Training on “Advance Research Equipments”
                </div>
                <div className="descr">
                  Hands on Training on “Advance Research Equipments” was
                  conducted at the innovation centre by Department of Science &
                  Technology-Technology Enabling Centre (DST-TEC) in
                  collaboration with Training and Placement Cell, Bundelkhand
                  University, Jhansi
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">April 17 to 18, 2023</div>
                <div className="title">
                  TEC Conclave at Hyderabad University
                </div>
                <div className="descr">
                  The two-day event was marked by spirited discussions,
                  insightful presentations, and a vision of collaboration and
                  knowledge sharing among the attending universities.
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Events;
