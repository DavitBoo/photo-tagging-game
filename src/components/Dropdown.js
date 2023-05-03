import React, { useEffect, useState } from 'react'
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

export default function Dropdown({bulbasaurFound, charmanderFound, squirtleFound, restState, setPokemonsFound, setDropDownDisplay}) {
  const [checkBulbasur, setCheckBulbasur] = useState(false)
  const [checkCharmander, setCheckCharmander] = useState(false)
  const [checkSquirtle, setCheckSquirtle] = useState(false)

  useEffect(() => {
    if(checkBulbasur && checkCharmander && checkSquirtle) {
      setPokemonsFound(true)
    }
  }, [checkBulbasur, checkCharmander, checkSquirtle]);

  const clickBulbasaur = () => {
    if(bulbasaurFound) setCheckBulbasur(true);
    restState()
    setDropDownDisplay('none')
    
  }

  const clickCharmander = () => {
    if(charmanderFound) setCheckCharmander(true)
    restState()
    setDropDownDisplay('none')
  }

  const clickSquirtle = () => {
    if(squirtleFound) setCheckSquirtle(true)
    restState()
    setDropDownDisplay('none')
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
