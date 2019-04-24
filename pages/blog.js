import React from 'react'
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/blog/imgBlog.jpg'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import blog1 from "../static/imgs/blog/post1.jpg";
import blog2 from "../static/imgs/blog/post2.jpg";
import blog3 from "../static/imgs/blog/post3.jpg";
import blog4 from "../static/imgs/blog/post4.jpg";
import BlogCard from '../components/pageSections/BlogCard';
import { BlogMainPageStyle } from '../PagesStyles/BlogMainPageStyle'
import { H3Style } from '../PagesStyles/TextStyles/H3Style'
import Footer from '../components/Footer';

const blogs = [
    {   
        shortName: "botox",
        title: "TÓXINA BUTOLÍNICA (BOTOX-VISTABEL)",
        descripcion: "Con el tiempo los músculos cambian su actividad, unos se contraen con más fuerza y otros se debilitan. Todo ello conlleva una expresión triste o enfadada de la mirada. El tratamiento con toxina botulínica tipo A es uno de los tratamientos más consolidado, estudiado y seguro en medicina estética. Mediante el cual logramos el rejuvenecimiento integral de la mirada, tratando, no solo las arrugas de expresión (del entrecejo y patas de gallo), sino aportando además una mirada descansada y fresca.",
        imagen: blog1,
    },
    {
        shortName: "mesoterapia",
        title: "Mesoterapia Periocular",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: blog2,
    },
    {
        shortName: "acido_hialuronico",
        title: "Ácido hialurónico en Código de barras",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: blog3,
    },
    {
        shortName: "soporte_facial",
        title: "Pérdida del soporte facial",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: blog4,
    }
]

const Blog = props => {
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
    
        
        `}</style>
            <NavBar></NavBar>
            <BlogMainPageStyle>
                <Main img={img} imgPosition={-301} title={"Clínica Cidad –"} subtitle={"blog"} footer={false}></Main>
                <div>
                    <div>
                        <H3Style equipo={true}>
                            Filtros
                        </H3Style>
                    </div>
                    <div className="blogsContainer">
                        {
                            blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
                <Footer></Footer>
            </BlogMainPageStyle>

        </React.Fragment>
    )
}

export default Blog