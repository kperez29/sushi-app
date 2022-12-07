export default function Nav({ recipes, setRecipe }) {
  return (
    <nav>
      {!recipes
        ? "No articles"
        : recipes.map((a) => (
            <p key={a.id} onClick={() => setRecipe(a)}>
              {a.name}
            </p>
          ))}
    </nav>
  );
}
