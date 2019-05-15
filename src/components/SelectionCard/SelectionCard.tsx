import React from "react";
import {
  SelectionCard as SelectionButtonWrapper,
  IconContainer,
} from "./SelectionCardStyles";
export interface SelectionCardProps {
  iconElement: React.ReactElement;
  description: string;
  extraInfo?: string;
  className?: string;
}

const SelectionCard: React.SFC<SelectionCardProps> = ({
  iconElement,
  description,
  extraInfo,
}) => {
  return (
    <SelectionButtonWrapper className="selection-card">
      <IconContainer className="selection-card__icon-container">
        {React.cloneElement(iconElement, {
          "data-testid": "main-icon",
        })}
      </IconContainer>
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
    </SelectionButtonWrapper>
  );
};

export default SelectionCard;
