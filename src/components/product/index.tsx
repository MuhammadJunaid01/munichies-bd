import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Card } from "src/components";
import { ProductProps, ProductsType } from "src/types";

const Product = (props: ProductProps) => {
  const { data } = props;
  const [solveImageIssuse, setSolveImageIssuse] = useState<ProductsType[]>([]);
  useEffect(() => {
    const array: ProductsType[] | ((prevState: never[]) => never[]) = [];
    data?.map((data, index) => {
      const copyData = Object.assign({}, data);
      if (index === 4) {
        copyData.image = "https://i.ibb.co/my3bHsM/unsplash-pp88-Aks-N4dg.png";
        array.push(copyData);
      } else {
        array.push(copyData);
      }
    });
    setSolveImageIssuse(array);
  }, [data]);
  return (
    <div style={{ padding: "30px 100px" }}>
      <Row gutter={[16, 16]}>
        {solveImageIssuse?.map((data, index) => {
          return (
            <Col key={index} sm={24} md={8} lg={6}>
              <div>
                <Card
                  id={data?.id}
                  name={data?.name}
                  price={data?.price}
                  quantity_available={data.quantity_available}
                  image={data?.image}
                  vat={data?.vat}
                  addons={data?.addons}
                  starIcon={<FaStar />}
                  min="20 - 50"
                />
              </div>
            </Col>
          );
        })}
      </Row>
      <Button label=" +  Load more..." className="btn-style" />
    </div>
  );
};

export default Product;
