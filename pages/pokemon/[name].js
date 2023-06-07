import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GetName() {
  const [height, setHeight] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function findPokemon(nextRouter) {
      const getPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nextRouter.query.name}`
      );
      const pokeData = await getPokemon.json();
      console.log(pokeData);
      setHeight(pokeData.height);
    }
    findPokemon(router);
  }, [router]);

  return (
    <>
      <h1>{router.query.name}</h1>
      <h2>{height}</h2>
    </>
  );
}
