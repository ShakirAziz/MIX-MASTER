import "./styles.css";
import SearchBar from "../../components/searchBar";
import Card from "../../components/card";
import CardData from "../../components/card/data";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(CardData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchClick = () => {
    const filtered = CardData.filter((title) =>
      title.titleOne.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCards(CardData);
    }
  }, [searchTerm]);
  return (
    <div className="root">
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
