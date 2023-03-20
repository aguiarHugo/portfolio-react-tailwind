import SocialMediaIcons from "../components/SocialMediaIcons"


const Footer = () => {
  return (
    <footer className="bg-purple">
      <div className="w-full mx-auto px-16">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
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