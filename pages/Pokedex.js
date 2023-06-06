export default function Pokedex({ pokeName }) {
  //   console.log({ pokeName });
  return (
    <>
      <h1>List of Pokemon</h1>
      {pokeName.map((poke, index) => {
        const pokemonName = pokeName[index]?.name;
        console.log(poke);
        return (
          <ul>
            <li>{pokemonName}</li>
          </ul>
        );
      })}
    </>
  );
}
export const getStaticProps = async () => {
  const getPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokeData = await getPokemon.json();
  return { props: { pokeName: pokeData.results } };
};
