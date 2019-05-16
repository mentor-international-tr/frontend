import "./people-section.scss";
import React from "react";
import SearchBox from "components/SearchBox/SearchBox";
import MITable from "components/MITable/MITable";

export interface PeopleSectionProps {}

const PeopleSection: React.SFC<PeopleSectionProps> = () => {
  return (
    <section className="people-section">
      <SearchBox
        searchText={""}
        setSearchText={() => {}}
        placeholderWhileMicOn={
          "Tell me who you want to find."
        }
        placeholder={"Search for people"}
      />

      <MITable
        className="people-joined-table"
        tableHeaders={["Name", "Date Joined"]}
        tableBody={[
          {
            id: "1",
            name: "John",
            "date-joined": "January 25th",
            age: 53,
          },
          {
            id: "2",
            name: "Johnathan",
            "date-joined": "January 25th",
            age: 22,
          },
        ]}
        includeOnly={["name", "date-joined"]}
      />
    </section>
  );
};

export default PeopleSection;
