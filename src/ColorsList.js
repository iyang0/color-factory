import {Link} from "react-router-dom";
/*
takes in an array of colors and display them as links.

props: colors - ["red", "green", "blue", "yellow", ...]
*/ 
function ColorsList({colors}){

  return (
    <ul>
    {colors.map( color => (
        <li key={color}> <Link to={`/colors/${color}`}> {color} </Link> </li>
      ))}
    </ul>
  )
}

export default ColorsList