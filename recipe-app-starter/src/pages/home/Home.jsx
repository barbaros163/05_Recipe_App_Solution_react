import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "096eb4ac";
  const APP_KEY = "ffcbeb4c5a6e030da0958183e14da5f9";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the Form");
    }
  };
  console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};
export default Home;
