import {BrowserRouter, Route, Redirect} from "react-router-dom";
import ColorsList from "./ColorsList";

function App({colors}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <ColorsList colors={colors}/>
        </Route>
        <Route exact path="/colors/:color">colorDetail</Route>
        <Route exact path="/colors/new">newColor</Route>
        <Redirect to="/colors" />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps ={
  colors : ["red", "green", "blue", "yellow",]
}

export default App;
