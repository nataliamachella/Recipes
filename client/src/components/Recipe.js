import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  createTheme,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Recipe = ({ title, image, ingredients }) => {
  const theme = createTheme();

  theme.spacing(2);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt="recipe-img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Recipe;
