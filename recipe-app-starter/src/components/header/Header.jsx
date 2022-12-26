import React from "react";
import "./Header.style";
import {
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";

const Header = ({ setQuery }) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
