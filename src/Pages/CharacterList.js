import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import './css/Characters.css'

export default function CharacterList() {

    const [Characters, setCharacters] = useState([])

    const character = (
        async() => {
            let response = await fetch('https://api.genshin.dev/characters')
            let data = await response.json()
            setCharacters(data)
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
            {
                Characters.map(
                    data => (
                        <div className='character-item' key={data} >
                            <Link to={`/characters/${data}`}>
                                { data } 
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    </>
  )
}
