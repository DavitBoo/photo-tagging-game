import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import ModalStart from './ModalStart';
import ModalEnd from './ModalEnd';


const StyledContainer = styled.div`
  display: ${props => props.displayModal};
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 6;

  // many of the styles here are applying to ModalStart.js

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
    /* background: var(--color-light-blue); */
    border: none;
    padding: 11px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    color: var(--color-dark-blue);
    background: linear-gradient(170deg, #B0ECE7 5%, var(--color-light-blue) 95%);
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


  // modal container 
  
  .modal-content{
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translate(-50%, 0);
    background-color: var(--color-dark-blue);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;

    @media (max-width: 746px){
      box-shadow: 0px 0px 9px 0px #fff;
    }

  }
`


export default function Modal({handleStartTimer, pokemonsFound, seconds}) {

  const[displayModal, setDisplayModal] = useState('block')

  const clickHandler = () => {
    setDisplayModal('none');
  }

  useEffect(() => {
    if(pokemonsFound) setDisplayModal('block');
  }, [pokemonsFound])
  

  return (
    <StyledContainer displayModal={displayModal} pokemonsFound={pokemonsFound}>
      <div className="overlay"></div>
      <div className="modal-content">        
       {pokemonsFound ?
        <ModalEnd seconds={seconds}/>:
        <ModalStart clickHandler={clickHandler} handleStartTimer={handleStartTimer}/>
      }
      </div>
    </StyledContainer>
  )
}
