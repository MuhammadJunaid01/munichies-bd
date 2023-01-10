/* eslint-disable react/jsx-key */
import logo from "public/logo.png";
import { FaShoppingBag, FaSistrix } from "react-icons/fa";
import { Footer, MenuBar } from "src/components";
import { MainLayoutType } from "src/types";

export const paths = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Menu", to: "menu" },
  { name: "Blog", to: "blog" },
];

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div>
      <MenuBar
        logo={logo}
        paths={paths}
        isFooter={false}
        icons={[<FaSistrix />, <FaShoppingBag />]}
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
