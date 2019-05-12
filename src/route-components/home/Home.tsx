import React from "react";
import "./home.scss";
import { selectionCardData } from "./data/index";
import {
  itemsPerRow,
  cloneObjectWithKeyID,
} from "../../lib/helpers/index";
import SelectionCard from "../../components/SelectionCard/SelectionCard";
export interface HomeProps {}
const Home: React.SFC<HomeProps> = () => {
  return (
    <>
      <section className="selection-cards">
        <h2 className="selection-cards__heading">
          Tell us who you are!
        </h2>
        <div className="selection-cards__group">
          {itemsPerRow(
            selectionCardData.map(card => {
              return cloneObjectWithKeyID(card);
            }),
            2,
          ).map(row => {
            return (
              <div
                key={row[0].keyID}
                className="selection-cards__row"
              >
                {row.map(card => {
                  return (
                    <SelectionCard
                      key={card.keyID}
                      description={card.description}
                      extraInfo={
                        card.extraInfo
                          ? card.extraInfo
                          : null
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
        </div>
      </section>
    </>
  );
};

export default Home;
