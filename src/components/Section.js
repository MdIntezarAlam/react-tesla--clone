import React from 'react'
import styled from 'styled-components'

const Section = ({ title, description, backgroundImg, LeftButtonText, RightButtonText }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p className='p'>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{LeftButtonText}</LeftButton>
          {RightButtonText &&
            <RightButton>{RightButtonText}  </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section
//background images property
const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}") `};
    
`

//text property like h1 and p tag
const ItemText = styled.div`
  padding-top:15vh;
  text-align:center;
`

//button property
const ButtonGroup = styled.div`
 display:flex;
 margin-bottom:30px;
 @media (max-width:768px){
   flex-direction:column;
 }
    
 `
const LeftButton = styled.div`
 height:40px;
 width:256px;
 font-size:13px;
 display:flex;
 color:#fff;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 opacity:0.83;
 text-transform:UPPERCASE;
 cursor:pointer;
 margin:8px;
 background-color:rgba(23,26,32,0.8);
 `
const RightButton = styled(LeftButton)`
opicity:0.69;
color:black;
background:#fff;
 
 `
//downarrow

const DownArrow = styled.img`
margin-top:20px;
height:40px;
margin-left:47%;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
 `

const Buttons = styled.div`
 `
