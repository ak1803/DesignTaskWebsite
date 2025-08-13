import { motion } from "framer-motion";
import { useCounter } from '@/hooks/use-counter';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/use-animations';

export function StatsSection() {
  const clientsCounter = useCounter(120, 2000, 0);
  const projectsCounter = useCounter(150, 2000, 200);
  const reviewsCounter = useCounter(32, 2000, 400);
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section 
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] relative pt-[40px] sm:pt-[60px] lg:pt-[80px]"
    >
      <motion.div 
        ref={ref}
        className="flex flex-col sm:flex-row w-full max-w-[820px] mx-auto items-center 
                   rounded-2xl lg:rounded-3xl border border-[rgba(255,255,255,0.15)] 
                   min-h-[100px] sm:h-[118px] bg-[rgba(1,1,1,0.8)] backdrop-blur-sm"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        } : {}}
      >
        
        {/* Clients */}
        <motion.div 
          className="flex flex-1 px-4 sm:px-6 py-4 sm:py-6 flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.2 }
          } : {}}
        >
          <motion.h3 
            ref={clientsCounter.ref} 
            className="text-white text-center font-jakarta 
                       text-[24px] sm:text-[32px] lg:text-[40px] 
                       font-bold leading-normal"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {clientsCounter.count}K+
          </motion.h3>
          <p className="text-[#FF541F] text-center font-jakarta 
                        text-[12px] sm:text-[14px] lg:text-base 
                        font-semibold leading-normal">
            Clients
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div 
          className="flex flex-1 px-4 sm:px-6 py-4 sm:py-6 flex-col justify-center items-center 
                     border-t sm:border-t-0 sm:border-r sm:border-l border-[rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.4 }
          } : {}}
        >
          <motion.h3 
            ref={projectsCounter.ref} 
            className="text-white text-center font-jakarta 
                       text-[24px] sm:text-[32px] lg:text-[40px] 
                       font-bold leading-normal"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {projectsCounter.count}+
          </motion.h3>
          <p className="text-[#FF541F] text-center font-jakarta 
                        text-[12px] sm:text-[14px] lg:text-base 
                        font-semibold leading-normal">
            Projects
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div 
          className="flex flex-1 px-4 sm:px-6 py-4 sm:py-6 flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.6 }
          } : {}}
        >
          <motion.h3 
            ref={reviewsCounter.ref} 
            className="text-white text-center font-jakarta 
                       text-[24px] sm:text-[32px] lg:text-[40px] 
                       font-bold leading-normal"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {reviewsCounter.count}K+
          </motion.h3>
          <p className="text-[#FF541F] text-center font-jakarta 
                        text-[12px] sm:text-[14px] lg:text-base 
                        font-semibold leading-normal">
            5-Star Reviews
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
