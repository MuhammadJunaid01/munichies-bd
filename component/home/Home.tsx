/* eslint-disable no-console */
import HeroImage from '../../public/hero-image.png'
import Button from '../button/Button'
import Cart from '../cart/Cart'
import FilterMenu from '../filterMenu/FilterMenu'
import HeroBanner from '../heroBanner/HeroBanner'
import HomeKitchen from '../home_kitchen/HomeKitchen'
import Input from '../input/Input'
import Products from '../products/Products'

const btnGroup = ['All', 'Button', 'Free delivery', 'New', 'Comming']
const HomePage = () => {
  const onclick = () => {
    console.log('clicked')
  }
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
            isGroup
            border="1px solid #F3BA00"
            color="#929292"
            selectBtn={0}
            selectBtnStyle={selectBtnStyle}
            action={onclick}
          />
        }
        products={<Products filterOption={<FilterMenu />} />}
      />
      <Cart />
    </div>
  )
}

const selectBtnStyle = {
  backgroundColor: '#F3BA00',
  color: 'black',
  border: '1px solid #F3BA00',
  cursor: 'pointer',
  padding: '13px 40px',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
}

export default HomePage
