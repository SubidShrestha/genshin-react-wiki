import React, { useEffect, useState }  from 'react'
import './css/Characters.css'

export default function Characters() {

    const [Characters, setCharacters] = useState([])

    const character = (
        async() => {
            let response = await fetch('https://api.genshin.dev/characters')
            setCharacters(await response.json())
        }
    )

    useEffect(
        () => {
            character()
        }, []
    )

  return (
    <>
        <div className='flex-container'>
            <ul className='character-list'>
            {
                Characters.map(
                    character => (
                        <li key={character} className='character-item' > { character } </li>
                    )
                )
            }
            </ul>
        </div>
    </>
  )
}
