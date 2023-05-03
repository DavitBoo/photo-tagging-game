import React, { useState } from 'react'
import { useEffect } from 'react';
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

export default function PopupFound({foundIt, setFoundIt}) {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if(foundIt){
           setDisplay(true)
        }
        // Establecer el temporizador
        const timer = setTimeout(() => {
            // Ocultar el componente después de 3 segundos
            setFoundIt('')
            setDisplay(false);
        }, 3000);

        // Limpiar el temporizador en caso de que el componente se desmonte o se vuelva a renderizar
        return () => clearTimeout(timer);
    }, [foundIt])
    

  return (
    <StyledContainer>
        {display && <>
            <p>{foundIt}</p>
        </>}
    </StyledContainer>
  )
}
