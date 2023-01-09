import { Col, Row } from 'antd'
import Image from 'next/image'
import deliveryImg from '../../public/Food_delivery_cute_man_riding_motorcycles_cartoon_art_illustration 2.png'
const AskQues = () => {
  return (
    <div style={{ padding: '100px ', backgroundColor: '#F7F8FA' }}>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={10} lg={10}>
          <p style={{ fontSize: '24px', lineHeight: '24px', color: '#101115' }}>
            Do you have a question <br /> or want to become a seller?
          </p>
          <p
            style={{
              fontFamily: 'SF Pro Text',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#1B1C21',
              marginTop: '9px',
            }}
          >
            Fill this form and our manager will contact you next 48 hours.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '32px',
              gap: '15px',
            }}
          >
            <input style={style.input} type="text" placeholder="Your Name" />
            <input style={style.input} type="text" placeholder="Your Email" />
          </div>
          <textarea
            style={style.textArea}
            placeholder="Your Message"
          ></textarea>
        </Col>
        <Col sm={24} md={2} lg={4}></Col>
        <Col sm={24} md={10} lg={10}>
          <div>
            <Image src={deliveryImg} width={403} height={320} alt={''} />
          </div>
        </Col>
      </Row>
    </div>
  )
}
const style = {
  input: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    padding: '12px 10px',
    border: 'none',
    outline: 'none',
    width: '50%',
  },
  textArea: {
    marginTop: '20px',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100px',
    backgroundColor: '#FFFFFF',
    border: 'none',
    outline: 'none',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    padding: '14px 10px',
  },
}
export default AskQues
