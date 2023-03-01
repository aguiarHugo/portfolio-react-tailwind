
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll"

import SocialMediaIcons from '../components/SocialMediaIcons'

import profilePic from '../assets/profile-image1.png'

const Landing = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section 
    id="home" 
    className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

      {/* IMG SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
          className="relative z-0 ml-20 before:absolute before:-top-20 
          before:-left-20 before:rounded-t-full before:w-full before:max-w-[400px] 
          md:before:max-w-[600px] before:h-full before:border-2 before:border-purple 
          before:z-[-1]"
          >
            <img
              className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[100000px] md:max-w-[400px]"
              alt="Hugo Aguiar profile pic"
              src={profilePic} 
            />
          </div>
        ) : (
          <img
              className="mb-4 rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              alt="Hugo Aguiar profile pic"
              src={profilePic} 
            />
        )}
        </div>
        {/* MAIN SECTION */}
        <div className="z-30 basis 2/5 mt-12 md:mt-30">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Hugo {""}
              <span 
              className="xs:relative xs:text-bg-dark xs:font-semibold z-20 
              xs:before:content-brush before:absolute before:-left-[35px] 
              before:-top-[120px] before:z-[-1]"
              >
                Aguiar
              </span>
            </p>

            <p className="mt-16 mb-7 text-sm text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Obcaecati, molestias, architecto provident, 
              consequuntur blanditiis accusamus ratione repellat
               ut distinctio saepe temporibus? Quia minus error 
              incidunt tempora corrupti aut excepturi in.
            </p>
          </motion.div>

          {/* CALL TO ACTION */}
            <motion.div
              className="flex mt-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{ 
               hidden: { opacity:0, x:-50 },
               visible: { opacity:1, x:0 }
             }}
            >
              <AnchorLink
                className="bg-gradient-rainblue text-bg-dark rounded-sm py-3 px-7 font-semibold
                hover:bg-purple hover:text-white transition duration-500"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contato
              </AnchorLink>
              <AnchorLink
                className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <div
                  className="bg-bg-dark hover:text-purple transition duration-500 w-full h-full flex 
                  items-center justify-center font-playfair px-10"
                >
                  Fale comigo
                </div>
              </AnchorLink>
            </motion.div>
            <motion.div
             className="flex mt-5 justify-center md:justify-start"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ delay: 0.4, duration: 0.5 }}
             variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}>
              <SocialMediaIcons />
            </motion.div>
        </div>
    </section>
  );
};

export default Landing