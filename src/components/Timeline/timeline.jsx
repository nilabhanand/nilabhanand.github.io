import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

import bitaccessLogo from "../../images/bitaccess.jpeg";
import eliaLogo from "../../images/elia.jpeg";
import axsourceLogo from "../../images/axsource.jpeg";
function Timeline() {
  return (
    <div>
      <h1>Where I've Worked</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="Sept 2021 - present"
          iconStyle={{ background: "#ff0266" }}
          dateClassName="vertical-timeline-element-date"
          icon={
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src={bitaccessLogo}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Intermediate Full Stack Developer
          </h4>
          <br />
          <h5 className="vertical-timeline-element-subtitle">
            <span className="company-name">@Bitaccess Inc</span> - Remote
          </h5>
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Worked on frontend and backend of company's core product - Bitcoin
            ATM which generates $1 million in transactional volume daily.
          </p>
          <br />
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Improved UI/UX design of the Bitcoin ATM kiosk software resulting in
            the increase of average transaction size by $180/transaction.
          </p>
          <br />
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Improved back-end inefficiencies by transitioning from REST to
            GraphQL APIs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          dateClassName="vertical-timeline-element-date"
          date="Sept 2020 - Sept 2021"
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          iconStyle={{ background: "#", color: "#fff" }}
          icon={
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src={eliaLogo}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Junior Full Stack Developer
          </h4>
          <br />
          <h5 className="vertical-timeline-element-subtitle">
            <span className="company-name">@Elia Payments</span> - Remote
          </h5>
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Led a team of 3 intern software engineers, managing schedules &
            meetings, leading sprint plannings, and conducting performance
            reviews.
          </p>
          <br />
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Conceptualized, road-mapped, and developed subscription management
            solution (recurring payments).
          </p>
          <br />
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Enhanced client integration experience by creating a customizable
            automated low-code payment integration - reducing integration time
            down to ~20 minutes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="May 2020 - Sept 2020"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src={axsourceLogo}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Junior Full Stack Developer
          </h4>
          <br />
          <h5 className="vertical-timeline-element-subtitle">
            <span className="company-name">@Axsource</span> - Toronto
          </h5>
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Responsible for API end-point design & ERP software integration with
            client enterprises.
          </p>
          <br />
          <p style={{ color: "#838DAA", fontSize: "13px" }}>
            Increased product reliability by performing UAT over 15 difference
            user scenarios, resulting in bug fixes and holistic understanding of
            user issues.
          </p>
          <br />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
