import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./Keyindicators.css";

const initialData = [
  {
    id: 1,
    indicator: "Technologies",
    subItems: [
      { label: "a. Developed", atHost: "20", instituteByState: "02" },
      { label: "b. Demonstrated", atHost: "11", instituteByState: "01" },
      { label: "", atHost: "03", instituteByState: "" },
      {
        label: "c. Technology Transferred",
        atHost:
          "(Additionally, 07 Mobile apps developed and transferred to various ARS/AEs)",
        instituteByState: "03",
      },
      { label: "d. Commercialized", atHost: "03", instituteByState: "03" },
      { label: "", atHost: "36", instituteByState: "" },
    ],
  },
  {
    id: 2,
    indicator: "Patents applied and granted",
    subItems: [],
    atHost: "by the intervention of TEC out of 1170+ patents of the University",
    instituteByState: "07",
  },
  {
    id: 3,
    indicator: "Design Registration",
    subItems: [],
    atHost: "49\n(Enabled by the TEC)",
    instituteByState: "09",
  },
  {
    id: 4,
    indicator: "Industry consultancy/Funded projects facilitated",
    subItems: [],
    atHost: "28\n(From Shree Baidyanath Ayurveda Pvt. Ltd.)",
    instituteByState: "-",
  },
  {
    id: 5,
    indicator: "Network/ Collaborative Projects granted",
    subItems: [],
    atHost: "20",
    instituteByState: "-",
  },
  {
    id: 6,
    indicator: "Number of incubates (if incubator exists)",
    subItems: [],
    atHost: "56",
    instituteByState: "10",
  },
  {
    id: 7,
    indicator: "Start-ups created",
    subItems: [],
    atHost: "46",
    instituteByState: "5",
  },
  {
    id: 8,
    indicator:
      "Connect with local government bodies and Government/Non-Government Societies",
    subItems: [],
    atHost: "165+\n(Including 77 Govt. bodies & 88+ NGOs)",
    instituteByState: "-",
  },
  {
    id: 9,
    indicator:
      "Interaction with industries/institutions /local bodies for technology development",
    subItems: [],
    atHost:
      "90+\n(Including affiliated colleges, partner institutes, State depts, industries and other collaborators)",
    instituteByState: "10+",
  },
  {
    id: 10,
    indicator: "Training programs for industry",
    subItems: [],
    atHost:
      "26\n(Including 13 for NGOs/MSMEs/Industries + 13 Hands-on-Trainings for Research Capacity Building)",
    instituteByState: "-",
  },
  {
    id: 11,
    indicator: "Reports/White papers",
    subItems: [],
    atHost: "02",
    instituteByState: "-",
  },
  {
    id: 12,
    indicator: "No. of Industries/MSME Reached out",
    subItems: [],
    atHost: "60+",
    instituteByState: "-",
  },
  {
    id: 13,
    indicator: "No. of Industries/MSME problems addressed",
    subItems: [],
    atHost: "55+",
    instituteByState: "-",
  },
  {
    id: 14,
    indicator: "Revenue generated from the inception",
    subItems: [],
    atHost: "Rs. Approx. 6 Lacs",
    instituteByState: "",
  },
];

const Key_Indicator = () => {
  const [data, setData] = useState(initialData);

  const EditableCell = ({ value, className }) => {
    return (
      <span className={`editable ${className || ""}`} title="Click to edit">
        {value || <span className="empty-hint">—</span>}
      </span>
    );
  };

  return (
    <>
      <NavBar />
      <div className="key_main">
        <div className="key_heading">Key Indicators</div>
        <div className="subtitle">
          DST - TEC, Bundelkhand University, Jhansi Key Achievements
        </div>
        <div className="coordinator-info">
          Name of the TEC Coordinator: Prof. Mukesh Pandey/Dr. Lavkush Dwivedi
        </div>
        <div className="manpower-info">
          Details of the manpower under TEC: 04 (02 PPA + 01 SPA + 01 PA)
        </div>

        <div className="table-wrapper">
          <table className="ki-table">
            <thead>
              <tr>
                <th className="col-sno">S. No</th>
                <th className="col-indicator">Indicators</th>
                <th className="col-header" colSpan="2">
                  TEC
                </th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th className="col-achievements">Achievements</th>
                <th className="col-subheader"></th>
              </tr>
              <tr className="subheader-row">
                <th></th>
                <th></th>
                <th className="col-at-host">At Host Institute</th>
                <th className="col-institute">Institute funded in the state</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                if (row.subItems && row.subItems.length > 0) {
                  return (
                    <React.Fragment key={row.id}>
                      <tr className="row-parent">
                        <td
                          className="td-sno"
                          rowSpan={row.subItems.length + 1}
                        >
                          {row.id}
                        </td>
                        <td
                          className="td-indicator bold-indicator"
                          rowSpan={row.subItems.length + 1}
                        >
                          {row.indicator}
                        </td>
                        <td className="td-sublabel empty-cell"></td>
                        <td className="td-sublabel empty-cell"></td>
                      </tr>
                      {row.subItems.map((sub, si) => (
                        <tr key={si} className="row-sub">
                          <td className="td-sublabel-content">
                            <EditableCell
                              rowId={row.id}
                              subIdx={si}
                              field="label"
                              value={sub.label}
                            />
                          </td>
                          <td className="td-at-host">
                            <EditableCell
                              rowId={row.id}
                              subIdx={si}
                              field="atHost"
                              value={sub.atHost}
                              className="multiline-cell"
                            />
                          </td>
                          <td className="td-institute">
                            <EditableCell
                              rowId={row.id}
                              subIdx={si}
                              field="instituteByState"
                              value={sub.instituteByState}
                            />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                }
                return (
                  <tr key={row.id} className="row-normal">
                    <td className="td-sno">{row.id}</td>
                    <td className="td-indicator">
                      <EditableCell
                        rowId={row.id}
                        subIdx={null}
                        field="indicator"
                        value={row.indicator}
                      />
                    </td>
                    <td className="td-at-host">
                      <EditableCell
                        rowId={row.id}
                        subIdx={null}
                        field="atHost"
                        value={row.atHost}
                        className="multiline-cell"
                      />
                    </td>
                    <td className="td-institute">
                      <EditableCell
                        rowId={row.id}
                        subIdx={null}
                        field="instituteByState"
                        value={row.instituteByState}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="footer-info">
          <div className="budget-row">
            <span className="bullet">•</span> Total Lead Budget: 4,56,00,000.00
          </div>
          <div className="budget-row">
            <span className="bullet">•</span> Total Received Budget:
            97,72,000.00 + 50,00,000.00 = 1,47,72,000.00
          </div>
          <div className="budget-row">
            <span className="bullet">•</span> No. of Installments: 02
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Key_Indicator;
