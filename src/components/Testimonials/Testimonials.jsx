import React from 'react'
import Slider from 'react-slick'
import img1 from "../../assets/img-2/img6.png"
import img2 from "../../assets/img-2/img7.png"
import img3 from "../../assets/img-2/img8.png"
import img4 from "../../assets/img-2/img9.png"
import img5 from "../../assets/img-2/img10.png"

const TestimonialsData = [
  {
    id: 1,
    name: "keyyy",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    img: img1,
  },
  {
    id: 2,
    name: "Larissa",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    img: img2,
  },
  {
    id: 3,
    name: "claude",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    img: img3,
  },
  {
    id: 4,
    name: "Bryan",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    img: img4,
  },
  {
    id: 5,
    name: "keyy",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex sint commodi totam inventore cums",
    img: img5,
  },
];

const Testimonials = () => {
  
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite :true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide:2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What your customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex
            sint commodi totam inventore cums
          </p>
        </div>
        {/* Testimonials card */}
        <div
        data-aos="zoom-in"
        >
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className='my-6'>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.id}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials