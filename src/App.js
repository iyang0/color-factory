import {BrowserRouter, Route, Redirect} from "react-router-dom";
import ColorsList from "./ColorsList";
import Color from "./Color";
import AddColorForm from "./AddColorForm";

function App({colors}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <ColorsList colors={colors} />
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <AddColorForm />
        </Route>
        <Redirect to="/colors" />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps ={
  colors : [
    { name: "red", hex: "red"}, 
    { name: "green", hex: "green"},
    { name: "blue", hex: "blue"}, 
    { name: "yellow", hex: "yellow"},
    { name: "navyblue", hex: "#3268a8"},
  ]
}

export default App;
