import { SelectedPage } from '@/shared/interfaces';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from '@/shared/Htext';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Form = ({setSelectedPage}: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 mb-5 px-5 py-3 placeholder-white`

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id='contuctus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div 
        onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
        className='md:w-3/5'
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0}
        }}>
          <Htext>
            <span className='text-primary-500'>JOIN NOW </span>TO GET IN SHAPE
          </Htext>
          <p className='mt-5 mb-10'>Asum dolor sit amet consectetur adipisicing elit. Quo repellendus tempore nobis quis consequuntur voluptatem alias culpa optio, omnis qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non neque eius fugiat deleniti aperiam voluptas?</p>
        </motion.div>
        <div className='justify-between gap-8 md:flex'>
          <motion.div 
            className='basis-3/5 mt-10 md:mt-0'
            initial='hidden'
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y:50},
              visible: {opacity: 1, y:0}
            }}
          >
            <form 
              target='_blanc'
              onSubmit={onSubmit}
              method='POST'
              action="https://formsubmit.co/41696a86f92a2abcae04a8f16129481d"
            >
              <input 
                type="text" 
                className={inputStyles}
                placeholder='NAME' 
                {...register("name",{
                  required: true,
                  maxLength: 40,
                })}
                />
                {errors.name && (
                  <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 50 char."}
                  </p>
                )}
              <input 
                type="email" 
                className={inputStyles}
                placeholder='EMAIL' 
                {...register("email",{
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
                {errors.email && (
                  <p className='mt-1 text-primary-500'>
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email."}
                  </p>
                )}
               <textarea 
                rows={4}
                cols={40}
                className={inputStyles}
                placeholder='MESSAGE' 
                {...register("message",{
                  required: true,
                  maxLength: 2000,
                })}
                />
                {errors.message && (
                  <p className='mt-1 text-primary-500'>
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                  </p>
                )}
              <button
                type='submit'
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
          className='relative mt-16 basis-2/5 md:mt-0'
          initial='hidden'
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y:50},
            visible: {opacity: 1, y:0}
          }}>
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
              <img className='w-full' src={ContactUsPageGraphic} alt="contact-us-image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Form;