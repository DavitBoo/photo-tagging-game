
import styled from 'styled-components';

const StyledHeader = styled.div`

    div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: .5rem 2rem;
    }
`

export default function Header() {
  return (
    <StyledHeader id="header">
        <div>
            <h1>Where are the starters? 🍃🔥💧</h1>
            <h2>timer: 00:00:00</h2>
        </div>
    </StyledHeader>
  )
}
