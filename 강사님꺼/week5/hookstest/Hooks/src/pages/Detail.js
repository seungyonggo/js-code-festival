import { useParams } from "react-router-dom";
import productList from "../__mock__/products.json";

function Detail() {
  const { productNumber } = useParams();

  // Find the product with the matching productNumber
  const product = productList.products.find(
    (product) => product.productNumber === productNumber
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.productName}</h2>
      <p>Product number: {product.productNumber}</p>
    </div>
  );
}

export default Detail;

/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */
