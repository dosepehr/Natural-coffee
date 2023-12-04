import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../redux/reducers/apiSlice";

export default function Slider() {
  const { data: products, isLoading } = useGetProductsQuery({});
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className="px-5">
          <div className="group relative flex items-center justify-center overflow-hidden px-4 sm:px-14">
            <button
              className="group-hover: absolute -left-10 top-1/2 -translate-y-1/2 scale-[2] text-[#555] transition-all duration-500 group-hover:left-4 sm:flex"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <GrPrevious />
            </button>
            <Swiper
              ref={swiperRef}
              loop={true}
              navigation={true}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                enabled: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    productName={product.name}
                    productPrice={product.price}
                    productRating={product.rating}
                    productImg={
                      `http://localhost:5000/images/${product.image}` ||
                      "/images/product.png"
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute -right-10 top-1/2 -translate-y-1/2 scale-[2] text-[#555] transition-all duration-500 group-hover:right-4 sm:flex"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <GrNext />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
