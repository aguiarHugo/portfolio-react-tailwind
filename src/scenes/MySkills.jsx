import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

import skillsImg from '../assets/skills-image.png'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="skills" className='pt-10 pb-24'>
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
            Minhas <span className='text-purple'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga velit sapiente 
           harum ipsa praesentium, nobis iure minima atque ea optio enim sed 
           odio deleniti aperiam a! Ut, velit beatae! Corrupti?
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

          {/* SKILLS  */}
          <div className='md:flex md:justify-between mt-16 gap-32'>
            {/* EXPERIENCE */}
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
                  <p className='font-playfair font-semibold text-3xl mt-3'>Experiência</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquam sit 
                cupiditate dolore molestias autem nihil nemo necessitatibus repellendus, 
                saepe soluta veritatis pariatur quis qui, voluptas porro iusto, quae perferendis.
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
                  <p className='font-playfair font-semibold text-3xl mt-3'>Inovador</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquam sit 
                cupiditate dolore molestias autem nihil nemo necessitatibus repellendus, 
                saepe soluta veritatis pariatur quis qui, voluptas porro iusto, quae perferendis.
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
                  <p className='font-playfair font-semibold text-3xl mt-3'>Criativo</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
              </div>
              <p className='mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquam sit 
                cupiditate dolore molestias autem nihil nemo necessitatibus repellendus, 
                saepe soluta veritatis pariatur quis qui, voluptas porro iusto, quae perferendis.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default MySkills