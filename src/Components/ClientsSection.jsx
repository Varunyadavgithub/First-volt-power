import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adani_logo from "../assets/Images/adani_Logo.png";
import tata_logo from "../assets/Images/tata_power.png";
import aditya_birla_group_logo from "../assets/Images/aditya_birla_group_logo.png";
import kei_logo from "../assets/Images/kei_logo.png";
import powerica_logo from "../assets/Images/powerica_logo.jpg";
import chiripal_Logo from "../assets/Images/chiripal_Logo.png";

const clients = [
  { name: "Adani", logo: adani_logo },
  { name: "Tata Power", logo: tata_logo },
  { name: "Aditya Birla Group", logo: aditya_birla_group_logo },
  { name: "KEI", logo: kei_logo },
  { name: "PowerICA", logo: powerica_logo },
  { name: "Chiripal", logo: chiripal_Logo },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For small devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // Centers the logo
      },
    },
  ],
};

const ClientsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Clients</h2>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center mx-auto"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
