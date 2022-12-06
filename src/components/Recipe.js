export default function Recipe({ Recipes }) {
  return (
    <Recipes>
      {!Recipes ? (
        <p>No recipe selected</p>
      ) : (
        <section>
          <h2>{Recipes.name}</h2>
          <p className="date">{`Posted: ${Recipes.date}`}</p>
          <p className="recipe">{Recipes.recipe}</p>
        </section>
      )}
    </Recipes>
  );
}
