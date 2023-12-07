import Button from "../ui/Button";

type ProductCardPropsType = {
  productName: string;
  productPrice: number;
  productImg?: string;
  productRating: number;
};

const ProductCard: React.FC<ProductCardPropsType> = ({
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
      <Button type="main" className="mx-auto mb-3">
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
