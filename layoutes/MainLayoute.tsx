/* eslint-disable react/jsx-key */
import { FaShoppingBag, FaSistrix } from 'react-icons/fa'
import Footer from '../component/footer/Footer'
import MenuBar from '../component/menubar/MenuBar'
import { MainLayouteType } from '../interfaces'
import logo from '../public/logo.png'
const paths = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Menu', to: 'menu' },
  { name: 'Blog', to: 'blog' },
]

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
  )
}

export default MainLayoute
