export default function getRandomPokemon({ pokeName }) {
  return (
    <>
      <h1>Random Pokemon</h1>
      <ul>
        <li>{pokeName}</li>
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const getPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokeData = await getPokemon.json();
  const resultsArr = pokeData.results;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomPokemon = getRandomInt(resultsArr.length);
  const pokemonName = resultsArr[randomPokemon]?.name;
  console.log(randomPokemon);
  return { props: { pokeName: pokemonName } };
};
