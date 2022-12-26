import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "096eb4ac";
  const APP_KEY = "ffcbeb4c5a6e030da0958183e14da5f9";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    setRecipes(data.hits);
  };
  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  );
};

export default Home;
