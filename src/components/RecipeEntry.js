import { useState } from "react";

export default function RecipeEntry({ addRecipe }) {
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!name.trim() || !recipe.trim()) {
      setError("Both the name and recipe must be supplied");
    } else {
      addRecipe({ name, recipe });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Sushi Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
        Sushi Recipe
        <textarea
          rows="8"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
