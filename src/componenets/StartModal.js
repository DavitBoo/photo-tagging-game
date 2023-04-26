import React from 'react'
import styled from 'styled-components';
import Bulbasaur from '../images/bulbasaur.png'
import Charmander from '../images/charmander.png'
import Squirtle from '../images/squirtle.png'

const StyledContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;

  h1{
    border-bottom: 2px solid #FDE74C;
    padding-bottom: 1rem;
  }

  ul{
    display: flex;
    justify-content: space-evenly;
  }

  img{
    max-width: 100px;
  }

  button{
    background: #9DBEBB;
    border: none;
    padding: 11px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    color: #031926;
    &:hover{
      box-shadow: 0px 1px 2px #fff;
    }
  }

  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0004;
  }

  .modal-content{
    position: fixed;
    left: 50%;
    top: 25%;
    transform: translate(-50%, 0);
    background-color: #031926;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;

  }
`


export default function StartModal() {
  return (
    <StyledContainer>
      <div className="overlay"></div>
      <div className="modal-content">
        <h1>Gotta catch'em all!</h1>
        <p>Tag these pokemon as fast as you can!</p>
        <p>Scroll through the image to find the correct ones.</p>
        <p>Click the character and choose the correct name. You will be timed and your score will be recorded, so move fast!</p>
        <ul>
          <li><img src={Bulbasaur} alt="" /> <p>Bulbasaur</p></li>
          <li><img src={Charmander} alt="" /> <p>Charmander</p></li>
          <li><img src={Squirtle} alt="" /> <p>Squirtle</p></li>
        </ul>
        <button>Start Game</button>
      </div>
    </StyledContainer>
  )
}
