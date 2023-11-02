import React from "react";
import "./events.css"; // Import your CSS file here
import NavBar from "./NavBar";
import Footer from "./footer";
import { useState } from "react";

function Events() {
  const [isUpcomingEventOpen, setIsUpcomingEventOpen] = useState(true);
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
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">November 23th - 27th, 2023</div>
                <div className="title">
                  {" "}
                  The two-day event was marked by spirited discussions,
                  insightful presentations, and a vision of collaboration and
                  knowledge sharing among the attending universities.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">December 1th - 6th, 2023</div>
                <div className="title">
                  Technology Hackthon - 2 (Screening Round)
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">December 11th, 2023</div>
                <div className="title">Technology Hackthon- 1 (Review)</div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">December 16th - 22th, 2023</div>
                <div className="title">
                  One Week Training cum Workshop on the Advanced
                  Characterization Technology
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">December 1st, 2023 onwards</div>
                <div className="title">
                  Starting of Module-1 (Advanced Research Methodology)
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">January 16th - 27th, 2024</div>
                <div className="title">
                  Two Weeks Capacity Building programme for young Social Science
                  faculty
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">January 15th, 2024 onwards</div>
                <div className="title">
                  Starting of Module-2 (Two weeks training on Advanced Research
                  Equipments)
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">February, 2024 onwards</div>
                <div className="title">
                  Starting of Module-3 Project based training
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">March 15th - 16th, 2024</div>
                <div className="title">
                  Event for Transfer of Technology to industries
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">March 18th, 2024 (Tentative)</div>
                <div className="title">2nd PAG meeting</div>
              </li>
            </ul>
          </div>
        )}
        {!isUpcomingEventOpen && (
          <div className="timeline-card">
            <h1 className="timeline-title">Past Events</h1>
            <ul className="timeline-list">
              <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">April 17th - 18th, 2023</div>
                <div className="title">TEC Conclave at Hyderabad University</div>
                <div className="descr">
                  The two-day event was marked by spirited discussions,
                  insightful presentations, and a vision of collaboration and
                  knowledge sharing among the attending universities.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">May 1st - 7th, 2023</div>
                <div className="title">
                  Hands on Training on “Advance Research Equipments”
                </div>
                <div className="descr">
                  Hands on Training on “Advance Research Equipments” have
                  conducted at the innovation centre by Department of Science &
                  Technology-Technology Enabling Centre (DST-TEC) in
                  collaboration with Training and Placement Cell, Bundelkhand
                  University, Jhansi
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">May 25th - 30th, 2023</div>
                <div className="title">
                  Technology Hackthon- 1 (Screening Round)
                </div>
                <div className="descr">
                  For the screening of project proposals received under
                  Technology Hackathon Phase 1 module was held during May 25-30,
                  2023, 11:00 am onward at the Innovation Centre, Bundelkhand
                  University, Jhansi.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">June 1st, 2023</div>
                <div className="title">
                  Nurturing innovative ideas for social benefits (Invited
                  Lecture)
                </div>
                <div className="descr">
                  Department of Science & Technology -Technology Enabling Centre
                  (DST-TEC) and Innovation Centre, Bundelkhand University,
                  Jhansi organized an invited Lecture with the theme entitled
                  “Nurturing innovative ideas for social benefits” by Prof. P.K.
                  Vajpayee, TEC Coordinator, Guru Ghasidas University, Bilaspur
                  on 01st June 2023.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#4CADAD" }}
              >
                <div className="date">June 19th, 2023</div>
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
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">July 15th, 2023</div>
                <div className="title">
                  Technology Hackthon- 1 (FinalSelection)
                </div>
                <div className="descr">
                  On July 15, 2023, Prof. Yogesh Goswami, ITM University
                  Gwalior, Dr. Ravi Prakash Saini, Sr. Scientist, ICAR-IGFRI,
                  Jhansi, Dr.Lavkush Dwivedi, Co-Coordinator, DST- TEC,
                  Bundelkhand University Jhansi, Prof. Soma Anil Mishra,
                  Director, Institute of Architecture & Town Planning, BU
                  Jhansi, Dr. Vinit Kumar, Associate Professor, Institute of
                  Environmental Science & Developmental Studies, BU Jhansi, Dr.
                  Nupur Gautam, Associate Professor, Department of Food Science
                  & Technology, BU Jhansi, and Dr.Sadik Khan, Dept. of Computer
                  Science Engineering, Institute of Engineering & Technology, BU
                  Jhansi are the following Projects Evaluation Committee members
                  were present in the meeting for the evaluation of project
                  proposals at the Innovation Centre, Bundelkhand University,
                  Jhansi.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">July 25th - 31th, 2023</div>
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
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">September 15th, 2023</div>
                <div className="title">
                  Technology Hackthon - 2 (Poster Release)
                </div>
                <div className="descr">
                  The process of selection of projects for the Hackathon-2
                  started with the release of poster on 15th September 2023. The
                  last date to submit the entries was 10th October 2023.
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">October 12th - 18th, 2023</div>
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
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Events;
