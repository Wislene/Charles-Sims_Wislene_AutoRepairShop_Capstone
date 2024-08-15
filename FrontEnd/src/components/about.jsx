// src/components/About.jsx

import React from 'react';

const About = ({ aboutText }) => {
  console.log("abouttext", aboutText);
  return (
    <div id="about" className="about-section py-8">
      {/* <h2 className="text-center text-3xl font-bold">{aboutText.title}</h2>
      <div className="max-w-md mx-auto mt-8 text-center">
        <p>{aboutText.description1}</p> */}
        {/* <p>{aboutText.description2}</p>
      </div> */}
    </div>
  );
};

export default About;

