import styled from 'styled-components';

const FooterStyle = styled.div`

width: 100vw;
height: 50vh;
background: rgb(225,236,255);
display: flex;
align-items: center;
justify-content: center;

.footerSection {
    width: 33.3vw
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
    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 3%;

    .footerSection {
        width: 55vw;
        margin-bottom: 5%;
    }

    .logo {
        display: none
    }

}

`;

export { FooterStyle };
