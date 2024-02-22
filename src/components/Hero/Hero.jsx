import React from 'react'
import Sale from "../../assets/img/sale.png"
import Shopping from "../../assets/img/shoping.png"
import Women from "../../assets/img/women.png"
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    Img: Sale,
    title: "Upto 70% off on all Product sale",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
  {
    id: 2,
    Img: Women,
    title: "Upto 50% off on all Women's Wear",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
  {
    id: 3,
    Img: Shopping,
    title: "Upto 50% off on all Product sale",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
];
const Hero = ({handleOrderPopup}) => {
    let settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus :true,
    }

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        {/* hero content */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex z-10 flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.descriptions}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={handleOrderPopup}>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true"
                  >
                    <img
                      src={data.Img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero