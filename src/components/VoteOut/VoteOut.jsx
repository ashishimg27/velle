import React from "react";
import { Link } from "react-router-dom";

function VoteOut() {
  return (
    <Link to={'/poll'}>
      <div className="py-1">
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}

export default VoteOut;
