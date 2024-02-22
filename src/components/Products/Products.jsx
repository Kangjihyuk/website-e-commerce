import React from 'react'
import Img1 from "../../assets/img-2/img1.png"
import Img2 from "../../assets/img-2/img2.png"
import Img3 from "../../assets/img-2/img3.png"
import Img4 from "../../assets/img-2/img4.png"
import Img5 from "../../assets/img-2/img5.png"
import { FaStar } from 'react-icons/fa6'
// import { FaStar } from 'react-icons/fa6'}

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "shoping Ethnic",
        rating : "5.0",
        color: "yellow",
        aosDelay : 0,
    },
    {
        id: 2,
        img: Img2,
        title: "shoping western",
        rating : "4.0",
        color: "orange",
        aosDelay : 200,
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating : "4.7",
        color: "pink",
        aosDelay : 400,
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-shirt",
        rating : "4.7",
        color: "orange",
        aosDelay : 600,
    },
    {
        id: 5,
        img: Img5,
        title: "shoping",
        rating : "4.5",
        color: "white",
        aosDelay : 800,
    },
]

const Products = () => {
  return (
    <div className="overflow-x-hidden mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex
            sint commodi totam inventore cums
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt={data.color}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-700">{data.color}</p>
                  <div className="flex gap-1 items-center">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center" data-aos="zoom-out-down">
            <button className="text-center cursor-pointer mt-10 bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products