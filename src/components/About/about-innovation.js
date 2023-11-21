// import React, { useState } from "react";
// import "./about-innovation-centre.css";
// import { useInView } from "react-intersection-observer";
// import innovation_centre_image1 from "../../images/innovation_centre (2).jpg";
// import innovation_centre_image2 from "../../images/innovation_collage.jpg";
// import bu_tec_logo from "../../images/BUTEC(Organisation).jpg";
// import NavBar from "../NavBar";
// import Footer from "../footer";
// import eqp1 from "../../images/innov_eqip1.jpg"
// import eqp2 from "../../images/innov_eqip2.jpg"
// import eqp3 from "../../images/innov_eqip3.jpg"
// import eqp4 from "../../images/innov_eqip4.jpg"
// import eqp5 from "../../images/innov_eqip5.jpg"
// import eqp6 from "../../images/innov_eqip6.jpg"
// import eqp7 from "../../images/innov_eqip7.jpg"
// import eqp8 from "../../images/innov_eqip8.jpg"
// import eqp9 from "../../images/innov_eqip9.jpg"
// import mm_sir from "../../images/mm_sir__1_-removebg-preview.png"
// import lav_sir from "../../images/luv_sir (1).jpg"
// import about_innovation_top_image from "../../images/service_top_image.jpg"

