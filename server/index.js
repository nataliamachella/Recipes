import express from "express";
import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/recipes/:query", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=dairy-free&health=gluten-free&health=keto-friendly&health=low-sugar&health=soy-free&field=image&field=ingredientLines&field=ingredients&field=cuisineType&field=tags
    `
  );
  console.log(response.data.hits);
  res.json(response.data.hits);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
