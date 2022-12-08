export default function Recipe({ recipe }) {
  return (
    <recipe>
      {!recipe ? (
        <p>No recipe selected!</p>
      ) : (
        <section>
          <h2>{recipe.name}</h2>
          <p className="date">{`Posted: ${recipe.date.toDate()}`}</p>
          <p className="body">{recipe.recipe}</p>
        </section>
      )}
    </recipe>
  )
}
