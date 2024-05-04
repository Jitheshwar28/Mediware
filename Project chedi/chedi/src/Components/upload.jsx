import React from 'react';
import axios from 'axios';


class ImageCapture extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
  }

  handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do something with the file
  }

  handleCameraCapture = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Access granted, do something with the camera stream
        console.log("Camera access granted, you can now capture images.");

        // For simplicity, I'm not doing anything with the stream here
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }

  render() {
    return (
      <div style={{ display: 'flex',width:'50%', height:'47vh',margin:'auto',marginTop:'300px' }} className='container'>
        <div><h1 >Mediware</h1></div>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }} onClick={() => this.fileInputRef.current.click()}>
            <input type="file" style={{ display: 'none' }} onChange={this.handleFileInputChange} ref={this.fileInputRef} accept="image/*" />
            <p>Click to select a file</p>
          </div>
        </div>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }} onClick={this.handleCameraCapture}>
            <p>Click to capture image</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCapture;

