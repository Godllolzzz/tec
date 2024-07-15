import React, { useState, useEffect, useRef } from "react";
import "./grid.css";

const GridComponent = () => {
  const [figures, setFigures] = useState({
    facultyTrained: 0,
    undergradTrained: 0,
    postgradTrained: 0,
    projectsDone: 0,
    patents: 0,
    MOUs: 0,
  });

  const targetNumbers = {
    facultyTrained: 180,
    undergradTrained: 300,
    postgradTrained: 330,
    projectsDone: 90,
    patents: 30,
    MOUs: 120,
  };

  const targetRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalRef.current = setInterval(() => {
              let isUpdated = false;
              const updatedFigures = { ...figures };

              for (const key in targetNumbers) {
                const target = targetNumbers[key];
                let current = updatedFigures[key];
                const increment = Math.ceil(target / 100);

                if (current < target) {
                  current += increment;
                  current = Math.min(current, target);
                  updatedFigures[key] = current;
                  isUpdated = true;
                }
              }

              if (isUpdated) {
                setFigures(updatedFigures);
              } else {
                clearInterval(intervalRef.current);
              }
            }, 10); // Update the numbers every 100 milliseconds
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Trigger the animation when 20% visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [figures, targetNumbers]);

  return (
    <>
      <div></div>
      <div className="outer-container">
        <div className="grid-main-heading">Manpower Trained</div>
        <div className="data-box" ref={targetRef}>
          <div className="data">
            <div className="figure">{figures.facultyTrained}+</div>
            <div className="topic">Faculty Trained</div>
          </div>
          <div className="data">
            <div className="figure">{figures.undergradTrained}+</div>
            <div className="topic">Undergraduate Trained</div>
          </div>
          <div className="data">
            <div className="figure">{figures.postgradTrained}+</div>
            <div className="topic">Postgraduate Trained</div>
          </div>
        </div>
        <div className="grid-main-heading">
          Project, Patents and Collaborative work
        </div>
        <div className="data-box">
          <div className="data">
            <div className="figure">{figures.projectsDone}+</div>
            <div className="topic">Projects Done</div>
          </div>
          <div className="data">
            <div className="figure">{figures.patents}+</div>
            <div className="topic">Patents</div>
          </div>
          <div className="data">
            <div className="figure">{figures.MOUs}+</div>
            <div className="topic">MOUs</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridComponent;
