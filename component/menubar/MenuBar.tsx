import Image from 'next/image'
import { FaAlignRight, FaBars } from 'react-icons/fa'

import { useState } from 'react'
import { NavbarProps } from '../../interfaces'
import style from '../../styles/menubar.module.css'
const MenuBar = (props: NavbarProps) => {
  const { logo, paths, icons, classNameContent, classNameContainer } = props
  const [isCollapse, setIsCollapse] = useState(false)

  return (
    <div className={classNameContainer ? classNameContainer : style.container}>
      <div className={classNameContent ? classNameContent : style.menu}>
        <Image src={logo ? logo : ''} width={128} height={65} alt="" />
        <div
          className={`${
            isCollapse
              ? [style.menu_content, style.open].join(' ')
              : style.menu_content
          }`}
        >
          {paths.map((path, index) => {
            return (
              <div key={index}>
                <li className={isCollapse ? style.menuItem : ''}>
                  {path.name}
                </li>
              </div>
            )
          })}
        </div>
        <div className={style.menu_icon}>
          {icons?.map((icon, index) => {
            return (
              <div key={index}>
                <p>{icon}</p>
              </div>
            )
          })}
        </div>
        <div className={style.collapse_icon}>
          <p onClick={() => setIsCollapse((prev) => !prev)}>
            {isCollapse ? <FaAlignRight /> : <FaBars />}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
