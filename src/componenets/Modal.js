import React, { useState } from 'react'
import styled from 'styled-components';

import OpeningAudio from '../audio/1-01.Opening.mp3';
import ModalStart from './ModalStart';
import ModalEnd from './ModalEnd';



const StyledContainer = styled.div`
  display: ${props => props.displayModal};
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
    background: var(--color-light-blue);
    border: none;
    padding: 11px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    color: var(--color-dark-blue);
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
    background-color: var(--color-dark-blue);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;

  }
`


export default function StartModal() {

  const[displayModal, setDisplayModal] = useState('block')
  const [isPlaying, setIsPlaying] = useState(true);

  const clickHandler = () => {
    setIsPlaying(false);
    setDisplayModal('none');
  }

  return (
    <StyledContainer displayModal={displayModal}>
     {/* {isPlaying && <audio src={OpeningAudio} autoPlay loop type="audio/mp3"/>} */}
      <div className="overlay"></div>
      <div className="modal-content">
        <ModalStart clickHandler={clickHandler}/>
        {/* <ModalEnd/> */}
      </div>
    </StyledContainer>
  )
}