// Section.js
import React from 'react';
import './section.css';

function Section() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="main-title">First Container</h2>
        <div className="image-container">
          <div>
            <img src="image1.jpg" alt="Image 1" />
            <p>Title 1</p>
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
            <p>Title 2</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
            <p>Title 3</p>
          </div>
          <div>
            <img src="image4.jpg" alt="Image 4" />
            <p>Title 4</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="main-title">Second Container</h2>
        <div className="image-container">
          <div>
            <img src="image5.jpg" alt="Image 5" />
            <p>Title 5</p>
          </div>
          <div>
            <img src="image6.jpg" alt="Image 6" />
            <p>Title 6</p>
          </div>
          <div>
            <img src="image7.jpg" alt="Image 7" />
            <p>Title 7</p>
          </div>
          <div>
            <img src="image8.jpg" alt="Image 8" />
            <p>Title 8</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="main-title">Third Container</h2>
        <div className="image-container">
          <div>
            <img src="image9.jpg" alt="Image 9" />
            <p>Title 9</p>
          </div>
          <div className="image-container">
            <img src="image10.jpg" alt="Image 10" />
            <p>Title 10</p>
          </div>
          <div className="image-container">
            <img src="image11.jpg" alt="Image 11" />
            <p>Title 11</p>
          </div>
          <div className="image-container">
            <img src="image12.jpg" alt="Image 12" />
            <p>Title 12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
