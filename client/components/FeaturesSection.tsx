import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/hooks/use-animations";

export function FeaturesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { ref: demoRef, isVisible: demoVisible } = useScrollAnimation(0.1);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[120px] relative">
      {/* Blur background effect */}
      <motion.div 
        className="absolute w-[200px] sm:w-[300px] lg:w-[366px] h-[60px] sm:h-[80px] lg:h-[100px] 
                   left-1/2 top-[300px] sm:top-[400px] lg:top-[620px] transform -translate-x-1/2 
                   bg-[#FF541F] blur-[100px] lg:blur-[185px]"
        style={{ filter: 'blur(100px) lg:blur(185px)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <div className="relative z-10 flex flex-col items-start gap-[40px] sm:gap-[50px] lg:gap-[70px]">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-[232px] w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={headerVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1],
              staggerChildren: 0.2
            }
          } : {}}
        >
          <motion.h2 
            className="text-white font-jakarta 
                       text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] 
                       font-bold 
                       leading-[32px] sm:leading-[44px] md:leading-[56px] lg:leading-[80px] 
                       max-w-[610px]"
            variants={slideInLeft}
          >
            Cloud Contact Center. Powered by <span className="text-[#FF541F]">AI</span>.
          </motion.h2>
          
          <motion.div 
            className="flex flex-col items-start gap-4 sm:gap-6 max-w-[398px] w-full lg:w-auto"
            variants={slideInRight}
          >
            <p className="text-[rgba(255,255,255,0.7)] font-jakarta 
                          text-[14px] sm:text-base font-normal 
                          leading-6 sm:leading-7 max-w-[422px]">
              Unlock the full potential of your creativity with our AI-powered design assistant.
            </p>
            <motion.button 
              className="flex px-[16px] sm:px-[22px] py-2 sm:py-2.5 justify-center items-center gap-2.5 
                         rounded-lg border-[3px] sm:border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F] 
                         w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 84, 31, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-jakarta text-[14px] sm:text-base font-medium">See All Features</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          ref={cardsRef}
          className="flex flex-col items-start gap-4 sm:gap-5 w-full"
          variants={staggerContainer}
          initial="initial"
          animate={cardsVisible ? "animate" : "initial"}
        >
          {/* First row */}
          <motion.div 
            className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 w-full"
            variants={staggerItem}
          >
            {/* Instant Ideation */}
            <motion.div 
              className="flex w-full lg:w-[505px] p-4 sm:p-6 lg:p-8 flex-col items-start gap-4 sm:gap-6 lg:gap-8 
                          rounded-2xl bg-[#212121] hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-white font-jakarta 
                             text-[20px] sm:text-[24px] lg:text-[28px] 
                             font-extrabold leading-normal group-hover:text-[#FF541F] transition-colors">
                Instant Ideation
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[40px] lg:gap-[82px] w-full">
                <p className="flex-1 text-[rgba(255,255,255,0.85)] font-jakarta 
                              text-[14px] sm:text-base font-normal 
                              leading-6 sm:leading-7">
                  Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts.
                </p>
                <motion.div 
                  className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                              rounded-lg bg-[#FF541F] group-hover:scale-110 transition-transform 
                              flex-shrink-0 self-start sm:self-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Smart Adaptability */}
            <motion.div 
              className="flex w-full lg:w-[715px] p-4 sm:p-6 lg:p-8 flex-col items-start gap-4 sm:gap-6 lg:gap-8 
                          rounded-2xl bg-[#212121] hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-white font-jakarta 
                             text-[20px] sm:text-[24px] lg:text-[28px] 
                             font-extrabold leading-normal group-hover:text-[#FF541F] transition-colors">
                Smart Adaptability
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[40px] lg:gap-[82px] w-full">
                <p className="flex-1 text-[rgba(255,255,255,0.85)] font-jakarta 
                              text-[14px] sm:text-base font-normal 
                              leading-6 sm:leading-7">
                  Skip the blank canvas and spark cre ativity instantly.  canvas and spark cre ativity instantly. Our AI generates high-quality, on-brand design concepts within seconds
                </p>
                <motion.div 
                  className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                              rounded-lg bg-[#FF541F] group-hover:scale-110 transition-transform 
                              flex-shrink-0 self-start sm:self-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second row */}
          <motion.div 
            className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 w-full"
            variants={staggerItem}
          >
            {/* Multi-Format Export */}
            <motion.div 
              className="flex w-full lg:w-[715px] p-4 sm:p-6 lg:p-8 flex-col items-start gap-4 sm:gap-6 lg:gap-8 
                          rounded-2xl bg-[#212121] hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-white font-jakarta 
                             text-[20px] sm:text-[24px] lg:text-[28px] 
                             font-extrabold leading-normal group-hover:text-[#FF541F] transition-colors">
                Multi-Format Export
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[40px] lg:gap-[82px] w-full">
                <p className="flex-1 text-[rgba(255,255,255,0.85)] font-jakarta 
                              text-[14px] sm:text-base font-normal 
                              leading-6 sm:leading-7">
                  Skip the blank canvas and spark cre ativity instantly.  canvas and spark cre ativity instantly. Our AI generates high-quality, on-brand design concepts within seconds
                </p>
                <motion.div 
                  className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                              rounded-lg bg-[#FF541F] group-hover:scale-110 transition-transform 
                              flex-shrink-0 self-start sm:self-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Seamless Revisions */}
            <motion.div 
              className="flex w-full lg:w-[504px] p-4 sm:p-6 lg:p-8 flex-col items-start gap-4 sm:gap-6 lg:gap-8 
                          rounded-2xl bg-[#212121] hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-white font-jakarta 
                             text-[20px] sm:text-[24px] lg:text-[28px] 
                             font-extrabold leading-normal group-hover:text-[#FF541F] transition-colors">
                Seamless Revisions
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[40px] lg:gap-[82px] w-full">
                <p className="flex-1 text-[rgba(255,255,255,0.85)] font-jakarta 
                              text-[14px] sm:text-base font-normal 
                              leading-6 sm:leading-7">
                  Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts.
                </p>
                <motion.div 
                  className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                              rounded-lg bg-[#FF541F] group-hover:scale-110 transition-transform 
                              flex-shrink-0 self-start sm:self-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Demo Section */}
          <motion.div 
            ref={demoRef}
            className="flex flex-col lg:flex-row w-full max-w-[1240px] p-4 sm:p-6 lg:p-8 
                       justify-between items-center rounded-2xl bg-[#212121] gap-6 sm:gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={demoVisible ? { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
            } : {}}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Left content */}
            <motion.div 
              className="flex flex-col items-start gap-4 sm:gap-6 max-w-[477px] flex-shrink-0 w-full lg:w-auto"
              initial={{ opacity: 0, x: -40 }}
              animate={demoVisible ? { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.2 }
              } : {}}
            >
              <h2 className="text-white font-jakarta 
                             text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] 
                             font-bold 
                             leading-[32px] sm:leading-[44px] md:leading-[56px] lg:leading-[80px]">
                Book Your Free 
                Demo Now!
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] font-jakarta 
                            text-[14px] sm:text-base font-normal 
                            leading-6 sm:leading-7 max-w-[422px]">
                Book your free demo today and explore our AI powered cloud contact center.
              </p>
              <motion.button 
                className="flex px-[16px] sm:px-[22px] py-2 sm:py-2.5 justify-center items-center gap-2.5 
                           rounded-lg border-[3px] sm:border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F] 
                           w-full sm:w-auto"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 84, 31, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-jakarta text-[14px] sm:text-base font-medium">Book Demo</span>
              </motion.button>
            </motion.div>

            {/* Right image */}
            <motion.img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/92300b6f390c6a53b8a306163d78a24bea11bfb8?width=700"
              alt="Chat bot illustration"
              className="w-[250px] sm:w-[300px] lg:w-[350px] 
                         h-[250px] sm:h-[300px] lg:h-[350px] 
                         flex-shrink-0 aspect-square order-first lg:order-last"
              initial={{ opacity: 0, x: 40, rotate: -10 }}
              animate={demoVisible ? { 
                opacity: 1, 
                x: 0, 
                rotate: 0,
                transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              } : {}}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
