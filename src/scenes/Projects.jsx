import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import Technologies from '../components/Technologies'


const Projects = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  }

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
  }

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-bg-dark`

  return (
    <section id='projetos' className='pt-20 pb-36'>
      <motion.div
              className='md:w-2/5 mx-auto text-center'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7}}
              transition={{ duration: 0.5 }}
              variants={{ 
              hidden: { opacity:0, y:-50 },
              visible: { opacity:1, y:0 }
             }}>
              <div>
                <p className='font-playfair font-semibold text-4xl mb-5'> 
                  Meus <span className='text-purple'> PRO</span>JETOS
                </p>
                <Technologies />
                <div className='flex justify-center mt-5'>
                  <LineGradient width='w-full md:w-2/3'/>
                </div>
              </div>

              <p className='mt-10 mb-10'>
                Projetos sempre desenvolvidos com foco em responsividade
                e boas práticas em acessibilidade! 
              </p>

            </motion.div>

            <div className='flex justify-center'>
              <motion.div
                className='sm:grid sm:grid-cols-3'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7}}
                variants={container}
              >
                <div className='flex justify-center text-center items-center p-10 bg-red
                max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold'
                >
                  UI Responsiva
                </div>
                <a href='https://github.com/aguiarhugo' target="_blank" rel="noreferrer">
                  <motion.div variants={projectVariant} className="relative">
                    <div className={overlayStyles}>
                      <p className="text-2xl font-playfair">Rocket Notes</p>
                      <p className="mt-6">Projeto desenvolvido durante o programa Explorer da Rocketseat, é uma aplicação full-stack com o propósito de ser um armazenador de links úteis</p>
                    </div>
                    <img src={project1} alt="Projeto 1" />
                  </motion.div>
                </a>

                <a href='https://github.com/aguiarhugo' target="_blank" rel="noreferrer">
                <motion.div variants={projectVariant} className="relative">
                  <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">Gerích</p>
                    <p className="mt-6">Uma landing page para restaurante, altamente responsiva e linda!</p>
                  </div>
                  <img src={project2} alt="Projeto 2" />
                </motion.div>
                </a>

                <a href='https://github.com/aguiarhugo' target="_blank" rel="noreferrer">
                <motion.div variants={projectVariant} className="relative">
                <div className={overlayStyles}> 
                    <p className="text-2xl font-playfair">Twitter UI Clone</p>
                    <p className="mt-6">Projeto desenvolvido durante a Masterclass com foco em React da Rocketseat, onde clonei a UI do Twitter e adicionei a funcionalidade para twittar.</p>
                  </div>
                  <img src={project3} alt="Projeto 3" />
                </motion.div>
                </a>

                <a href='https://github.com/aguiarhugo' target="_blank" rel="noreferrer">
                <motion.div variants={projectVariant} className="relative">
                  <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">Landing Page</p>
                    <p className="mt-6">Como o assunto do momento é IA, desenvolvi uma landing page com design focado nesse novo mundo em que estamos vivendo.</p>
                  </div>
                  <img src={project4} alt="Projeto 4" />
                </motion.div>
                </a>
                <div
                className="flex justify-center text-center items-center p-10 bg-purple
                  max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                  Navegação Suave
              </div>
              </motion.div>
            </div>
    </section>
  )
}

export default Projects