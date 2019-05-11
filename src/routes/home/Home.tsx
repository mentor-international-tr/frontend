import React from "react";
import "./home.scss";
import { selectionCardData } from "./homeData/index";
import {
  itemsPerRow,
  cloneObjectWithKeyID,
} from "../../lib/helpers/index";
import SelectionCard from "../../components/SelectionCard/SelectionCard";
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <div>
      <section className="selection-cards">
        {itemsPerRow(
          selectionCardData.map(card => {
            return cloneObjectWithKeyID(card);
          }),
          2,
        ).map(row => {
          return (
            <div className="selection-cards__row">
              {row.map(card => {
                return (
                  <SelectionCard
                    className="selection-cards__row-item"
                    key={card.keyID}
                    description={card.description}
                    extraInfo={
                      card.extraInfo ? card.extraInfo : null
                    }
                    iconElement={
                      <i
                        className={card.iconClassName}
                        slot="icon"
                      />
                    }
                  />
                );
              })}
            </div>
          );
        })}

        {/* client, country manager, board member */}
      </section>
    </div>
  );
};

export default Home;
