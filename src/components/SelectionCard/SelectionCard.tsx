import React from "react";
import "./selection-card.scss";
export interface SelectionCardProps {
  iconElement: React.ReactElement;
  description: string;
  extraInfo: string;
  className?: string;
}

const SelectionCard: React.SFC<SelectionCardProps> = ({
  iconElement,
  description,
  extraInfo,
}) => {
  return (
    <div className="selection-card">
      <div className="selection-card__icon-container">
        {React.cloneElement(iconElement)}
      </div>
      {description ? (
        <h2 className="selection-card__description">
          {description}
        </h2>
      ) : null}
      {extraInfo ? (
        <p className="selection-card__extra-info">
          {extraInfo}
        </p>
      ) : null}
    </div>
  );
};

export default SelectionCard;
