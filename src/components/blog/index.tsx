/* eslint-disable @next/next/no-img-element */
import style from "styles/blog.module.css";
import { BlogProps } from "types";

const Blog = (props: BlogProps) => {
  const { title, data } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF", padding: "0px 100px" }}>
      <h1
        style={{
          paddingTop: "60px",
          paddingBottom: "10px",
          fontSize: "24px",
          fontFamily: "Gilroy-Medium",
        }}
      >
        {title}
      </h1>
      <div style={{ marginBottom: 100 }} className={style.content}>
        {data.map((blog, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={"contentItem" + (index + 1)} key={index}>
              <img
                style={{
                  width: "100%",
                  height: "66%",
                  objectFit: "cover",
                  borderRadius: "0.8rem",
                }}
                src={blog.blog_image}
                alt=""
              />
              <p style={{ color: "#474747", fontSize: 18 }}>
                {blog.blog_title}
              </p>
              <p style={{ color: "gray", fontSize: 16 }}>{blog.blog_info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
