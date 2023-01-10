import { Product } from "src/components";
// import { useGetAllProductsQuery } from "../../redux/slices/productsSlice";
import { useGetAllProductsQuery } from "src/redux/slices";
import { ProductsProps } from "src/types";

const Products = (props: ProductsProps) => {
  const { filterOption } = props;
  const { data } = useGetAllProductsQuery("productsAPi");

  return (
    <div>
      <div style={{ padding: "20px 100px" }}>{filterOption}</div>
      <div>
        <Product data={data} />
      </div>
    </div>
  );
};

export default Products;
