import { NavbarProps } from "../../types";
import style from "../../styles/menubar.module.css";
const MenuBar = (props: NavbarProps) => {
  const {
    logo,
    paths,
    icons,
    isFooter,
    bgColor,
    classNameContent,
    classNameContainer,
  } = props;
  return (
    <div className={classNameContainer ? classNameContainer : style.container}>
      <div>
        {paths.map((path, index) => {
          return (
            <div key={index}>
              <li>{path.name}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;
