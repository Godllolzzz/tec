import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./TechnicalServices.css"
import { useInView } from "react-intersection-observer";

const TechnicalServices = () => {

    const [textRef1, textInView1] = useInView({
        triggerOnce: true,
    });
    const [textRef2, textInView2] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <NavBar />
            <h2 className="technical-services-heading"> Technical Services</h2>
            <div className="technical-services-main-container">
                <div ref={textRef1}
                    className={`service-points ${textInView1 ? "slide-in" : ""}`}>

                    <h2 style={{color:"#F4C430", marginBottom:"1rem"}}>Web Development</h2>
                    <p>Transform your online presence with our comprehensive website development services. Whether you need a simple business website or a complex e-commerce platform, we've got you covered. Our team works closely with you to understand your requirements and deliver a website that not only looks great but also performs flawlessly across all devices.

                        Custom Website Development: Tailored solutions to suit your specific business goals and requirements.
                        Responsive Design: Ensuring your website looks stunning and functions seamlessly on desktops, tablets, and mobile devices.
                        E-commerce Development: Building robust online stores with secure payment gateways and user-friendly interfaces.
                        Content Management Systems (CMS): Implementing easy-to-use CMS platforms like WordPress, Joomla, or Drupal for effortless content management.
                    </p>
                    <br></br>
                    <ul className="about-innovation-centre-content">
                        <li>

                            Custom Website Development: Tailored solutions to suit your specific business goals and requirements.
                        </li>
                        <li>

                            Responsive Design: Ensuring your website looks stunning and functions seamlessly on desktops, tablets, and mobile devices.
                        </li>
                        <li>

                            E-commerce Development: Building robust online stores with secure payment gateways and user-friendly interfaces.
                        </li>
                        <li>

                            Content Management Systems (CMS): Implementing easy-to-use CMS platforms like WordPress, Joomla, or Drupal for effortless content management.
                        </li>

                    </ul>
                </div>
                <div ref={textRef2}
                    className={`service-points ${textInView2 ? "slide-in" : ""}`}>

                    <h2 style={{color:"#F4C430", marginBottom:"1rem"}}>Android App Development</h2>
                    <p>                        Reach your audience on the go with our expert Android app development services. Whether you're looking to launch a new app or enhance an existing one, our team has the skills and expertise to bring your vision to life. From initial concept to final deployment, we handle every aspect of the development process with precision and care.
                    </p>
                    <br></br>
                    <ul className="about-innovation-centre-content">
                        <li>
                            Android App Development:                    Reach your audience on the go with our expert Android app development services. Whether you're looking to launch a new app or enhance an existing one, our team has the skills and expertise to bring your vision to life. From initial concept to final deployment, we handle every aspect of the development process with precision and care.
                        </li>


                        <li>


                            Native Android App Development: Crafting native Android apps tailored to leverage the full potential of the platform.
                        </li>
                        <li>

                            Cross-Platform Development: Building apps that work seamlessly across multiple platforms using frameworks like React Native or Flutter.
                        </li>
                        <li>

                            User-Centric Design: Creating intuitive and engaging user interfaces that keep users coming back for more.
                        </li>
                        <li>

                            API Integration: Integrating with third-party APIs to add advanced functionality and enhance the user experience.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default TechnicalServices