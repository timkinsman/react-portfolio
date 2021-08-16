import React, { useState } from "react";
import Footer from "../../global/Footer/Footer";
import Navbar from "../../global/Navbar/Navbar";
import images from "../../../images/Blog/Projects";
import styles from "./Blog.module.css";

function Blog() {
  const [item, setItem] = useState("projects")

  const renderImages = () => {

  }

  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="stuff" />
        <div className="global-container">
          <p className="global-title">Other work</p>
          <div className={styles["blog-container"]}>
            <h3><a onClick={() => setItem("projects")} style={{opacity: item === "projects" ? 1 : 0.4}}>Projects</a></h3>
            <h3><a onClick={() => setItem("projects")} style={{opacity: item === "writing" ? 1 : 0.4}}>Writing</a></h3>
            <h3><a onClick={() => setItem("projects")} style={{opacity: item === "art" ? 1 : 0.4}}>Art</a></h3>
            <h3><a onClick={() => setItem("projects")} style={{opacity: item === "playlists" ? 1 : 0.4}}>Playlists</a></h3>
          </div>
          <div className={styles["grid-view"]}>
            {images.map((image: string) => {
              return (
                <div>
                  <img style={{width: "100%", borderRadius: "12px"}} src={image} alt="img" />
                </div>
              )
            })}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
