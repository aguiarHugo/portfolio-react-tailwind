import LineGradient from "../components/LineGradient"
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import contactImg from '../assets/contact-image.jpeg'

const Contact = () => {
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contato" className="py-48">
      <motion.div
          className="flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
             hidden: { opacity:0, x:-50 },
             visible: { opacity:1, x:0 }
           }}
        >
            <div>
              <p className='font-playfair font-semibold text-4xl'>
                ENTRE EM <span className="text-purple">CONTATO</span>
              </p>
              <div className="flex justify-end my-5">
                <LineGradient width='w-1/2'/>
              </div>
            </div>
        </motion.div>

        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            className="basis-1/2 flex justify-center"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ duration: 0.5 }}
             variants={{ 
                hidden: { opacity:0, y:50 },
                visible: { opacity:1, y:0 }
              }}
          >
            <img src={contactImg} alt="Contato" />
          </motion.div>

          <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ 
             hidden: { opacity:0, y:50 },
             visible: { opacity:1, y:0 }
           }}>
            <form target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/1dac0ab6c05c88fe370d429cf7745bdb"
              method="POST"
            >
              <input 
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text" 
              placeholder="Digite o seu nome"
              {...register('name', {
                required: true,
                maxLength: 100
              })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'Informe o seu nome'}
                  {errors.name.type === 'maxLength' && 'Limite máximo de 100 caracteres'}
                </p>
              )}

              <input 
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                type="text" 
                placeholder="Digite o seu e-mail"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
                {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === 'required' && 'Informe o seu e-mail'}
                  {errors.email.type === 'pattern' && 'Digite um e-mail válido'}
                </p>
                )}

              <textarea 
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                type="text" 
                placeholder="Mensagem"
                rows='4'
                cols='50'
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
                {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === 'required' && 'Digite sua mensagem'}
                  {errors.message.type === 'maxLength' && 'Máximo de 2000 caracteres'}
                </p>
                )}

                <button
                className="py-4 px-20 bg-purple text-bg-dark mt-5 hover:bg-red hover:text-white transition duration-500"
                type="submit">
                  Enviar
                </button>
            </form>
          </motion.div>
        </div>
    </section>
  )
}

export default Contact