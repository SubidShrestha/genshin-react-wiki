import React, { useEffect, useState }  from 'react'
import './css/Weapons.css'

export default function WeaponList() {

    const [Weapons, setWeapons] = useState([])

    const weapon = (
        async() => {
            let response = await fetch('https://api.genshin.dev/weapons')
            setWeapons(await response.json())
        }
    )

    useEffect(
        () => {
            weapon()
        }, []
    )

  return (
    <>
        <div className='flex-container'>
            <ul className='weapon-list'>
            {
                Weapons.map(
                    weapon => (
                        <li key={weapon} className='weapon-item' > { weapon } </li>
                    )
                )
            }
            </ul>
        </div>
    </>
  )
}
