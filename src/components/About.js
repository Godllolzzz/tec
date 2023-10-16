import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
const About = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>About Us</h1>
        <p>
          but still need the element to resemble a link, use a button and change
          it with appropriate styles. Learn more:
          https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
          jsx-a11y/anchor-is-valid Line 30:11: The href attribute requires a
          valid value to be accessible. Provide a valid, navigable address as
          the href value. If you cannot provide a valid href, but still need the
          element to resemble a link, use a button and change it with
          appropriate styles. Learn more:
          https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
          jsx-a11y/anchor-is-valid Line 32:11: The href attribute requires a
          valid value to be accessible. Provide a valid, navigable address as
          the href value. If you cannot provide a valid href, but still need the
          element to resemble a link, use a button and change it with
          appropriate styles. Learn more:
          https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
          jsx-a11y/anchor-is-valid src\components\message.js Line 16:15: img
          elements must have an alt prop, either with meaningful text, or an
          empty string for decorative images jsx-a11y/alt-text webpack compiled
          with 1 warning
        </p>
      </div>
      <Footer />
    </>
  );
};
export default About;
