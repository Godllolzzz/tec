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
            <td>5.</td>
            <td>News Letter 5</td>
            <td>April - June, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/14YLLH24-K8VOIXEh31b6xfYZOuTIzua7/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>News Letter 6</td>
            <td>July - September, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/14Yum2vx6y-dWWbIgoOIYZMkng1BD0ksj/view?usp=sharing">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>News Letter 7</td>
            <td>October - December, 2024</td>
            <td>
              <a href="https://drive.google.com/file/d/1PEA5zgpQ-157PWvKWf5JaXf4WVOFW_zv/view?usp=sharing">
                View
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td>8.</td>
            <td>News Letter 8</td>
            <td>January - March, 2025</td>
            <td>
              <a href="https://drive.google.com/file/d/1BhooQwND-TsdIJmVjncQYsXJjsFQYEBS/view?usp=sharing">
                View
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td>9.</td>
            <td>News Letter 9</td>
            <td>April - June, 2025</td>
            <td>
              <a href="https://drive.google.com/file/d/1Zdm1lVJEZWUA7DrqIXRKlyjD2wt1pnF1/view?usp=sharing">
                View
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td>10.</td>
            <td>News Letter 10</td>
            <td>July - September, 2025</td>
            <td>
              <a href="https://drive.google.com/file/d/1ANaWCZ6AW3WBlAw4b03_3qRvMid3kQnw/view?usp=sharing">
                View
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td>11.</td>
            <td>News Letter 11</td>
            <td>October - December, 2025</td>
            <td>
              <a href="https://drive.google.com/file/d/1hQ7zJtjTuxwIVTOqBdRYYMoSmVaIjs8v/view?usp=sharing">
                View
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td>12.</td>
            <td>News Letter 12</td>
            <td>January - March, 2026</td>
            <td>
              <a href="https://drive.google.com/file/d/1U1_qotNgr7XxfvTW1UupvU2g1hiyPQAc/view?usp=sharing">
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
