import React from 'react'
import img1 from "../../assets/card/casual.png"
import img2 from "../../assets/card/hodie.png"
import img3 from "../../assets/card/kaos.png"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        descriptions : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    },
    {
        id: 2,
        img: img2,
        title: "Hoddie",
        descriptions : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    },
    {
        id: 3,
        img: img3,
        title: "T-shirt",
        descriptions : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    },
]
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex
            sint commodi totam inventore cums
          </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5'>
           {
             ProductsData.map((data) => (
                <div key={data.id} data-aos="zoom-in" data-aos-delay="500" className='bg-white rounded-2xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group transition-all max-w-[300px]'>
                {/* image section */}
                    <div className='h-[100px]'>
                         <img src={data.img} alt={data.title} className='max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-105 transition-all duration-300 drop-shadow-md'/> 
                    </div>
                {/* details section */}
                    <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className='text-yellow-500'/>  
                      <FaStar className='text-yellow-500'/>  
                      <FaStar className='text-yellow-500'/>  
                      <FaStar className='text-yellow-500'/>  
                    </div>
                         <h1 className='text-xl font-bold'>{data.title}</h1>
                         <p className='text-gray-500 group-hover:text-white line-clamp-2 duration-300 transition-all text-sm'>{data.descriptions}</p>
                         <button className='bg-primary py-1 px-4 hover:scale-105 duration-300 text-white mt-4 rounded-full group-hover:bg-white group-hover:text-primary'
                           onClick={handleOrderPopup}
                         >
                            Order Now
                         </button>
                    </div>
                </div>
             ))
           }
        </div>
      </div>
    </div>
  );
}

export default TopProducts