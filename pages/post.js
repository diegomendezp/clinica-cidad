import React from 'react'
import NavBar from '../components/NavBar';
import Head from "next/head";
import Avenir from "../static/fonts/avenir.ttf";
import AvenirB from "../static/fonts/Avenir-bold.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import { PostMainPageStyle } from '../PagesStyles/PostMainPageStyle'
import Link from 'next/link'
import Footer from '../components/Footer';

import { withRouter } from 'next/router'

const Blog = withRouter(props => {

    const blog = JSON.parse(props.router.query.blog);
    console.log(blog)

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Clínica Cidad</title>
            </Head>
            <style jsx global>{`
            @font-face {
            font-family: "Avenir";
            src: url(${Avenir}) format("truetype");
            font-weight: normal;
            font-style: normal;
            }


            @font-face {
            font-family: "AvenirB";
            src: url(${AvenirB}) format("truetype");
            font-weight: normal;
            font-style: normal;
            }
    
            @font-face {
            font-family: "AvenirL";
            src: url(${AvenirL}) format("truetype");
            font-weight: normal;
            font-style: normal;
            }
    
    
            body {
            margin: 0;
            padding: 0;
            max-width: 100%;
            position: relative;
            overflow-x: hidden;
            
            }

            .backLink {
                font-family: AvenirL;
                text-decoration: underline;
                align-self: flex-start;
                color: black;
            }
    
        
        `}</style>
            <NavBar></NavBar>
            <PostMainPageStyle img={blog.imagen}>
                <h1 className="title">Clínica Cidad</h1>
                <div className="imageSection"></div>
                <div className="textSection">
                <Link href="/blog">
                <p className="backLink">&lt;-- Volver</p>
                </Link>
                <h1 className="titlePost">{blog.title.toUpperCase()}</h1>
                <p className="descriptionPost">{blog.descripcion}</p>
                </div>
            </PostMainPageStyle>
            <Footer></Footer>
        </React.Fragment>
    )
})

export default Blog