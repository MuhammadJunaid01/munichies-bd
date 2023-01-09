import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaAlignRight, FaBars } from 'react-icons/fa'
import style from '../../styles/menubar.module.css'
import { NavbarProps } from '../../types'
const MenuBar = (props: NavbarProps) => {
  const router = useRouter()

  const {
    logo,
    paths,
    icons,
    classNameContent,
    classNameContainer,
    bgColor,
    isFooter,
  } = props

  const [isCollapse, setIsCollapse] = useState(false)

  const handleLink = () => {
    router.push('/cart')
  }
  return (
    <div
      style={
        isFooter || bgColor
          ? { backgroundColor: bgColor, padding: '24px 100px' }
          : { backgroundColor: 'var(--main-bg-color)' }
      }
      className={classNameContainer ? classNameContainer : style.container}
    >
      <div className={classNameContent ? classNameContent : style.menu}>
        <Image
          onClick={() => router.push('/')}
          src={logo ? logo : ''}
          width={isFooter ? 118 : 128}
          height={isFooter ? 20 : 65}
          alt="logo"
          style={{ cursor: 'pointer' }}
        />
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
          {icons?.map((icon, index, {}) => {
            return (
              <div key={index}>
                <p
                  onClick={isFooter ? undefined : handleLink}
                  style={index === 1 ? { cursor: 'pointer' } : {}}
                >
                  {icon}
                </p>
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
