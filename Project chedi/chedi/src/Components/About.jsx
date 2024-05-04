import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>About Us</h2>
        <p>To develop image processing software utilizing machine learning techniques to identify medicinal plants, thereby bolstering authenticity and ensuring integrity in the medicinal plant supply chain. The rampant adulteration and misidentification of medicinal plants pose significant challenges to both consumers and stakeholders in the herbal medicine industry. By harnessing the power of machine learning, this software will enable rapid and accurate identification of medicinal plants from images, facilitating quality control and traceability throughout the supply chain. The implementation of such technology promises to revolutionize medicinal plant management, enhancing transparency, reliability, and sustainability in the industry.
</p>
      </div>
      <div className="imagee">
        <img className='imagein' src="https://images.unsplash.com/photo-1469316968103-3db8c77142d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTIzOTAyOXx8ZW58MHx8fHx8&w=1000&q=80" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
