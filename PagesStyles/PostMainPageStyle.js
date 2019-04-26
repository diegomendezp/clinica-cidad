import styled from 'styled-components';
import Link from 'next/link'

const BackLink = styled(Link)`
    font-family: AvenirL;
    text-decoration: underline;
    align-self: flex-start;
`

const PostMainPageStyle = styled.div`

display: flex;
justify-content: center;
position: relative;

.title {
    position: absolute;
    left: 4%;
    font-family: AvenirL;
    font-size: 8.5vw;
    top: -9%;
}

.backLink {
    font-family: AvenirL;
    text-decoration: underline;
    align-self: flex-start;
    cursor: pointer;
  
}

.descriptionPost {
    font-family: AvenirL;
    letter-spacing: 0.3px;
    margin-left: 5%;
}

.titlePost {
    font-family: AvenirL;
    font-size: 3vw;
    align-self: flex-start;
}

.imageSection {
    width: 50vw;
    height: 100vh;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.textSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 5%;
    width: 50vw;
    height: 100vh;
    box-sizing: border-box;
}


@media (min-width: 1025px) and (max-width: 1280px) {
  
}




@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
}



@media (min-width: 481px) and (max-width: 767px) {
  

}


@media (min-width: 320px) and (max-width: 480px) {

    flex-direction: column;

    .imageSection {
        width: 100vw;
        height: 80vh;
    }

    .textSection {
        justify-content: flex-start;
        width: 100vw;

        .titlePost {
            font-size: 10vw;
        }

    }

    .title {
        top: 1%;
    }

}

`;

export { PostMainPageStyle, BackLink };
