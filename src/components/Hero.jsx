import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  
  const text = "Hi, I'm Asma"; // text to animate
  const textArray = text.split(""); // Split the text kol caractere whdou

  const typingVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, 
      },
    }),
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {textArray.map((char, index) => (
              
              <motion.span
                key={index}
                custom={index} 
                initial="hidden"
                animate="visible"
                variants={typingVariants}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>
            I develop websites, <br className='sm:block hidden' />
            mobile applications and Games
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* create scroller by framer motion */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
