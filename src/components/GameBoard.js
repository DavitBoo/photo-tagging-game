import React, { useState } from 'react'
import Background from '../images/background.jpeg'
import Dropdown from './Dropdown';
import styled from 'styled-components';
import StartModal from './Modal';



const StyledContainer = styled.div`
    position: relative;

    #dropdown{
        position: absolute;
        display: ${props => props.dropdownDisplay};
        top: ${props => props.dropdownY}px;
        left: ${props => props.dropdownX}px;
        background-color: var(--color-dark-blue);
        padding: 12px 12px 0px;
        border-radius: 10px;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    ul li{
        margin-bottom: .75rem;
        cursor: pointer;
        color: #fff;
        &:hover{
            color:var(--color-hover-yellow);
        }
    }
`

function GameBoard() {
    const [dropdownX, setDropdownX] = useState(0);
    const [dropdownY, setDropdownY] = useState(0);
    const [dropdownDisplay, setDropDownDisplay] = useState('none')

    const handleClick = e =>{

        let elemRect = e.target.getBoundingClientRect()
        let offsetY   = e.clientY - elemRect.top;
        let offsetX = e.clientX;

        //getting image width and height
        const img = e.target;
        const imgWidth = img.width;
        const imgHeight = img.height;

        // update dropdown menu display 
        if(dropdownDisplay === 'none') setDropDownDisplay('block')
        else setDropDownDisplay('none')

        // update the state
        setDropdownY(offsetY);
        setDropdownX(offsetX);
        
        // get the offset value for x and y in order to compensate and get the relative value
        const toBalanceX = e.nativeEvent.offsetX;
        const toBalanceY = e.nativeEvent.offsetY;
        
        //relative values calc
        const relativeX = (toBalanceX / imgWidth) * 100;
        const relativeY = (toBalanceY / imgHeight) * 100;
        
        //variables to send to the DB
        //habrá que dar un margen de error de +/-1 aproximadamente 
        console.log(`Click coordinates: (${offsetX}, ${offsetY})`);
        console.log(`Relative coordinates: (${Math.round(relativeX)}%, ${Math.round(relativeY)}%)`);
    }


	return <StyledContainer dropdownY={dropdownY} dropdownX={dropdownX} dropdownDisplay={dropdownDisplay} >
                <img onClick={handleClick}
                    
                    id='background-image'
                    src={Background}
                    alt='background'
                />
                <Dropdown/>
                <StartModal/>
            </StyledContainer>;
        }

export default GameBoard;