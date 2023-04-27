import React, { useState } from 'react'
import styled from 'styled-components';

const StyledList = styled.ul`
  li{
    text-decoration: none;
  }

  li.found-it{
    text-decoration: line-through;
    color: var(--color-green);
    transition: all .2s;
  }
`

export default function Dropdown({bulbasaurFound, charmanderFound, squirtleFound, restState}) {
  const [checkBulbasur, setCheckBulbasur] = useState(false)
  const [checkCharmander, setCheckCharmander] = useState(false)
  const [checkSquirtle, setCheckSquirtle] = useState(false)


  const handleClick = () => {
    console.log(squirtleFound)
    if(bulbasaurFound) setCheckBulbasur(true)
    else if(charmanderFound) setCheckCharmander(true) 
    else if(squirtleFound) setCheckSquirtle(true) 
    restState()
  }

  return (
    <div id="dropdown">
        <StyledList>
            <li onClick={handleClick} className={checkBulbasur ? 'found-it' : ''}>Bulbasaur🍃</li>
            <li onClick={handleClick} className={checkCharmander ? 'found-it' : ''}>Charmander🔥</li>
            <li onClick={handleClick} className={checkSquirtle ? 'found-it' : ''}>Squirtle💧</li>
        </StyledList>
    </div>
  )
}
