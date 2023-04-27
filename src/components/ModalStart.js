import React from 'react'

import Bulbasaur from '../images/bulbasaur.png'
import Charmander from '../images/charmander.png'
import Squirtle from '../images/squirtle.png'

export default function ModalStart(props) {
  return (
    <div>
        <h1>Gotta catch'em all!</h1>
        <p>Tag these pokemon as fast as you can!</p>
        <p>Scroll through the image to find the correct ones.</p>
        <p>Click the character and choose the correct name. You will be timed and your score will be recorded, so move fast!</p>
        <ul>
          <li><img src={Bulbasaur} alt="" /> <p>Bulbasaur</p></li>
          <li><img src={Charmander} alt="" /> <p>Charmander</p></li>
          <li><img src={Squirtle} alt="" /> <p>Squirtle</p></li>
        </ul>
        <button onClick={props.clickHandler}>Start Game</button>
    </div>
  )
}
