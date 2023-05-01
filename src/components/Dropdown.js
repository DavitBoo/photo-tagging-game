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

  const clickBulbasaur = () => {
    if(bulbasaurFound) setCheckBulbasur(true)
      restState()
  }

  const clickCharmander = () => {
    if(charmanderFound) setCheckCharmander(true)
      restState()
  }

  const clickSquirtle = () => {
    if(squirtleFound) setCheckSquirtle(true)
      restState()
  }

  return (
    <div id="dropdown">
        <StyledList>
            <li onClick={clickBulbasaur} className={checkBulbasur ? 'found-it' : ''}>Bulbasaur🍃</li>
            <li onClick={clickCharmander} className={checkCharmander ? 'found-it' : ''}>Charmander🔥</li>
            <li onClick={clickSquirtle} className={checkSquirtle ? 'found-it' : ''}>Squirtle💧</li>
        </StyledList>
    </div>
  )
}
