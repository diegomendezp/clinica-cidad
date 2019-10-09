import styled from 'styled-components';

const ClinicasMainPageStyle = styled.div`


/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

.mapContainer {
        position: relative;
        order: 1;
}

.marker {
    width: 7vw;
    object-fit: cover;
    position: absolute;
    top: 30%;
    left: 28%;
    animation-name: markerAnimation;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

}

.imagenMapa {
    width: 50vw;
    height: 100vh;
    object-fit: cover;
}

.imagenSilla {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}


.image-gallery-image img {
  height: 100vh;
  object-fit: cover;
}

.firstSectionClinicas {
    display: flex;
    height: 100vh;
}

.secondSectionClinicas {
    display: flex;
    height: 100vh;
}

@keyframes markerAnimation {
  0%   {top: 30%}
  50% {top: 28%}
  100% {top: 30%}
}

@media (min-width: 1441px) {
  

  
}



@media (min-width: 1025px) and (max-width: 1440px) {
  
}



@media (min-width: 769px) and (max-width: 1024px) {
  .image-gallery-image img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    }

    .firstSectionClinicas {
    flex-direction: column;
    height: 150vh;
    }

    .secondSectionClinicas {
    flex-direction: column;
    height: 120vh;
    }


    .mapContainer {
        position: relative;
        order: 0;
    }

    .imagenSilla {
        width: 100vw;
        height: 40vh;
        object-fit: cover;
    }

    .imagenMapa {
        width: 100vw;
        height: 55vh;
        object-fit: cover;
    }
  
}




@media (min-width: 481px) and (max-width: 768px) {
  .image-gallery-image img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    }

    .firstSectionClinicas {
    flex-direction: column;
    height: 150vh;
    width: 100%;
    }

    .secondSectionClinicas {
    flex-direction: column;
    height: 120vh;
    }


    .mapContainer {
        position: relative;
        order: 0;
    }

    .imagenSilla {
        width: 100vw;
        height: 40vh;
        object-fit: cover;
    }

    .imagenMapa {
        width: 100vw;
        height: 55vh;
        object-fit: cover;
    }

}

@media (min-width: 414px) and (max-width: 1024px) and (orientation: landscape) {
    @-webkit-keyframes markerAnimation {
      0%   {top: 15%}
      50% {top: 20%}
      100% {top: 15%}
    }

    @keyframes markerAnimation {
      0%   {top: 15%}
      50% {top: 20%}
      100% {top: 15%}
    }

    .firstSectionClinicas {
        flex-direction: column;
        height: auto;
    }

    .secondSectionClinicas {
        flex-direction: column;
        height: auto;
    }

    .image-gallery-image img {
        height: 100vh;
        object-fit: cover;
    }

    .marker {
        top: 45% !important;
        left: 32%;
        -webkit-animation-name: markerAnimation;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-name: markerAnimation;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .imagenMapa {
        height: 100vh;
        object-fit: cover;
    }

    
}

@media (min-width: 320px) and (max-width: 480px) {

      @keyframes markerAnimation {
      0%   {top: 33%}
      50% {top: 30%}
      100% {top: 33%}
      }

    .image-gallery-image img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    }

    .firstSectionClinicas {
    flex-direction: column;
    height: auto;
    }

    .secondSectionClinicas {
    flex-direction: column;
    height: auto;
    }


    .mapContainer {
        position: relative;
        order: 0;
    }

    .imagenSilla {
        width: 100vw;
        height: 40vh;
        object-fit: cover;
    }

    .imagenMapa {
        width: 100vw;
        height: 55vh;
        object-fit: cover;
    }

    .marker {
        width: 7vw;
        object-fit: cover;
        position: absolute;
        top: 33%;
        left: 36%;
        animation-name: markerAnimation;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

    }


}
  
}

`;

export { ClinicasMainPageStyle };
