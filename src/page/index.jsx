import "./styles.css";
import NavBar from "../components/header";
import SearchBar from "../components/searchBar";
import Card from "../components/card";
import CardData from "../components/card/data";
import React, { useState } from "react";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCard = CardData.filter((item) =>
    item.titleOne.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="root">
      <NavBar />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="card-outerContainer">
        <div className="card-container">
          {filteredCard.map((item, index) => {
            return (
              <Card
                key={item.titleOne}
                image={item.image}
                titleOne={item.titleOne}
                titleTwo={item.titleTwo}
                titleThree={item.titleThree}
                type={item.type}
                disc={item.disc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
