import React from 'react'
import footerLogo from '../../assets/logo.png'
import Banner  from '../../assets/footer.jpg'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile} from 'react-icons/fa6'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    brightnes: "20%"
}

const FooterLinks = [
    {
        title: "Home",
        link : "/#",
    },
    {
        title: "About",
        link : "/about",
    },
    {
        title: "Contact",
        link : "/contact",
    },
    {
        title: "Blog",
        link : "/blog",
    },
]

const Footer = () => {
  return (
    <div className="text-white" style={BannerImg}>
      <div className="container">
        <div className='grid md:grid-cols-3 pb-44 pt-5' data-aos="zoom-in">
          {/* company details */}
          <div className='py-8 px-4'>
            <h1 className="uppercase flex text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 items-center gap-3">
            <img src={footerLogo} alt='logo-footer' className='max-w-[50px]'/>
            yourname</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
            </p>
          </div>
          {/* footer Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
              <div className='py-8'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Importan Links</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLinks.map((links) => (
                            <li className='cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-primary text-gray-200' key={links.title}>
                                <a href={links.link}>{links.title}</a>
                            </li>
                        ))
                    }
                </ul>
              </div>  
            </div>
            <div>
              <div className='py-8'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLinks.map((links) => (
                            <li className='cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-primary text-gray-200' key={links.title}>
                                <a href={links.link}>{links.title}</a>
                            </li>
                        ))
                    }
                </ul>
              </div>  
            </div>
            {/* social links */}
            <div>
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#' >
                        <FaInstagram className='text-3xl'/>
                    </a>
                    <a href='#' >
                        <FaFacebook className='text-3xl'/>
                    </a>
                    <a href='#' >
                        <FaLinkedin className='text-3xl'/>
                    </a>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow />
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaMobile />
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer