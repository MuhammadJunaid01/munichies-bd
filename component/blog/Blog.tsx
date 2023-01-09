/* eslint-disable @next/next/no-img-element */
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
      {data.map((blog, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={index}>
            <img src={blog.blog_image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Blog
