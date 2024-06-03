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
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">June 20, 2024 </div>
                <div className="title">
                Monthly Faculty Meet
                </div>
              </li>
             
             
              <li
                className="timeline-item"
                style={{ "--accent-color": "#FBCA3E" }}
              >
                <div className="date">July 08, 2024 </div>
                <div className="title">
                Hackathon-2 Review
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#E24A68" }}
              >
                <div className="date">July 09- 12, 
2024
</div>
                <div className="title">
                Hackathon -3 Screening
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">July 20, 2024</div>
                <div className="title">
                Monthly Faculty Meet
                </div>
              </li>
              <li
                className="timeline-item"
                style={{ "--accent-color": "#1B5F8C" }}
              >
                <div className="date">July 29,2024</div>
                <div className="title"> Hackathon -3 Selection</div>
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
                <div className="date">March 25 to 31, 2024</div>
                <div className="title">One Week Hands-on-Training
cum Workshop on
IOT & ITS APPLICATIONS
IN THE ADVANCEMENT OF
TRL’s OF INNOVATIONS IN
SCIENCE & TECHNOLOGY</div>
              </li>  
            <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">March 18, 2024</div>
                <div className="title">Student's Meet</div>
              </li>
            <li
                className="timeline-item"
                style={{ "--accent-color": "#41516C" }}
              >
                <div className="date">March 1, 2024</div>
                <div className="title">Exhibition Closure</div>
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
                <div className="title">Technology Hackathon-2 Level-2</div>
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
