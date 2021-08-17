import {Link} from "react-router-dom";

/*
takes in an array of colors and display them as links.

props: colors - ["red", "green", "blue", "yellow", ...]
*/ 
function ColorsList({colors}){

  return (
    <div className="ColorsList">
      <header className="ColorsList-header">
        <h2>Welcome to the color factory.</h2>
        <h1><Link>Add a color</Link></h1>
      </header>

      <ul>
      {colors.map( color => (
          <li key={color.name}> 
            <Link to={`/colors/${color.name}`}> {color.name} </Link> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorsList