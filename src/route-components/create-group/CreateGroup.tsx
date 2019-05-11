import "./create-group.scss";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
export interface CreateGroupProps {}

const CreateGroup: React.SFC<CreateGroupProps> = () => {
  //TODO - createGroup function that searches the DB if a group with that name exists
  // otherwise send an error
  const [groupName, setGroupName] = useState("");
  return (
    <Card className="group-card">
      <CardContent className="card-content">
        <header>
          <h2 className="card-content__heading">
            Create a Group
          </h2>
          <p>
            Once you create a group, you can invite members,
            send annoncements, and start conversations.
          </p>
        </header>
        <Divider />
        <form className="create-group-form">
          <TextField
            id="standard-name"
            label="Group Name"
            className="create-group__text-field"
            value={groupName}
            onChange={e => setGroupName(e.target.value)}
            margin="normal"
          />
          <footer className="create-group__action-buttons">
            <PrimaryButton type="submit">
              Create
            </PrimaryButton>
          </footer>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateGroup;
