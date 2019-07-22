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
import Meta from '../components/Meta';
import { Title } from '../components/pageSections/Title';

const displayContent = (posts) => {
    return posts.map((post, i) => {
        return (<p key={i} className="descriptionPost">{post}</p>)
    })
}
const Blog = withRouter(props => {

    const blog = JSON.parse(props.router.query.blog);


    return (
        <React.Fragment>
            <Meta />
            <NavBar></NavBar>
            <PostMainPageStyle img={props.router.query.imagen}>
                <Title text={"Clínica Cidad"} bold blog></Title>
                <div className="imageSection"></div>
                <div className="textSection">
                <Link href="/blog">
                <p className="backLink">&lt;-- Volver</p>
                </Link>
                <h1 className="titlePost">{blog.title.toUpperCase()}</h1>
                {displayContent(blog.posts)}
                </div>
            </PostMainPageStyle>
            <Footer></Footer>
        </React.Fragment>
    )
})

export default Blog