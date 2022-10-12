import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Characters() {
    const {character} = useParams()
    const [Data,setData] = useState([])

    useEffect(
        () => {
            const getCharacter = async() =>{
                const response = await fetch(`https://api.genshin.dev/characters/${character}`)
                setData(await response.json())
            }
            getCharacter()
        }
    )

    const gachaurl = `https://api.genshin.dev/characters/${character}/gacha-splash`

  return (
    <>
        <p>
            <img src={gachaurl} alt="" />
        </p>
        <p>{Data.name}</p>
        <p>{Data.title}</p>
        <p>{Data.vision}</p>
        <p>{Data.weapon}</p>
        <p>{Data.nation}</p>
        <p>{Data.affiliation}</p>
        <p>{Data.rarity}</p>
        <p>{Data.constellation}</p>
        <p>{Data.birthday}</p>
        <p>{Data.description}</p>
    </>
  )
}
