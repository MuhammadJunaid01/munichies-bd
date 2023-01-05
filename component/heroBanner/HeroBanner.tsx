import { Col, Row } from 'antd'
import Image from 'next/image'
import { HeroBannerProps } from '../../types'

const HeroBanner = (props: HeroBannerProps) => {
  const { title, info, input, img, bgColor, color, marginTop } = props
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        overflow: 'hidden',
      }}
    >
      <div style={{ marginTop: `${marginTop}px` }}>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={12}>
            <p>{title}</p>
            <p>{info}</p>
            {input}
          </Col>
          <Col sm={24} md={12}>
            <Image src={img} width={521} height={435} alt="hero banner" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HeroBanner
