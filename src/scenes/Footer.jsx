import SocialMediaIcons from "../components/SocialMediaIcons"


const Footer = () => {
  return (
    <footer className="h-48 bg-purple pt-2">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Hugo Aguiar
          </p>
          <p className="font-playfair text-md text-white">
            ©2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer