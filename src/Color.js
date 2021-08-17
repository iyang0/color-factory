import React from "react";
import { useParams, Link } from "react-router-dom"


function Color({ colors }) {
  const { color } = useParams();
  
  let hex = colors.find( c => c.name === color)["hex"];

  return (
    <div className="Color" style={{backgroundColor: hex}}>
      <h1>this is { color } </h1>
      <p>
        <Link to="/colors">Go Back.</Link>
      </p>
    </div>
  )
}

export default Color;