import "./join-organization.scss";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SearchBox from "../../components/SearchBox/SearchBox";

export interface JoinOrganizationProps {}

const JoinOrganization: React.SFC<JoinOrganizationProps> = () => {
  const [searchText, setSearchText] = useState("");
  const searchOrganizations = () => {
    console.log(searchText);
  };
  const activateMicrophone = () => {
    console.log("microhpone");
  };
  return (
    <Card className="join-org-card">
      <CardContent>
        <h2>What's the name of your organization?</h2>
        <SearchBox
          setSearchText={setSearchText}
          searchHandler={searchOrganizations}
          microphoneHandler={activateMicrophone}
        />
      </CardContent>
    </Card>
  );
};

export default JoinOrganization;
