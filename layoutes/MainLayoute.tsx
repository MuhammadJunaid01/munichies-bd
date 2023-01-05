/* eslint-disable react/jsx-key */
import MenuBar from "../component/menubar/MenuBar";
import { FaSistrix, FaShoppingBag } from "react-icons/fa";
import { MainLayouteType } from "../types";
import logo from "../public/logo.png";
import fbIcon from "../public/facebook.png";
import istIcon from "../public/inst.png";
import Footer from "../component/footer/Footer";
const paths = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Menu", to: "menu" },
  { name: "Blog", to: "blog" },
];

const MainLayoute = ({ children }: MainLayouteType) => {
  return (
    <div>
      <MenuBar
        logo={logo}
        paths={paths}
        isFooter
        icons={[<FaSistrix />, <FaShoppingBag />]}
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoute;
