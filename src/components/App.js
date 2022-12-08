import { useEffect, useState } from "react";
import Nav from "./Nav";
import Recipe from "./Recipe";
import RecipeEntry from "./RecipeEntry";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { fetchRecipes, createRecipe } from "../services/recipeService";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchRecipes().then(setRecipes);
    }
  }, [user]);

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addRecipe({ name, recipe }) {
    createRecipe({ name, recipe }).then((recipe) => {
      setRecipe(recipe);
      setRecipes([recipe, ...recipes]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        My Sushi Recipes
        {user && (
          <button onClick={() => setWriting(true)}>New Sushi Recipe</button>
        )}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? "" : <Nav recipes={recipes} setRecipe={setRecipe} />}

      {!user ? (
        ""
      ) : writing ? (
        <RecipeEntry addRecipe={addRecipe} />
      ) : (
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}
