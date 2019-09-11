import React from "react";
import NavBar from "../components/NavBar";
import { PostMainPageStyle } from "../PagesStyles/PostMainPageStyle";
import Link from "next/link";
import Footer from "../components/Footer";

import { useRouter } from "next/router";
import Meta from "../components/Meta";
import { Title } from "../components/pageSections/Title";

const displayContent = posts => {
  return posts.map((post, i) => {
    return (
      <p key={i} className="descriptionPost">
        {post}
      </p>
    );
  });
};
const Post = props => {
  const router = useRouter();
  const blog =
    router.query && router.query.blog
      ? JSON.parse(router.query.blog)
      : {
          title: "Especial EVENTOS BBC.",
          posts: [
            "PRX-T33: El PRX-T33 es una bio-revitalizante cutáneo sin agujas que favorece la estimulación de los fibroblastos y los factores de crecimiento sin generar inflamación ni dañar la piel. Además, puede realizarse en todas las épocas del año, contrariamente al peeling, debido a que no es fotosensibilizante, y es adecuado para todo fototipo de piel, incluyendo los más altos. Podemos utilizarlo para hidratar, redensificar arrugas finas, cerrar poros e iluminar la zona tratada: cara cuello o escote. Se complementa con un tratamiento domiciliario."
          ]
        };
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
  );
};

export default Post;
