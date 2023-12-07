import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/reducers/apiSlice";
import Discover from "../layout/Discover";
import Button from "../ui/Button";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";
import Heart from "../layout/Heart";
import Socials from "../layout/Socials";

const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(Number(id));
  return (
    <>
      <div className="mx-auto bg-[#F2ECEC]">
        {isLoading ? (
          <p>loading</p>
        ) : (
          <div className="mx-auto flex h-[700px] max-w-6xl flex-col items-center justify-center py-10 md:flex-row">
            <div className="order-1 h-full w-full md:order-[0]">
              <img
                src={
                  `http://localhost:5000/images/${product?.image}` ||
                  "/images/product.png"
                }
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="">
              <div className="ml-5 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-5xl font-extrabold">{product?.name}</p>
                  <p className="text-2xl text-secondaryBrown ">
                    ${product?.price}
                  </p>
                  <p className="max-w-[60%] text-base text-secondaryGray ">
                    {product?.description}
                  </p>
                </div>
                <div className="mb-4 flex items-center space-x-4">
                  <Button type="count">
                    <LuPlus />
                  </Button>
                  <p>1</p>
                  <Button type="count">
                    <LuMinus />
                  </Button>
                  <Button className="!flex items-center space-x-2 !px-8">
                    <span className="!text-2xl">
                      <CiShoppingBasket />
                    </span>
                    <span className="text-sm">ADD TO CARD</span>
                  </Button>
                  <Button type="count" className="!p-3">
                    <Heart />
                  </Button>
                </div>
                <div className="flex items-center justify-start ">
                  <p className="mr-4">Share:</p>
                  <div className="flex space-x-3 text-base text-black">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Discover />
    </>
  );
};

export default Product;
