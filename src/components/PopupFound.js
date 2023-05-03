import React, { useState } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`

    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);

    p{
        background-color: var(--color-dark-blue);
        color: #fff;
        padding: 1rem;
        border-radius: 10px;
        font-weight: 700;
    }
`

export default function PopupFound() {

    const [display, setDisplay] = useState(false)


  return (
    <StyledContainer>
        {display && <>
            <p>You found Bulbasaur!</p>
        </>}
    </StyledContainer>
  )
}
