import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ColorsList from "./ColorsList";
import Color from "./Color";
import AddColorForm from "./AddColorForm";
import { useState } from "react";

function App({defaultColors}) {
  const [colors, setColors] = useState(defaultColors);

  function updateColors(color){
    setColors( colors => {
      let colorsCopy = [...colors];
      colorsCopy.push(color);
      return colorsCopy;
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorsList colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <AddColorForm addColor={updateColors}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps ={
  defaultColors : [
    { name: "red", hex: "red"}, 
    { name: "green", hex: "green"},
    { name: "blue", hex: "blue"}, 
    { name: "yellow", hex: "yellow"},
    { name: "navyblue", hex: "#3268a8"},
  ]
}

export default App;
