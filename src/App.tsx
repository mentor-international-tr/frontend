import React from "react";
import { Route } from "react-router-dom";
import Home from "./routes/home/Home";

//How CRA uses environment variables
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
