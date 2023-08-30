import "./styles.css";
import NavBar from "../components/header";
import SearchBar from "../components/searchBar";
import Card from "../components/card";
import CardData from "../components/card/data";
import React, { useState } from "react";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(CardData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  const handleSearchClick = () => {
    const filtered = CardData.filter((title) =>
      title.titleOne.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
    console.log(filtered);
  };
  return (
    <div className="root">
      <NavBar />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        handleClick={handleSearchClick}
      />
      <div className="card-outerContainer">
        <div className="card-container">
          {filteredCards.map((card) => {
            return (
              <Card
                key={card.titleOne}
                image={card.image}
                titleOne={card.titleOne}
                titleTwo={card.titleTwo}
                titleThree={card.titleThree}
                type={card.type}
                disc={card.disc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
