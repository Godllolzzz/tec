import React from "react";
import "./Staff.css";
import firststaff from "../images/Nistha_mam.png";
import secondstaff from "../images/Shrikanth_sir.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";

const Staff = () => {
  return (
    <div>
      <NavBar />
      <div className="staff-main">
        <div className="Staff-heading">TEC Staff</div>
      </div>
      <div className="staff-outer">
        <div className="staff-inner">
          <div className="staff-inner-left">
            <img src={firststaff}></img>
            <div>
              <b>Dr. Nishtha Vyas</b>
            </div>
            <div>Principal Project Associate</div>
            <div>DST-BU TEC</div>
          </div>
          <div className="staff-inner-right">
            Dr. Nishtha Vyas, an accomplished professional in the field of
            Computer Science, achieved her Ph.D. in 2023 with a focus on Digital
            Image Processing. Her groundbreaking research, titled "An Analysis
            and Implementation Blood Trajectory for Forensic Science
            Applications using Image Processing," showcases her expertise and
            dedication to advancing technology for real-world applications. A
            proud alumna of Dr. A P J Abdul Kalam Technical University, Lucknow,
            she holds both M.Tech and B.Tech degrees. With over 15 years of
            invaluable teaching experience, Dr. Nishtha currently serves as the
            Principal Project Associate in the DST funded Technology Enabling
            Centre at Bundelkhand University, Jhansi. Her contributions to
            academia extend beyond the classroom, evident in her impressive
            portfolio of 5 publications in reputed journals and active
            participation in numerous national and international conferences,
            workshops, and webinars. Dr. Nishtha's commitment to continuous
            learning is commendable, reflected in the multitude of achievements
            and recognitions she has earned across various domains. Her
            excellence has been acknowledged with numerous prestigious awards,
            underscoring her significant impact in the field. Dr. Nishtha Vyas
            goes beyond traditional academic pursuits, embodying a holistic
            education and community engagement approach. Her dedication and
            passion for advancing knowledge and technology not only benefit her
            students but also contribute to the broader community. In essence,
            she stands as a beacon of knowledge and inspiration in the realm of
            Computer Science and Digital Image Processing.
          </div>
        </div>
        <div className="staff-inner">
          <div className="staff-inner-left">
            <img src={secondstaff}></img>
            <div>
              {" "}
              <b>Dr. K Shrikanth</b>
            </div>
            <div>Principal Project Associate</div>
            <div>DST-BU TEC</div>
          </div>
          <div className="staff-inner-right">
            Dr. K Shrikanth, an accomplished scholar, earned his Doctorate in
            Microbiology, Biotechnology & Biodiversity at the University of
            Madras, Chennai, in the distinguished presence of Hon’ble President
            of India Smt. Droupadi Murmu and Hon’ble Vice Chancellor Prof. Dr. S
            Gowri. Demonstrating outstanding academic excellence, he graduated
            with Distinction and received Gold Medal citations for both his
            B.Sc. and M.Sc. degrees in Microbiology. His expertise spans diverse
            scientific domains, including microbiology, molecular biology,
            genomics, proteomics, and bioinformatics, with applications in
            agriculture, environment, industry, and medicine. He is acclaimed
            for his commitment to scientific rigor and focuses his research on
            Need-based Solutions and Sustainable Development Goals (SDGs),
            emphasizing genetic architectures and species relationships for
            carbon sequestration through microbial mangroves and halophytes. A
            recognized figure in the scientific community, he has numerous
            publications in international journals and has actively participated
            in conferences worldwide. Dedicated to the application of science
            for rural development, he collaborates with youth, grassroots
            organizations, and communities, striving to nurture innovation and
            creativity while ensuring livelihood security through participatory
            approaches. As an Eminent Fellow Member of Scholars Academic &
            Scientific Society (SAS) and a Subject/Industry expert on the Board
            of Studies at Madurai Kamaraj University, he has also played
            leadership roles, presiding over the Intercollegiate Meet 'Cenittrez
            2011' and organizing the Southern Zone 'Innovation Festival
            2018-2020.' Engaged in professional associations, he is a member of
            IIMAR, ADNAT, and the National Green Crops. Dr. Shrikanth, the
            recipient of several awards, including the 'Youth Science Parliament
            Medal' and 'Janaki Ammal Gold Medal,' currently serves as the
            Principal Project Associate at the Department of Science &
            Technology-Technology Enabling Centre (DST-TEC) at Bundelkhand
            University, Jhansi, building upon a distinguished career that
            includes roles as a Doctoral Senior Fellow at ICAR-IARI &
            ICFRE-IFGTB and the Junior Mentor (in-charge) at the Innovation Hub,
            District Science Centre under the Ministry of Culture, Government of
            India
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
