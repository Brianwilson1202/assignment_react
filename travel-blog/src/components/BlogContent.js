import React from "react";

function BlogContent({myImg}) {
  return (
    <div className="blog-container">
      <div className="my-img">
        <img src={myImg} alt="me" />
      </div>
      <div className="blog-wrapper">
        <h2 className="blog-title">A little about me</h2>
        <div className="blog-content">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          {" "}
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          similique nobis quisquam ab veritatis maxime doloribus aspernatur
          blanditiis ad, quos perspiciatis laboriosam eum beatae facilis
          distinctio enim, provident hic quis.{" "}
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
