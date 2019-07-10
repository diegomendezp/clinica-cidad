import React from "react";
import NavBar from "../components/NavBar";
import BlogCard from "../components/pageSections/BlogCard";
import { BlogMainPageStyle } from "../PagesStyles/BlogMainPageStyle";
import Footer from "../components/Footer";
import FloatingMenu from "../components/FloatingMenu";
import Div100vh from "react-div-100vh/lib/Div100vh";
import Header from "../components/Header";
import Meta from "../components/Meta";

const blogs = [
  {
    shortName: "botox",
    title: "TÓXINA BUTOLÍNICA (BOTOX-VISTABEL)",
    descripcion:
      "Con el tiempo los músculos cambian su actividad, unos se contraen con más fuerza y otros se debilitan. Todo ello conlleva una expresión triste o enfadada de la mirada. El tratamiento con toxina botulínica tipo A es uno de los tratamientos más consolidado, estudiado y seguro en medicina estética. Mediante el cual logramos el rejuvenecimiento integral de la mirada, tratando, no solo las arrugas de expresión (del entrecejo y patas de gallo), sino aportando además una mirada descansada y fresca.",
    imagen: "/static/imgs/blog/post1.jpg"
  },
  {
    shortName: "mesoterapia",
    title: "Mesoterapia Periocular",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
    imagen: "/static/imgs/blog/post2.jpg"
  },
  {
    shortName: "acido_hialuronico",
    title: "Ácido hialurónico en Código de barras",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
    imagen: "/static/imgs/blog/post3.jpg"
  },
  {
    shortName: "soporte_facial",
    title: "Pérdida del soporte facial",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
    imagen: "/static/imgs/blog/post4.jpg"
  }
];

const Blog = props => {
  return (
    <React.Fragment>
      <Meta />
      <NavBar position={true} />
      <FloatingMenu />
      <BlogMainPageStyle>
        <Div100vh style={{ height: "50vh" }} className="mainContainer">
          <Header title={"Clínica Cidad"} subtitle={"blog"} />
        </Div100vh>
        <div>
          <div className="blogsContainer">
            {blogs.map(blog => (
              <BlogCard blog={blog} />
            ))}
          </div>
        </div>
        <Footer />
      </BlogMainPageStyle>
    </React.Fragment>
  );
};

export default Blog;
