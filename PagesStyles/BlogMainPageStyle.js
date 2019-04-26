import styled from 'styled-components';

const BlogMainPageStyle = styled.div`

box-sizing: border-box;
text-align: center;
display: flex;
flex-wrap: wrap;



.blogsContainer {
    display: flex;
    flex-wrap: wrap;
}



@media (min-width: 1025px) and (max-width: 1280px) {
  
}




@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
}



@media (min-width: 414px) and (max-width: 767px) {
  

}


@media (min-width: 320px) and (max-width: 413px) {

    .blogInfo {
        margin-bottom: 5%;
        p {
            font-size: 6vw;
        }

        a {
            font-size: 4vw;
            margin-bottom: 5%;
            color: black;
        }
    }
    text-align: center;
  
}

`;

export { BlogMainPageStyle };
