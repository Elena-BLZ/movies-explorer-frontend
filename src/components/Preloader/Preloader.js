import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ isVisible }) => {
  useEffect(() => {
    console.log("isVisible", isVisible);
  }, []);

  return (
    <div className="preloader">
      {isVisible && (
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      )}
    </div>
  );
};

export default Preloader;
