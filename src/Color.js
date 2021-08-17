import React from "react";
import { useParams, Link, Redirect } from "react-router-dom"


function Color({ colors }) {
  const { color } = useParams();
  
  let colorObj = colors.find( c => c.name === color);
  let hex = colorObj?.hex;
  // let hex = colorObj && colorObj.hex;
  if(!hex) return <Redirect to="/colors" />;

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