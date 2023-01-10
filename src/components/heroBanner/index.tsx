import { Col, Row } from "antd";
import Image from "next/image";
import { HeroBannerProps } from "types";

const HeroBanner = (props: HeroBannerProps) => {
  const { title, info, input, img, bgColor, color, marginTop, button } = props;
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        overflow: "hidden",
        // padding: '0px 10px',
      }}
    >
      <div style={{ marginTop: `${marginTop}px`, width: "100%" }}>
        <Row justify="center" gutter={[16, 16]}>
          <Col sm={24} md={10}>
            <p style={style.title}>{title}</p>
            <p style={style.info}>{info}</p>
            <div style={style.searchBox}>
              <div style={{ width: "80%", height: "38px" }}>{input}</div>
              {button}
            </div>
          </Col>
          <Col sm={24} md={10}>
            <Image src={img} width={521} height={435} alt="hero banner" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
const style = {
  title: {
    fontSize: "70px",
    lineHeight: "82px",
    fontFamily: "inherit",
    marginTop: "30px",
  },
  info: {
    fontFamily: "inherit",
    fontWeight: 400,
    margin: "17px 0px",
  },
  searchBox: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "70%",
    height: "38px",
    borderRadius: "10px",
    overflow: "hidden",
  },
};
export default HeroBanner;
