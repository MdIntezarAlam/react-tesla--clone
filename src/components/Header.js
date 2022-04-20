import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  const [brugerStatus, setBrugerStatus] = useState(false);
  return (
    <Container>
      {/* tesla logo */}
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu >
        <a href="#">Shop</a>
        <a href="#"> Account</a>
        {/* This is Menu Icons */}
        <CustoMenu onClick={() => setBrugerStatus(true)} />
      </RightMenu>
      <BurgerNav show={brugerStatus}>
        {/* This is Close Icon Of Menubar from MUI */}
        <CloseWrapper>
          <CustomClose onClick={() => setBrugerStatus(false)} />
        </CloseWrapper>
        <li><a href="#">Exesting Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
      </BurgerNav>
    </Container>
  )
}
export default Header
//styling Using Css

const Container = styled.div`
cursor:pointer;
min-height:60px;
position: fixed;
display: flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index: 1;
`
const Menu = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex:1;

a{
  font-weight:600;
  padding:0 10px;
  flex-wrap: nowrap;
}
// for small divice
@media (max-width:768px){
  display:none;
}
   
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  padding:0 5px;
  margin-right: 10px;
}
`
const CustoMenu = styled(MenuIcon)`
 cursor:pointer;
 opicity:0.98s;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background: white;
width:240px;
z-index:16;
list-style:none;
// padding:28px;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition: transform 0.3s ;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,21);

  a{
  font-weight:600;
  }
}
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
