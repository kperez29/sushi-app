export default function Recipe({ thisRecipe }) {
  return (
    <recipe>
      {!thisRecipe ? (
        <p>No recipe selected</p>
      ) : (
        <section>
          <h2>{thisRecipe.name}</h2>
          <p className="date">{`Posted: ${thisRecipe.date}`}</p>
          <p className="recipe">{thisRecipe.recipe}</p>
        </section>
      )}
    </recipe>
  );
}
