import Image from 'next/image'
import { FaAlignRight, FaBars } from 'react-icons/fa'

import { useState } from 'react'
import style from '../../styles/menubar.module.css'
import { NavbarProps } from '../../types'
const MenuBar = (props: NavbarProps) => {
  const { logo, paths, icons, classNameContent, classNameContainer } = props
  const [isCollapse, setIsCollapse] = useState(false)

  return (
    <div className={classNameContainer ? classNameContainer : style.container}>
      <div className={classNameContent ? classNameContent : style.menu}>
        <Image src={logo ? logo : ''} width={128} height={65} alt="" />
        <div className={style.menu_content}>
          {paths.map((path, index) => {
            return (
              <div key={index}>
                <li>{path.name}</li>
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
