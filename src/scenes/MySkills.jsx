import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

import skillsImg from '../assets/skills-image.png'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="habilidades">
      {/* HEADER AND IMG */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className='md:w-1/3'
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
            SOFT <span className='text-purple'>SKILLS</span>
          </p>
          <LineGradient width='w-2/3' />
          <p className='mt-10 mb-7'>
           Dentre diversas outras, considero estas três as mais marcantes 
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
           {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-purple before:z-[-1]"
            >
              <img 
                className="z-10"
                alt="Skills"
                src={skillsImg} 
              />
            </div>
          ) : (
            <img
                className="z-10"
                alt="Skills"
                src={skillsImg} 
              />
          )}

          <div className='md:flex md:justify-between mt-16 gap-32'>
            <motion.div
              className='md:w-1/3 mt-10'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ duration: 0.5 }}
              variants={{ 
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
             }}>
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>01</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Vontade de Aprender</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Sempre disposto e entusiasmado para aprender novas tecnologias 
              </p>
            </motion.div>

            {/* INNOVATIVE */}
            <motion.div
              className='md:w-1/3 mt-10'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{ 
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
             }}>
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>02</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Espírito de Colaboração</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Trabalhar em equipe e lidar com pessoas sempre foi o meu forte, tanto no trabalho, como na vida pessoal e nos games!
              </p>
            </motion.div>
            {/* CREATIVE */}
            <motion.div
              className='md:w-1/3 mt-10'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{ 
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
             }}>
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>03</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Proatividade</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Sempre pronto para reagir a imprevistos e propor soluções. 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySkills