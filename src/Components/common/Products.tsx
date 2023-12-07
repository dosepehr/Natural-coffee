import { useGetProductsQuery } from "../../redux/reducers/apiSlice";
import Button from "../ui/Button";
const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});

  return (
    <div className="bg-[#F2ECEC]">
      {isLoading ? (
        <p>loading</p>
      ) : (
        <>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-8 sm:grid-cols-2">
            {data?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center bg-white px-8 py-4 lg:flex-row"
              >
                <div className="">
                  <a href={`/shop/${product.id}`}>
                    <img
                      className="w-full"
                      src={
                        `http://localhost:5000/images/${product.image}` ||
                        "/images/product.png"
                      }
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className="flex h-full max-w-[90%] flex-col items-center justify-center text-center sm:max-w-[60%] sm:items-start lg:text-start">
                  <p className="mx-auto mb-2 text-lg font-black lg:mx-0">
                    {product.name}
                  </p>
                  <div className="text-[#888]">
                    <p className="mb-2">${product.price}</p>
                    <p className="mb-2">{product.description}</p>
                    <Button type="main" className="mx-auto my-4 lg:mx-0">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
