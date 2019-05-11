import React, { useState } from "react";
import "./home.scss";
import { selectionCardData } from "./homeData/index";
import {
  itemsPerRow,
  cloneObjectWithKeyID,
} from "../../lib/helpers/index";
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
                  <mi-selection-card
                    key={card.keyID}
                    description={card.description}
                    extra-info={
                      card.extraInfo ? card.extraInfo : null
                    }
                  >
                    <i
                      className={card.iconClassName}
                      slot="icon"
                    />
                  </mi-selection-card>
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
