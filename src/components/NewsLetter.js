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
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default NewsLetter;