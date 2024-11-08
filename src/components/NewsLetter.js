import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";

function NewsLetter() {
  return (
    <>
      <NavBar />
      <div className="staff-main">
        <div className="Staff-heading">News Letter</div>
      </div>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>News Letter 1</td>
            <td>April - June, 2023</td>
            <td>
              <a href="https://drive.google.com/file/d/1Q8PpghxbcbEppHguNVSXzacgZTUoQoJW/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>News Letter 2</td>
            <td>July - September, 2023</td>
            <td>
              <a href="https://drive.google.com/file/d/1-BEUAxnc72Xj6EOPGd9hMkK5HmS8pLpt/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>News Letter 3</td>
            <td>October - December, 2023</td>
            <td>
              <a href="https://drive.google.com/file/d/1QblRHPKC2yhZ2DRlh14nHtAtG_1A-tDv/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>News Letter 4</td>
            <td>January - March, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/1_UFBfZoMB1GadsDuFCBc_4WObtko9spI/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>News Letter 5</td>
            <td>April - June, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/14YLLH24-K8VOIXEh31b6xfYZOuTIzua7/view?usp=sharing">
                View
              </a>
            </td>
          </tr><tr>
            <td>4.</td>
            <td>News Letter 6</td>
            <td>July - September, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/14Yum2vx6y-dWWbIgoOIYZMkng1BD0ksj/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default NewsLetter;