// const AboutInnovationCentre = (props) => {
//   const [textRef, textInView] = useInView({
//     triggerOnce: true,
//   });
//   const [imageRef, imageInView] = useInView({
//     triggerOnce: true,
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const setContentOpen = () => {
//     setIsOpen(!isOpen);
//   };
//   var content1 = `
// <div>
//   The Innovation Centre was established in 2014 at Bundelkhand
//   University, located in the historic city of Jhansi, is a hub of
//   creativity and entrepreneurial spirit that has been driving
//   innovation and research in the region. This center, often referred
//   to as the BU Innovation Centre, plays a pivotal role in fostering a
//   culture of innovation, entrepreneurship, and technological
//   advancement in the region.
// </div>`;
//   var content2 = `
// <div>
//   The Innovation Centre was established in 2014 at Bundelkhand
//   University, located in the historic city of Jhansi, is a hub of
//   creativity and entrepreneurial spirit that has been driving
//   innovation and research in the region. This center, often referred
//   to as the BU Innovation Centre, plays a pivotal role in fostering a
//   culture of innovation, entrepreneurship, and technological
//   advancement in the region.
// </div>
// <h2>Mission and Objectives:</h2>
// <div>
//   The primary mission of the Innovation Centre at Bundelkhand
//   University is to promote innovation, research, and development in
//   various fields. Its objectives include:
// </div>
// <ol>
//   <li>
//     <b className="points-heading">Ideation:</b> The center provides the necessary resources and
//     support to innovate and nurture new ideas, fostering an
//     environment conducive to entrepreneurial success. It offers
//     mentorship, access to funding, and co-working spaces for budding
//     researchers.
//   </li>
//   <li>
//     <b className="points-heading">Research and Development:</b> The center serves as a hub for
//     cutting-edge research in various fields. Faculty members and
//     students are encouraged to explore innovative ideas and projects
//     that have the potential to make a significant impact on society.
//   </li>
//   <li>
//     <b className="points-heading">Skill Development:</b> The BU Innovation Centre offers training
//     and skill development programs to equip students and aspiring
//     entrepreneurs with the knowledge and tools they need to thrive in
//     the ever-evolving world of technology and business.
//   </li>
//   <li>
//     <b className="points-heading">Industry Collaboration:</b> To bridge the gap between academia
//     and industry, the center collaborates with various industries and
//     organizations. This partnership ensures that research conducted at
//     the university is relevant and can be applied to real-world
//     problems.
//   </li>
// </ol>
// <h2>Facilities and Resources:</h2>
// <div>
//   The Innovation Centre is equipped with state-of-the-art facilities
//   and resources to support innovation and research. These include:
// </div>
// <ol>
//   <li>
//     <b className="points-heading">laboratories:</b>Specialized research laboratories equipped
//     with cutting-edge technology to facilitate experimentation and
//     innovation in fields such as biotechnology, nanotechnology, and
//     information technology.
//   </li>
//   <li>
//     <b className="points-heading">Research Spaces:</b> The center innovators with co-working
//     spaces, meeting rooms, and access to a network of mentors and
//     advisors. These resources are crucial for turning ideas into
//     successful businesses.
//   </li>
//   <li>
//     <b className="points-heading">Library and Information Center:</b> : A well-stocked library
//     with access to a vast collection of books, research papers, and
//     online databases to support academic and research activities.
//   </li>
//   <li>
//     <b className="points-heading">Funding Opportunities:</b> The BU Innovation Centre assists
//     innovators and entrepreneurs in securing funding from government
//     grants, private investors, and venture capitalists.
//   </li>
// </ol>
// <h2>Achievements and Impact</h2>
// <div>
//   Over the years, the Innovation Centre at Bundelkhand University has
//   made significant contributions to the region's socio-economic
//   development. It has been a catalyst for:
// </div>
// <ol>
//   <li>
//     <b className="points-heading">Research Output:</b>The center has produced a wealth of
//     research in various fields, contributing to the academic
//     reputation of the university and addressing local and national
//     challenges.
//   </li>
//   <li>
//     <b className="points-heading">Skill Development:</b> The BU Innovation Centre has helped
//     students and researchers acquire valuable skills and knowledge,
//     making them more competitive in the job market.
//   </li>
//   <li>
//     <b className="points-heading">Community Engagement:</b>The center often hosts workshops,
//     seminars, and events that engage the local community and foster a
//     spirit of innovation among the broader population.
//   </li>
// </ol>`;

//   return (
//     <>
//       <NavBar />
//       <div className="about-innovation-top-image">
//         <img src={about_innovation_top_image} alt="about-innovation-top-image"></img>
//       </div>
//       <div className="about-innovation-main-heading">Innovation Centre</div>
//       <div className="about-innovation-inner">
//         {!isOpen && (
//           <div
//             style={{ borderRight: "4px solid #03174F" }}
//             ref={imageRef}
//             className={`about-innovation-image ${
//               imageInView ? "slide-in" : ""
//             }`}
//           >
//             <img
//               style={{ height: "100%", width: "100%" }}
//               src={innovation_centre_image1}
//               alt="DST TEC Logo"
//             />
//           </div>
//         )}
//         {isOpen && (
//           <div className="about-innovation-images">
//             <div
//               ref={imageRef}
//               className={`about-innovation-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp1}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp2}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp3}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp4}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             {/* <div
//               ref={imageRef}
//               className={`about-innovation-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp5}
//                 alt="DST TEC Logo"
//               />
//             </div> */}
//           </div>
//         )}
//         <div
//           ref={textRef}
//           className={`about-innovation-text ${textInView ? "slide-in" : ""}`}
//         >
//           {!isOpen && (
//             <div>
//               <div
//                 className="about-innovation-content"
//                 dangerouslySetInnerHTML={{ __html: content1 }}
//               ></div>
//               <div className="see-more" onClick={setContentOpen}>
//                 see more...
//               </div>
//             </div>
//           )}
//           {isOpen && (
//             <div>
//               <div
//                 className="about-innovation-content"
//                 dangerouslySetInnerHTML={{ __html: content2 }}
//               ></div>
//               <div className="see-more" onClick={setContentOpen}>
//                 see less...
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {isOpen && (
//           <div className="about-innovation-row-images">
//             <div
//               ref={imageRef}
//               className={`about-innovation-row-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp6}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-row-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp7}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-row-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp8}
//                 alt="DST TEC Logo"
//               />
//             </div>
//             <div
//               ref={imageRef}
//               className={`about-innovation-row-img ${
//                 imageInView ? "slide-in" : ""
//               }`}
//             >
//               <img
//                 style={{ height: "100%", width: "100%" }}
//                 src={eqp9}
//                 alt="DST TEC Logo"
//               />
//             </div>
//           </div>
//         )}
//       {!isOpen && (<div className="about-innovation-bottom-images">
//         <div className="about-innovation-bottom-image">
//           <img src={mm_sir} style={{width:"100%"}} alt="mm_sir"></img>
//           <div className="about-innovation-name">Prof M.M. Singh</div>
//           <p className="about-innovation-position">Convener</p>
//           <p className="about-innovation-position">Innovation Centre</p>
//           <p className="about-innovation-position">Dean Engineering</p>
//         </div>
//         <div className="about-innovation-bottom-image">
//           <img src={lav_sir} style={{width:"100%"}} alt="lav_sir"></img>
//           <div className="about-innovation-name">Dr.Lavkush Dwivedi</div>
//           <p className="about-innovation-position">Coordinator</p>
//           <p className="about-innovation-position">Innovation Centre</p>
//         </div>
//       </div>)}
//       <Footer />
//     </>
//   );
// };

// export default AboutInnovationCentre;

import "./about-innovation-centre.css";
import ab1 from "../../images/about-innovation-1.jpg";
import ab2 from "../../images/about-innovation-2.jpg";
import ab3 from "../../images/about-innovation-3.jpg";
import ab4 from "../../images/about-innovation-4.jpg";
import ab5 from "../../images/about-innovation-5.jpg";
import ab6 from "../../images/about-innovation-6.jpg";
import ab7 from "../../images/about-innovation-7.jpg";
import ab8 from "../../images/about-innovation-8.jpg";
import ab9 from "../../images/about-innovation-9.jpg";
import ab10 from "../../images/about-innovation-10.jpg";
import ab11 from "../../images/about-innovation-11.jpg";
import ab12 from "../../images/about-innovation-12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import NavBar from ".././NavBar";
import Footer from ".././footer";
const AboutInnovationCentre = () => {
  return (
    <>
    <NavBar />
      <div className="about-innovation-centre-outer">
        <div className="about-innovation-centre-heading">
          1. About the Centre
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            Innovation Centre is a Central Instrumentation facility equipped
            with sophisticated analytical equipments like X- Ray Diffractometer,
            Gas Chromatography- Mass Spectrometer, Atomic Absorption
            Spectrometer (AAS), High Performance Liquid Chromatography (HPLC),
            Real Time – PCR, Total Organic Carbon Analyzer, Fourier Transform
            Infrared Spectroscopy (FTIR), Ultra Centrifuge, Digital Imaging
            System, Multi-Mode Microplate Reader, PQMS, Two- Dimensional Gel
            Electrophoresis, Cell Culture Facility, etc.
          </li>
          <li>
            It provides analytical facilities to various researchers of
            University, affiliated colleges and industries throughout India.
          </li>
          <li>
            It promotes Research & Development activities in the inter, multi &
            transdisciplinary research fields on University Campus & affiliated
            Colleges.
          </li>
          <li>
            It is engaged in the Research Capacity Building & Human Resource
            Development by organizing various project-based research trainings,
            workshops on the equipments of social importance like Real Time PCR,
            GC-MS, AAS, etc.
          </li>
        </ul>
        <div className="about-innovation-centre-image-container">
          <img src={ab1} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-heading">
          2. Aims & Objectives
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            To inculcate and nurture the innovative ideas of students and
            faculty members of the University.
          </li>
          <li>
            To enhance ranking and brand image of the University by facilitating
            quality
          </li>
          <li>
            To work for the career development of the faculty members by
            facilitating the extramural research and consultancy projects.
          </li>
          <li>
            To serve the science by extending services to other academic
            institutions and industries and generating revenue for
            self-sustenance.
          </li>
          <li>
            To develop research capacity & human resources by organizing short
            term courses/Trainings/workshops for the research skill development
            among the participants.
          </li>
        </ul>
        <div className="about-innovation-centre-heading">
          3. Major Research Areas
        </div>
        <ul className="about-innovation-centre-content">
          <li>Biological, Physical, Chemical Sciences</li>
          <li>
            Pharmaceutical, Forensic, Agricultural, Environmental, Material &
            Biomedical Sciences
          </li>
        </ul>
        <div className="about-innovation-centre-heading">
          4. Major beneficiaries of the Centre
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            Faculty members of the University Campus for completing their R&D
            Projects.
          </li>
          <li>PhD scholars of the major research areas.</li>
          <li>
            M.Sc. Dissertation students of the University Campus and affiliated
            Colleges.
          </li>
          <li>
            Faculty members, scientists, Vaidyas and industry persons of outside
            the Campus for their samples analysis on charge basis.
          </li>
          <li>
            UG & PG level students seeking for the Research Capacity Building &
            Human Resource Development through training/workshop on various
            equipments.
          </li>
          <li>
            Society people like farmers seeking facility for the water, soil
            sample testing for heavy metals.
          </li>
        </ul>
        <div className="about-innovation-centre-image-container">
          <img src={ab2} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-heading">
          5. Ongoing Projects of the Centre
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            UGC-STRIDE(I) funded Research Capacity Building & Human Resource
            Development Programme (Cost- 61.0 Lacs; 2020-2023)
          </li>
          <li>
            UP Govt. funded Development of predictive in-silico tool for online
            self-health risk assessment and management (Cost-1.41 Lacs;
            2021-2024).
          </li>
          <li>
            Baidyanath Research Fellowship Programme for the promotion of
            Ayurved Research (Cost- 42.0 Lacs; 2022-2025).
          </li>
          <li>
            DST- Technology Enabling Centre funded by Dept. of Science &
            Technology, Govt. of India for the establishment of ecosystem for
            Innovation & Technology development (Cost- 500 Lacs; 2022-2027).{" "}
          </li>
          <li>
            Other than above about 20 different projects of University Campus
            are facilitated by the Centre.
          </li>
        </ul>
        <div className="about-innovation-centre-heading">
          6. Projects Submitted
        </div>
        <ul className="about-innovation-centre-content">
          <li>
             Centre for Advanced Studies in Biomedical Science & Ayurveda
            (Submitted to- Govt. of Uttar Pradesh; Cost-152.32 Lacs).
          </li>
        </ul>
        <div className="about-innovation-centre-heading">
          7. The Research Capacity Building & Human Resource Development
          activities conducted in last 05 years.
        </div>
        <div className="about-innovation-centre-heading">
          8. The Human Resources trained so far through FDPs, Training
          Programmes, Workshops, Brain Storming Sessions, etc.
        </div>
        <ul className="about-innovation-centre-content">
          <li>200+ UG Students</li>
          <li>300+ PG students</li>
          <li>200+ Research Scholars</li>
          <li>150+ Faculty members</li>
        </ul>
        <div className="about-innovation-centre-heading">
          9. Quantitative details of the Users
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            About 2500 researchers of different disciplines used the facility in
            their samples analysis.
          </li>
          <li>
            About 3400 samples are analyzed on various equipments in last 05
            years.
          </li>
          <li>
            On Average 22 researchers daily visit to the Centre for their
            research, analysis & training works.
          </li>
          <li>
            About 65 minor projects on Interdisciplinary, Multidisciplinary and
            Transdisciplinary fields have been carried out in the Centre under
            the UGC-STRIDE(I) Programme in last 2 Years.
          </li>
        </ul>
        <div className="about-innovation-centre-heading">
          10. Earning of the Centre through Consultancy in last 05 Years
        </div>
        <div className="about-innovation-centre-heading">
          11. Community Services & Outreach Programs of the Centre
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            Provided Realtime PCR machine and manpower (Ms. Deeksha Pandey & Mr.
            Ravendra Kesarwani) to MLB Medical College/District Administration
            for COVID-19 testing of entire Bundelkhand region of U.P. during
            extreme panic, National lock-down situation.
          </li>
          <li>
            Anjeer, Anaar, Stevia and Safed Musli as alternative cash crops in
            five villages namely Kalothra Ambabay, Hastinapur, Kanchanpur,
            Ganesh Ganj, and Raksa of Jhansi under the DST-NRDMS project.
          </li>
          <li>
            Provided equipment facility to local farmers, Sales office,
            industries, Vaidyas for the validation of their
            samples/formulations.
          </li>
          <li>
            More than 1000 external samples have been analyzed so far on various
            equipments.{" "}
          </li>
        </ul>
        <div
          style={{ paddingBottom: "0rem" }}
          className="about-innovation-centre-image-container"
        >
          <img src={ab3} alt="about-image"></img>
        </div>
        <div
          style={{ paddingTop: "0rem" }}
          className="about-innovation-centre-image-container"
        >
          <img src={ab4} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-heading">
          12. Types of Training Programmes offered by the Centre
        </div>
        <ul className="about-innovation-centre-content">
          <li>
            One-week Hands-on-Training Programme on 4-5 equipments of allied
            fields (Throughout the year)
          </li>
          <li>
            Two weeks Hands-on-Training Programme on major equipments of the
            Centre (May-June).
          </li>
          <li>Faculty Development Programme (Sep.-Oct.).</li>
          <li>
            Certificate Programme on Advanced Research Methodology & Training on
            Advanced Research Equipments (Jan-June)
          </li>
          <li>
            Two weeks Dedicated Training on particular equipment (Throughout the
            year).
          </li>
          <li>6 Month Internship Programme (Jan-June)</li>
          <li>
            Outreach Programme for the Capacity Building of deprived population
            of rural areas. (Throughout the year)
          </li>
          <li>Faculty Training Programmes (Throughout the year)</li>
        </ul>
        <div className="about-innovation-equipment-heading-box">
        Glimpse of Major Equipments & Activities
        </div>
        <div className="about-innovation-centre-image-container">
          <img src={ab9} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-image-container">
          <img src={ab10} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-image-container">
          <img src={ab11} alt="about-image"></img>
        </div>
        <div className="about-innovation-centre-image-container">
          <img src={ab12} alt="about-image"></img>
        </div>
        <div
          style={{ marginTop: "2rem" }}
          className="about-innovation-centre-heading"
        >
          Photographs of the various activities conducted by the Centre{" "}
        </div>
        <div className="about-innovation-centre-image-container">
          <img src={ab5} alt="about-image"></img>
        </div>
        <div
          style={{ paddingBottom: "0rem" }}
          className="about-innovation-centre-image-container"
        >
          <img src={ab6} alt="about-image"></img>
        </div>
        <div
          style={{ paddingTop: "0rem", paddingBottom: "0rem" }}
          className="about-innovation-centre-image-container"
        >
          <img src={ab7} alt="about-image"></img>
        </div>
        <div
          style={{ paddingTop: "0rem", paddingBottom: "0rem" }}
          className="about-innovation-centre-image-container"
        >
          <img src={ab8} alt="about-image"></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutInnovationCentre;
