import "./starter-content.scss";
import React from "react";
import groupImage from "../../images/group.jpg";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
export interface StarterContentProps {}

const StarterContent: React.SFC<StarterContentProps> = () => {
  return (
    <main className="starter-content">
      <img
        src={groupImage}
        alt=""
        className="starter-content__img"
      />
      <div className="starter-cta-wrapper">
        <h2 className="starter-cta__text">
          Lets Get You Started!
        </h2>
        <PrimaryButton className="starter-cta__create-btn">
          Create Your First Group!
        </PrimaryButton>
      </div>
    </main>
  );
};

export default StarterContent;
