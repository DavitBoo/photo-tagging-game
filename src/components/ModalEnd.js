import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    p{
        margin: 2rem;
    }   
    form{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    input{
        &[type=text]{
            color: var(--color-light-blue);
            background-color: var(--color-dark-blue);
            border: 1px solid var(--color-light-blue);
            outline: none;
            padding: .7rem;
            text-align: center;
        }

        &[type=submit]{
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

    }   
    
    table{
        background-color: #fff;
        color: #000;
        border-radius: 3px;
        border-collapse: collapse;
    }

    thead{
        background: linear-gradient(170deg, #B0ECE7 5%, var(--color-light-blue) 95%);
        color: var(--color-dark-blue)
    }

    td, th {
        border-bottom: 1px solid var(--color-light-blue);
        padding: 0.7rem;
    }
    
`

export default function ModalEnd() {
  return (
    <StyledContainer>
        <h3>You found all characters!</h3>
        <h3>Submit your score!</h3>
        <p>Your time <span>00:00</span></p>
        <form action="">
            <input type="text" name="" id="" splaceholad="Enter your name"/>
            <input type="submit" value="Submit the score" />
        </form>
        <h3>Hight Score</h3>
        <table>
            <thead>
                <tr>
                <th>User Name</th>
                <th>Time (Score)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>David</td>
                <td>00:00:15</td>
                </tr>
                <tr>
                <td>Fila 2, Columna 1</td>
                <td>Fila 2, Columna 2</td>
                </tr>
                <tr>
                <td>Fila 3, Columna 1</td>
                <td>Fila 3, Columna 2</td>
                </tr>
                <tr>
                <td>Fila 4, Columna 1</td>
                <td>Fila 4, Columna 2</td>
                </tr>
                <tr>
                <td>Fila 5, Columna 1</td>
                <td>Fila 5, Columna 2</td>
                </tr>
            </tbody>
            </table>
    </StyledContainer>
  )
}
