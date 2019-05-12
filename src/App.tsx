import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  CreateGroup,
  JoinOrganization,
} from "./route-components/index";
import { GlobalContext } from "./context/GlobalContext";
//How CRA uses environment variables
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalContext.Provider value={{}}>
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
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
