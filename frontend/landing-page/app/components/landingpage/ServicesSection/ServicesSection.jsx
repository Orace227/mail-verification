import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { IconCode, IconGlobe, IconPalette } from "@tabler/icons-react";

const cardData = [
  {
    icon: <IconGlobe className="w-8 h-8 text-[#31b3ff] " />,
    title: "Web Design",
    description: "Web Design that Builds Brand Identity",
    details:
      "We help you translate your business's unique value into a powerful online presence. With engaging designs and strategic thinking, our web design services will create customer-centric websites.",
  },
  {
    icon: <IconGlobe className="w-8 h-8 text-[#31b3ff] " />,
    title: "SEO Services",
    description: "Drive Digital Growth with SEO",
    details:
      "Our SEO services don't just work in today's market. Through in-depth keyword research and tailored SEO strategies to amplify your brand, captivate audiences, and convert traffic into revenue.",
  },
  {
    icon: <IconCode className="w-8 h-8 text-[#31b3ff] " />,
    title: "Web Development",
    description: "Custom Web & App Development",
    details:
      "Our team of skilled developers works to reduce costs and time, delivering high-quality, scalable web and app solutions for businesses of all sizes.",
  },
  {
    icon: <IconPalette className="w-8 h-8 text-[#31b3ff] " />,
    title: "Graphic Design",
    description: "Graphic Design that Elevates Your Brand",
    details:
      "Our designs capture your business's unique identity. From logos to website graphics, we bring your brand to life through compelling, clean, and creative designs.",
  },
  {
    icon: <IconCode className="w-8 h-8 text-[#31b3ff] " />,
    title: "Web Development",
    description: "Custom Web & App Development",
    details:
      "Our team of skilled developers works to reduce costs and time, delivering high-quality, scalable web and app solutions for businesses of all sizes.",
  },
  {
    icon: <IconPalette className="w-8 h-8 text-[#31b3ff] " />,
    title: "Graphic Design",
    description: "Graphic Design that Elevates Your Brand",
    details:
      "Our designs capture your business's unique identity. From logos to website graphics, we bring your brand to life through compelling, clean, and creative designs.",
  },
];

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" className="my-20  md:mt-40 ">
      <div className="flex flex-col text-center md:text-left md:flex-row justify-between gap-10 ">
        <div className=" ">
          <h2 className="text-3xl font-bold mb-4">What You Will Get!</h2>
          <p className="text-lg max-w-3xl mb-6">
            Unlock the power of precise email verification with Unwraptmail.
            Start protecting your business, enhancing deliverability, and
            building targeted prospect lists now!
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-end">
          <Button variant="contained" className="mb-8 bg-[#31b3ff]">
            Get Started for Free
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-4 bg-white group hover:bg-[#31b3ff] hover:text-white transition-colors duration-300"
          >
            <div className="">
              {/* Icon Wrapper with White Background on Hover */}
              <div className="w-12 h-12 rounded-lg  bg-[#eff9ff] group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                {card.icon}
              </div>
              <p className="text-[#31b3ff] font-bold group-hover:text-white mt-2 transition-colors duration-300">
                {card.title}
              </p>
            </div>
            <div className="">
              <p className="group-hover:text-white font-bold my-3 text-black transition-colors duration-300">
                {card.description}
              </p>
              <p className="text-sm group-hover:text-white text-black transition-colors duration-300 ">
                {card.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
