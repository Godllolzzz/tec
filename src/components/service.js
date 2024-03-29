import React from "react";
import "./service.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import { useInView } from "react-intersection-observer";
import service_top_image from "../images/service_top_image.jpg"

const Service = () => {
  const [textRef1, textInView1] = useInView({
    triggerOnce: true,
  });
  const [textRef2, textInView2] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <NavBar />
      <div className="service-outer">
      <div className="service-top-image-container">
        <img src={service_top_image} alt="service-top-image"></img>
      </div>
        <h2 className="service-heading"> Fabrication & Instrumental Services</h2>
        <div
          ref={textRef1}
          className={`service-points ${textInView1 ? "slide-in" : ""}`}
        >
            <p>
              The Department of Science and Technology (DST) funded Technology
              Enabling Centre (TEC) at Bundelkhand University aim to support
              innovators and entrepreneurs in the country. Our centre provides a
              range of fabrication services and technical assistance to help
              individuals and startups turn their innovative ideas into tangible
              products or prototypes. The specific services offered by a
              DST-funded TEC at Bundelkhand University are –
            </p>
            <ol>
              <li>
                <b className="points-heading">Rapid Prototyping:</b> BU-TEC provides support to the
                innovators by helping them in refining their idea to get a
                better design for better implementation.
              </li>
              <li>
                <b className="points-heading">Machining and Fabrication:</b> We have Labs equipped with
                high end instruments & machinery for better precision during
                development and assembling components.
              </li>

              <li>
                <b className="points-heading">Material Testing:</b> Innovators can access facilities for
                material characterization and testing to ensure the quality and
                suitability of their materials for their intended applications.
              </li>

              <li>
                <b className="points-heading">Design and Engineering Support:</b> BU-TEC offers expertise
                in design and engineering, helping innovators refine their
                product designs and optimize them for manufacturability.
              </li>
              <li>
                <b className="points-heading">Technical Consultation:</b> Innovators can consult with
                experts at TEC to address technical challenges and receive
                guidance on the fabrication process.
              </li>
              <li>
                <b className="points-heading">Training and Workshops:</b> BU-TEC organize training
                sessions, workshops, and seminars to enhance the skills of
                innovators and entrepreneurs in areas related to fabrication and
                technology.
              </li>
              <li>
                <b className="points-heading">Access to Advanced Equipment:</b> These centres often provide
                access to specialized equipment and tools that innovators might
                not have access to otherwise.
              </li>
              <li>
                <b className="points-heading">Funding and Grant Assistance:</b> BU-TEC assists innovators
                in identifying funding opportunities and applying for grants or
                financial support to further develop their innovations.
              </li>
              <li>
                <b className="points-heading">Market Research and Commercialization Support:</b> BU-TEC
                offer assistance in market research, intellectual property
                protection, and strategies for commercializing innovations.
              </li>
            </ol>
            <p>
              To utilize the fabrication services and support provided by a
              DST-BU-TEC, innovators typically need to submit project proposals
              and undergo a selection process. The assistance provided to
              innovators may vary as per the discipline as per the availability
              of equipment and technology available.
            </p>
        </div>
        <h2 className="service-heading">Intellectual Property Services</h2>
        <div
          ref={textRef2}
          className={`service-points ${textInView2 ? "slide-in" : ""}`}
        >
            <p>
             IP services offered at BU TEC are:
            </p>
            <ol>
              <li>
                <b className="points-heading">IP Consultation and Guidance:</b> We offer consultations with
                experts or IP professionals who can provide guidance on
                intellectual property matters. This may include advice on
                patenting, copyright, trademark registration, and trade secrets.
              </li>
              <li>
                <b className="points-heading">Prior Art Searches:</b> We assist innovators in conducting
                prior art searches to determine whether their inventions or
                innovations are novel and eligible for patent protection.
              </li>
              <li>
                <b className="points-heading">Patent Drafting:</b> Assistance in drafting and preparing
                patent applications to protect innovative technologies or
                inventions. This includes ensuring that the patent application
                meets the requirements of the Indian Patent Act.
              </li>
              <li>
                <b className="points-heading">IP Workshops and Seminars:</b> BU-TEC organizes workshops,
                seminars, and training sessions on various aspects of
                intellectual property rights, including patenting, copyright,
                and trademark registration.
              </li>
              <li>
                <b className="points-heading">IP Strategy Development:</b> Helping innovators and startups
                develop strategies for protecting their intellectual property
                assets and managing IP portfolios effectively.
              </li>
              <li>
                <b className="points-heading">Technology Transfer and Licensing:</b> Facilitating the
                transfer or licensing of intellectual property rights to
                interested parties, such as companies or investors, for
                commercialization.
              </li>
              <li>
                <b className="points-heading">Assistance in Filing IP Applications:</b> BU-TEC provides
                support in the actual filing of patent, trademark, or copyright
                applications with the relevant authorities.
              </li>
              <li>
                <b className="points-heading">IP Awareness Programs:</b> We engage in educational outreach
                to raise awareness about the importance of intellectual property
                rights among innovators and researchers.
              </li>
              <li>
                <b className="points-heading">IP Commercialization Support:</b> Assisting innovators in
                identifying potential markets and commercialization
                opportunities for their IP-protected innovations.
              </li>
              <li>
                <b className="points-heading">Legal Support:</b> In some cases, BU-TEC have access to legal
                experts or law firms specializing in intellectual property law
                to provide legal advice and support.
              </li>
            </ol>
            <p>
              It's important to note that the specific IP services offered by
              the DST-TEC at Bundelkhand University may vary, and the
              availability of these services can change over time.
            </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
