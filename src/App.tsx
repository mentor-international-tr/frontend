import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  CreateGroup,
  JoinOrganization,
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
      <Route
        exact
        path="/join-organization"
        component={JoinOrganization}
      />
    </div>
  );
};

export default App;
