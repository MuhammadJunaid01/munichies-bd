/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import { BlogProps } from '../../types'
const Blog = (props: BlogProps) => {
  const { title, data } = props
  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '0px 100px' }}>
      <h1
        style={{
          paddingTop: '60px',
          paddingBottom: '10px',
          fontSize: '24px',
          fontFamily: 'Gilroy-Medium',
        }}
      >
        {title}
      </h1>
      <Row>
        {data.map((blog, index) => {
          return (
            <Col key={index} sm={24} md={12} lg={8}>
              <div>
                <img src={blog.blog_image} alt="" />
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Blog
