/* eslint-disable no-console */
import HeroImage from '../../public/hero-image.png'
import Button from '../button/Button'
import HeroBanner from '../heroBanner/HeroBanner'
import Input from '../input/Input'

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
    </div>
  )
}

export default HomePage
