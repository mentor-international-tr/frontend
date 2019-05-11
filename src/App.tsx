import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  CreateGroup,
} from "./route-components/index";

//How CRA uses environment variables
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/create-group"
        component={CreateGroup}
      />
    </div>
  );
};

export default App;
