import React, { useState } from "react";
import profileIcon from "../assets/profile-icon.png";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage ? (
        <div>
          <img
            className="App--img"
            alt="not fount"
            src={URL.createObjectURL(selectedImage)}
            onClick={() => setSelectedImage(null)}
          />
          {/* <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button> */}
        </div>
      ) : (
        <div>
          <img className="App--img" src={profileIcon} />
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadAndDisplayImage;
