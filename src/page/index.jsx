import "./styles.css";
import NavBar from "../components/header";
import SearchBar from "../components/searchBar";
import Card from "../components/card";
import Data from "../data";
import React, { useState } from "react";
const Home = () => {
  return (
    <div className="root">
      <NavBar />
      <SearchBar type="search" placeholder="search" />
      <div className="card-outerContainer">
        <div className="card-container">
          {Data.map((item, index) => {
            return (
              <Card
                key={item.title}
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
