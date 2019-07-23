import React from 'react'
import NavBar from '../components/NavBar';
import { PostMainPageStyle } from '../PagesStyles/PostMainPageStyle'
import Link from 'next/link'
import Footer from '../components/Footer';

import { useRouter } from 'next/router'
import Meta from '../components/Meta';
import { Title } from '../components/pageSections/Title';

const displayContent = (posts) => {
    return posts.map((post, i) => {
        return (<p key={i} className="descriptionPost">{post}</p>)
    })
}
const Post= props => {
    const router = useRouter();
    const blog = JSON.parse(router.query.blog);
    return (
        <React.Fragment>
            <Meta />
            <NavBar></NavBar>
            <PostMainPageStyle img={router.query.imagen}>
                <Title text={"Clínica Cidad"} bold blog></Title>
                <div className="imageSection"></div>
                <div className="textSection">
                <Link href={router.query.lastPath ? router.query.lastPath : "/blog"}>
                    <p className="backLink">← Volver</p>
                </Link>
                <h1 className="titlePost">{blog.title.toUpperCase()}</h1>
                {displayContent(blog.posts)}
                </div>
            </PostMainPageStyle>
            <Footer></Footer>
        </React.Fragment>
    )
}


export default Post