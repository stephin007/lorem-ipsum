import React from "react";
import { Link } from "react-router-dom";
function Cover() {
  return (
    <div className="landing-section">
      <div className="container">
        <h3>copy more type less</h3>
        <Link to="/lorem">let's copy</Link>
      </div>
    </div>
  );
}

export default Cover;
