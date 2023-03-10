import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MenuBar } from "src/components";
import { paths } from "../layouts/MainLayout";

const Footer = () => {
  return (
    <div>
      <footer>
        <MenuBar
          logo={"https://i.ibb.co/HhxpXp4/WHAT2-EAT-1.png"}
          paths={paths}
          isFooter={true}
          bgColor="#1AC073"
          // eslint-disable-next-line react/jsx-key
          icons={[<FaFacebookF />, <FaInstagram />]}
        />
      </footer>
    </div>
  );
};

export default Footer;
