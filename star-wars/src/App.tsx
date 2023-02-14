import { useEffect, useState } from 'react'

import { CharacterCard } from './components/CharacterCard'
import { Logo } from './components/Logo'
import { api } from './lib/axios'

import { MagnifyingGlass, CaretLeft, CaretRight } from 'phosphor-react'

type StarWarsApi = {
  count: number,
	next: string,
	previous: string,
  results: {
    name: string,
    url: string,
  }[],
}

export function App() {
  const [starWarsApi, setStarWarsApi] = useState<StarWarsApi>()

  useEffect(() => {
    api.get("/people").then(response => {
      setStarWarsApi(response.data)
    })
  }, [])

  function nextCharacterPage(page: string) {
    api.get(page).then(response => {
      setStarWarsApi(response.data)
    })
  }

  function previousCharacterPage(page: string) {
    api.get(page).then(response => {
      setStarWarsApi(response.data)
    })
  }

  return (
    <main className="flex flex-col gap-8 items-center">
      <Logo />
      <div className="flex items-center w-[400px] bg-zinc-900 rounded pl-2">
        <MagnifyingGlass size={24} className="text-star-wars"/>
        <input type="text" placeholder="Buscar personagem" className="w-full py-3 pl-2 bg-transparent rounded placeholder-zinc-400"/>
      </div>
      <div className="flex flex-wrap gap-2 w-[912px]">
        {
          starWarsApi?.results.map((character, index) => {
            let imageId = character.url.split('/')[5]
            return (
              <CharacterCard key={index} name={character.name} image={`https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`} />
            )
          })
        }
      </div>
      <div className="flex gap-8 text-star-wars">
        {
          starWarsApi?.previous ? <CaretLeft size={24} className="hover:cursor-pointer" onClick={() => previousCharacterPage(starWarsApi.previous)}/> : ""
        }
        {
          starWarsApi?.next ? <CaretRight size={24} className="hover:cursor-pointer" onClick={() => nextCharacterPage(starWarsApi?.next)}/> : ""
        }
      </div>
    </main>
  )
}
