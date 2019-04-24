import React from 'react'
import styled from 'styled-components';

import { PStyle } from '../../PagesStyles/TextStyles/PStyle'

import Link from 'next/link'

const BlogCard = props => {


    return (
        <BlogCardStyle>
            <div className="imageBlogEntrade">
                <img src={props.blog.imagen}></img>
            </div>
            <div className="blogInfo">
                    <PStyle>{props.blog.title}</PStyle>
                    <Link as={`/post/${props.blog.shortName}`} href={{ pathname: '/post', query: { blog: JSON.stringify(props.blog) } }}>Leer más +++</Link>
             </div>
        </BlogCardStyle>
    )
}

export default BlogCard


const BlogCardStyle = styled.div`

width: 50vw;
height: 63vh;

.blogInfo {

    text-align: left;

    p {
        font-size: 1.5vw;
        padding: 3%  3% 1% 3%;
    }

    a {
        padding: 0%  3%;
        text-decoration: underline;
        font-family: "AvenirL"
    }

}


.imageBlogEntrade {
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
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

    width: 100vw;

}
`