
import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

import premiada from '../assets/premiada.png'

const Testimonials = () => {

  return (
    <section>
      <motion.div
          className='md:w-1/3 text-center md:text-left'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
             hidden: { opacity:0, x:-50 },
             visible: { opacity:1, x:0 }
           }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            DEPOIMENTOS
          </p>
          <LineGradient width='w-full md:mx-auto md:w-2/5' />
        </motion.div>

        <div className="flex justify-center gap-8 my-16">
           <motion.div
            className="bg-red max-w-[300px] min-h-[400px] rounded-2xl flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, scale: 0.8 },
             visible: { opacity:1, scale:1 }
            }}
           >
            <img src={premiada} alt="Premiada" className="w-24 h-24 bg-black rounded-full mt-1"/>
            <h3 className="font-bold font-playfair text-[22px]">Cachaça Premiada</h3>
            <p className="text-center text-xl">
              <span className="font-playfair text-6xl">“</span> Excelente trabalho, entregou tudo o que prometeu e um pouco mais, fiquei muito satisfeito!
            </p>
           </motion.div>
        </div>
    </section>
  )
}

export default Testimonials