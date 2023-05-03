import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { addScore, getScores } from '../firebase';


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
        color: var(--color-dark-blue);
    }

    td, th {
        border-bottom: 1px solid var(--color-light-blue);
        padding: 0.7rem;
    }

    .table-content{
        height: ${props => props.tableHeight};
        overflow-y: auto;
        width: 100%;
    }
    
`

export default function ModalEnd({seconds}) {
    
    const [score, setScore] = useState(null);
    const [playerName, setPlayerName] = useState('');
    const [scoreSubmited, setScoreSubmited] = useState(false)
    const [tableHeight, setTableHeight] = useState('150px')

    useEffect(() => {
        async function fetchScore() {
          try {
            const scoreData = await getScores();
            console.log(scoreData)
            setScore(scoreData);
          } catch (error) {
            console.error(error);
          }
        }
        fetchScore();
      }, [scoreSubmited]);


      // to short the elements by score (less seconds -> higher in the top)
      const sortedScores = score
        ? Object.entries(score).sort(([, a], [, b]) => parseInt(Object.values(a)[0]) - parseInt(Object.values(b)[0]))
        : [];

      const handleInputChange = (e) => {
        setPlayerName(e.target.value);
      };

      const handleClick = e =>{
        e.preventDefault();
        addScore( {[playerName]: seconds})
        setScoreSubmited(true)
        setTableHeight('300px')
      }


      // I repeat the function here, but it is also in the App.js, I should fix this
      function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsFormatted = Math.floor(seconds % 60);
      
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsFormatted.toString().padStart(2, '0')}`;
      }

  return (
    <StyledContainer tableHeight={tableHeight}>
        {score && ( 
            <>
                {!scoreSubmited && ( <>
                    <h3>You found all characters!</h3>
                    <h3>Submit your score!</h3>
                    <p>Your time <span>{formatTime(seconds)}</span></p>
                    <form action="">
                        <input type="text" value={playerName} placeholder="Enter your name" onChange={handleInputChange}/>
                        <button onClick={handleClick}> Submit Score</button>
                    </form>
                </>)}
                <h3>Hight Score</h3> 
                <table>
                <div className="table-content">
                    <thead>
                        <tr>
                        <th>User Name</th>
                        <th>Time (Score)</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {sortedScores.map(([key, value]) => (
                    <tr key={key}>
                        {/* get the key of the object inside the "id" */}
                        <td>{Object.keys(value)[0]}</td>
                        {/* using the value of the previous line key with a hh:mm:ss format */}
                        <td>{formatTime(Object.values(value)[0])}</td>
                    </tr>
                    ))}
    
                    </tbody>
                </div>
                </table>
            </>
         )}
    </StyledContainer>
  )
}
