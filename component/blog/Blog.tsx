/* eslint-disable @next/next/no-img-element */
import style from '../../styles/blog.module.css'
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
      <div className={style.content}>
        {data.map((blog, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={index === 4 ? style.index_4 : ''} key={index}>
              <img src={blog.blog_image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
