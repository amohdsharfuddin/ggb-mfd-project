import React from "react";
import { Link } from "react-router-dom";

const AlphabetsGrid = ({ alphabets }) => {
  return (
    <div className="alphabet-breadcrumbs-item">
      <h4 className="text-center">
        <Link to={`/alphabets/${alphabets}`} className="text-decoration-none">
          {alphabets.toUpperCase()}
        </Link>
      </h4>
    </div>   
  );
};

export default AlphabetsGrid;
