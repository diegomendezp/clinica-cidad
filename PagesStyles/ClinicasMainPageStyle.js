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


@media (min-width: 1025px) and (max-width: 1280px) {
  
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



@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
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
    height: 170vh;
    }

    .secondSectionClinicas {
    flex-direction: column;
    height: 155vh;
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
