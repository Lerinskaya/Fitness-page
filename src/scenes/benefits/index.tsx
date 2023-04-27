import Htext from '@/shared/Htext';
import { IBenefit, SelectedPage } from '@/shared/interfaces';
import Benefit from './Benefit';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import BenefitsPageImage from "@/assets/BenefitsPageGraphic.png"
import { motion } from 'framer-motion';
import ActionButton from '@/shared/ActionButton';

const benefits: Array<IBenefit> = [
{ icon: <HomeModernIcon className='h-6 w-6' />,
  title: "State of the Art Facilities",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nesciunt dolore vel ad illum error possimus doloremque neque animi"
},
{ icon: <UserGroupIcon className='h-6 w-6' />,
  title: "100's of Diverse Classes",
  description: "Consectetur adipisicing elit. Quia blanditiis  ad illum error possimus nesciunt dolore vel ad illum error possimus doloremque neque animi"
},
{ icon: <AcademicCapIcon className='h-6 w-6' />,
  title: "Expert and Pro Trainers",
  description: "Quia blanditiis nesciunt dolore vel ad illum error possimus doloremque neque animi  ad illum error possimus. Nillum error possimus"
}
];

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div 
        onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
        className='md:my-5 md:w-3/5'
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0}
        }}>
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div 
        className='md:flex items-center justify-between gap-8 mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        variants={container}
        >
          {benefits.map((benefit:IBenefit)=> (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className='md:flex items-center justify-between gap-20 md:mt-28 mt-6'>
          <img className='mx-auto' 
            src={BenefitsPageImage} 
            alt="benefits-image" />
          <div>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                <motion.div
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once:true, amount:0.5}}
                 transition={{duration: 0.5}}
                 variants={{
                   hidden: {opacity: 0, x:50},
                   visible: {opacity: 1, x:0}
                 }}>
                  <Htext>MILLIONS OF HAPPY MEMBERS GETTING
                    <span className='text-primary-500'> FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            <motion.div
             initial='hidden'
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{delay:0.2,duration: 0.5}}
             variants={{
               hidden: {opacity: 0, x:-50},
               visible: {opacity: 1, x:0}
             }}>
              <p className='my-5'>Iste magni, enim tempore beatae ipsa tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aut quod, saepe nemo, ullam, explicabo error corrupti exercitationem quaerat iure nesciunt perspiciatis necessitatibus voluptatem neque. Voluptatum recusandae fuga inventore ipsa tempore earum quod cum. Nam molestiae pariatur minima rerum illo.</p>
              <p className='mb-5'>Consectetur adipisicing elit. Ipsum, aperiam et ex quos eaque enim possimus, placeat exercitationem ab, sunt minus quis perferendis!  Incidunt esse ratione excepturi, veritatis atque similique illum aliquam eos molestiae corporis?</p>
            </motion.div>
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits;