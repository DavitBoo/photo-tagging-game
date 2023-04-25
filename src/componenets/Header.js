import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`

    div{
      display: flex;
      justify-content: space-between;
      padding: .5rem 2rem;
    }
`

export default function Header() {
  return (
    <StyledHeader id="header">
        <div>
            <h1>Where are the starters? 🍃🔥💧</h1>
            <h2>timer</h2>
        </div>
    </StyledHeader>
  )
}
