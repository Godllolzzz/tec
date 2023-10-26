import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheckDouble,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./ServiceOverview.css";

const ServiceOverview = () => {
  return (
    <div className="service-overview-container">
      <h1 className="service-overview-main-heading"> Our Services</h1>
      <div className="service-overview-outer-container">
        <div className="service-overview-inner-container">
          <FontAwesomeIcon
            className="service-overview-icon"
            icon={faBriefcase}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <div className="service-overview-heading">Fabrication Facility</div>
          <div className="service-overview-content">
            Bundelkhand University has fabrication facility for in-house design
            and fabrication of most of the project prototypes.
          </div>
        </div>
        <div className="service-overview-inner-container">
          <FontAwesomeIcon
            icon={faCheckDouble}
            size="2xl"
            style={{ color: "#ffffff" }}
          />

          <div className="service-overview-heading">
            Instrumentation Facility
          </div>
          <div className="service-overview-content">
            Bundelkhand University Central Instrumentation Facility (CUCIF) is
            known for its consultancy services to the scientific.
          </div>
        </div>
        <div className="service-overview-inner-container">
          <FontAwesomeIcon
            icon={faChartSimple}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <div className="service-overview-heading">IP Services</div>
          <div className="service-overview-content">
            Bundelkhand University has a dedicated IPR cell with patent
            attorneys on board. University has an easy patent policy.
          </div>
        </div>
      </div>
      <div className="see_more"><a href="/service">See More...</a></div>
    </div>
  );
};
export default ServiceOverview;
