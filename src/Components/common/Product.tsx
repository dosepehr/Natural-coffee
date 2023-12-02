import Button from "../ui/Button";

type ProductPropsType = {
  productName: string;
  productPrice: string;
  productImg?: string;
  productRating: number;
};

const Product: React.FC<ProductPropsType> = ({
  productName,
  productPrice,
  productRating,
  productImg,
}) => {
  return (
    <div className="bg-white py-4">
      <div className="mx-auto mb-3 w-3/4">
        <img src={productImg} alt={productName} className="mx-auto" />
      </div>
      <p className="mb-3 text-black">{productName}</p>
      <p className="mb-3 text-[#888]">$ {productPrice}</p>
      <Button content="ADD TO CART" type="main" className="mx-auto mb-3" />
    </div>
  );
};

export default Product;
