import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import axios from "axios";
import { Grid } from "@mui/material";
import SearchAppBar from "./components/Navbar";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes`);
    console.log(response.data);
    setRecipes(response.data);
  };

  return (
    <div>
      <SearchAppBar />

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
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
