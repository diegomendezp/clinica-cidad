import styled from 'styled-components';

const NavWrapperStyle = styled.div`

box-sizing: border-box;
width: 100vw;
height: 100vh;
padding: 0;
display: flex;
justify-content: flex-end;
align-items: center;
position: absolute;
z-index: ${props => props.position ? 0 : 10};
overflow-x: hidden;
animation-delay: 0.4s


.logo {
  margin-bottom: 15%;
  width: 12vw;
}

.menu {
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
}

.menuSection {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
}

.subMenuSection {
  width: 50vw;
}

.menuFooter {
  padding: 5% 5%;
}

.menuIcon {
  position: absolute;
  padding-right: 3%;
  z-index: 10;
  top: 5%;
}



/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  

  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  

  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  

  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  

  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  

  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  

  
}

`;

export { NavWrapperStyle };
