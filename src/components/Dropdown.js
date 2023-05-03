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

export default function Dropdown(
  {
    // --- props ---
    bulbasaurFound, 
    charmanderFound, 
    squirtleFound, 
    restState, 
    setPokemonsFound, 
    setDropDownDisplay,
    setFoundIt
  }) 
  {
    const [checkBulbasaur, setCheckBulbasaur] = useState(false)
    const [checkCharmander, setCheckCharmander] = useState(false)
    const [checkSquirtle, setCheckSquirtle] = useState(false)

    useEffect(() => {
      if(checkBulbasaur && checkCharmander && checkSquirtle) {
        setPokemonsFound(true)
      }
    }, [checkBulbasaur, checkCharmander, checkSquirtle]);

    const clickBulbasaur = () => {
      if(bulbasaurFound){
        setCheckBulbasaur(true);
        setFoundIt('You found Bulbasaur!')
      } else setFoundIt('This is not Bulbasaur, keep trying it!')
      restState()
      setDropDownDisplay('none')
      
    }

    const clickCharmander = () => {
      if(charmanderFound) {
        setCheckCharmander(true)
        setFoundIt('You found Charmander!')
      } else setFoundIt('This is not Charmander, keep trying it!')
      restState()
      setDropDownDisplay('none')
    }

    const clickSquirtle = () => {
      if(squirtleFound){ 
        setCheckSquirtle(true)
        setFoundIt('You found Squirtle!')
      } else setFoundIt('This is not Squirtle, keep trying it!')
      restState()
      setDropDownDisplay('none')
      
    }


    return (
      <div id="dropdown">
          <StyledList>
              <li onClick={clickBulbasaur} className={checkBulbasaur ? 'found-it' : ''}>Bulbasaur🍃</li>
              <li onClick={clickCharmander} className={checkCharmander ? 'found-it' : ''}>Charmander🔥</li>
              <li onClick={clickSquirtle} className={checkSquirtle ? 'found-it' : ''}>Squirtle💧</li>
          </StyledList>
      </div>
    )
}
