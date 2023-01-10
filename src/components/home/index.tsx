/* eslint-disable no-console */
import HeroImage from "public/hero-image.png";
import {
  AskQues,
  Blog,
  Button,
  FilterMenu,
  HeroBanner,
  HomeKitchen,
  Input,
  Products,
} from "src/components";

const btnGroup = ["All", "Button", "Free delivery", "New", "Comming"];
const blogData = [
  {
    blog_title: "Most Satisfying Cake decorating Cake ideas ",
    blog_info:
      "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    blog_image: "https://i.ibb.co/my3bHsM/unsplash-pp88-Aks-N4dg.png",
  },
  {
    blog_title:
      "Most Satisfying Cake decorating Cake ideas Most Satisfying Cake",
    blog_info:
      "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus is sed faucibus.",
    blog_image: 'https://i.ibb.co/pnn19QB/blog-image-2.png" alt="blog-image-2',
  },
  {
    blog_title: "Most Satisfying Cake decorating Cake ideas",
    blog_info:
      "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
    blog_image: "https://i.ibb.co/vD6nkqm/unsplash-Ol-KCes2y1e-A.png",
  },
  {
    blog_title: "Most Satisfying Cake decorating Cake ideas",
    blog_info:
      "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
    blog_image: "https://i.ibb.co/my3bHsM/unsplash-pp88-Aks-N4dg.png",
  },
  {
    blog_title: "Most Satisfying Cake decorating Cake ideas",
    blog_info:
      "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
    blog_image: "https://i.ibb.co/0MPCP7C/unsplash-Tcl-QHtlkz-Rc.png",
  },
];

const HomePage = () => {
  const onclick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <HeroBanner
        title="Authentic Home food in UK"
        info="What2Eat is a courier service in which authentic home cook food is delivered to a customer."
        bgColor="#0C1712"
        color="#FFFFFF"
        marginTop={100}
        img={HeroImage}
        input={
          <Input
            type="text"
            placeHolder="Search food you love"
            width={398}
            radius={10}
            bg="#FFFFFF"
            size="lg"
          />
        }
        button={
          <Button
            label="Search"
            size="lg"
            radius={10}
            bgColor="#F3BA00"
            color="#FFFFFF"
            action={onclick}
          />
        }
      />
      <HomeKitchen
        title="Home Kitchen"
        button={
          /* Passing a button component to the HomeKitchen component. */
          <Button
            label=""
            size="lg"
            groupData={btnGroup}
            isGroup={true}
            border="1px solid #F3BA00"
            color="#929292"
            selectBtn={0}
            selectBtnStyle={selectBtnStyle}
            action={onclick}
          />
        }
        products={<Products filterOption={<FilterMenu />} />}
      />
      <Blog title="Our Blog" data={blogData} />
      <AskQues />
    </div>
  );
};

const selectBtnStyle = {
  backgroundColor: "#F3BA00",
  color: "black",
  border: "1px solid #F3BA00",
  cursor: "pointer",
  padding: "13px 40px",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
};

export default HomePage;
