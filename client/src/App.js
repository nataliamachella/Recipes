import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import axios from "axios";
import { Grid } from "@mui/material";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("");

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes`);
    console.log(response.data);
    setRecipes(response.data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const searchRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes/${query}`);
    console.log(response.data);
    setRecipes(response.data);
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const AppName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  const Header = styled.div`
    background-color: purple;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
  `;

  return (
    <div>
      <Header>
        <AppName>Recipes Finder</AppName>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          onSubmit={searchRecipes}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={changeHandler}
            type="text"
            value={query}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Header>
      {/* 
      <form onSubmit={searchRecipes}>
        <input type="text" value={query} onChange={changeHandler} />
        <button type="submit">Search</button>
      </form> */}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding="50px 80px"
      >
        {recipes.map((recipe, i) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={i}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Recipe
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
