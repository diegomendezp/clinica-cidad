import React from "react";
import NavBar from "../components/NavBar";
import BlogCard from "../components/pageSections/BlogCard";
import { BlogMainPageStyle } from "../PagesStyles/BlogMainPageStyle";
import Footer from "../components/Footer";
import FloatingMenu from "../components/FloatingMenu";
import Div100vh from "react-div-100vh/lib/Div100vh";
import Header from "../components/Header";
import Meta from "../components/Meta";
import posts from '../content/blog.json'
import Main from "../components/Main";

const displayPosts = () => {
  const images = ["/static/imgs/blog/post1.jpg", "/static/imgs/blog/post2.jpg", "/static/imgs/blog/post3.jpg", "/static/imgs/blog/post4.jpg"]
  return posts.map((post, i) => (
    <BlogCard {...post} blog={post} key={i} imagen={images[Math.floor(Math.random() * images.length)]}/>
  ))
}

const Blog = props => {
  return (
    <React.Fragment>
      <Meta />
      <NavBar position={true} />
      <FloatingMenu />
      <BlogMainPageStyle>
      <Main
            img={"/static/imgs/tratamientos/imgTratamientos.jpg"}
            imgPosition={-551}
            title={"Clínica Cidad"}
            subtitle={"blog"}
            footer={false}
          />
        <div>
          <div className="blogsContainer">
            {displayPosts()}
          </div>
        </div>
        <Footer />
      </BlogMainPageStyle>
    </React.Fragment>
  );
};

export default Blog;
