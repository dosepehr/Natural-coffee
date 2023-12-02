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
    <div className="flex flex-col items-center justify-between bg-white">
      <img src={productImg} alt={productName} />
      <p className="text-black">{productName}</p>
      <p className="text-[#888]">$ {productPrice}</p>
    </div>
  );
};

export default Product;
