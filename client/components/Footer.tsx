import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/use-animations";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <motion.footer 
      ref={ref}
      className="w-full"
      initial={{ opacity: 0 }}
      animate={isVisible ? { 
        opacity: 1,
        transition: { duration: 0.8 }
      } : {}}
    >
      {/* Main footer content */}
      <div className="w-full bg-[#212121]">
        <motion.div 
          className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-[100px] py-[40px] sm:py-[50px] lg:py-[60px] 
                      justify-between items-start w-full max-w-[1440px] mx-auto 
                      gap-8 sm:gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          
          {/* Company info */}
          <motion.div 
            className="flex flex-col items-start gap-3 sm:gap-4 max-w-[307px] w-full lg:w-auto"
            variants={staggerItem}
          >
            <motion.h3 
              className="text-white font-jakarta 
                         text-[18px] sm:text-[20px] lg:text-[22px] 
                         font-bold leading-normal"
              whileHover={{ scale: 1.05, color: "#FF541F" }}
            >
              Clarivoice
            </motion.h3>
            <p className="text-[rgba(255,255,255,0.7)] font-jakarta 
                          text-[14px] sm:text-base font-normal 
                          leading-6 sm:leading-7">
              Our AI-powered Cloud Contact Center empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions.
            </p>
          </motion.div>

          {/* Footer Links Grid - Mobile: 2 columns, Desktop: 3 columns */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 w-full lg:w-auto"
            variants={staggerContainer}
          >
            
            {/* Useful Links */}
            <motion.div 
              className="flex flex-col items-start gap-3 sm:gap-4"
              variants={staggerItem}
            >
              <h4 className="text-[#FF541F] font-jakarta 
                             text-[16px] sm:text-[18px] lg:text-xl 
                             font-bold leading-[140%] tracking-[-0.477px]">
                Useful Links
              </h4>
              <div className="flex flex-col justify-center items-start gap-1">
                {['About', 'Pricing', 'Blog', 'Contact'].map((link, index) => (
                  <motion.div 
                    key={link}
                    className="flex px-0 py-2 sm:py-2.5 pr-2.5 justify-center items-center gap-2.5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5, delay: 0.5 + (index * 0.1) }
                    } : {}}
                  >
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-[rgba(255,255,255,0.7)] font-jakarta 
                                 text-[14px] sm:text-base font-medium leading-normal 
                                 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Help */}
            <motion.div 
              className="flex flex-col items-start gap-3 sm:gap-4"
              variants={staggerItem}
            >
              <h4 className="text-[#FF541F] font-jakarta 
                             text-[16px] sm:text-[18px] lg:text-xl 
                             font-bold leading-[140%] tracking-[-0.477px]">
                Help
              </h4>
              <div className="flex flex-col justify-center items-start gap-1">
                {[
                  { label: 'Customer Support', path: '/support' },
                  { label: 'Terms & Conditions', path: '/terms' },
                  { label: 'Privacy Policy', path: '/privacy' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="flex px-0 py-2 sm:py-2.5 pr-2.5 justify-center items-center gap-2.5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5, delay: 0.7 + (index * 0.1) }
                    } : {}}
                  >
                    <Link 
                      to={item.path} 
                      className="text-[rgba(255,255,255,0.7)] font-jakarta 
                                 text-[14px] sm:text-base font-medium leading-normal 
                                 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connect With Us */}
            <motion.div 
              className="flex flex-col items-start gap-3 sm:gap-4 col-span-1 sm:col-span-2 lg:col-span-1"
              variants={staggerItem}
            >
              <h4 className="text-[#FF541F] font-jakarta 
                             text-[16px] sm:text-[18px] lg:text-xl 
                             font-bold leading-[140%] tracking-[-0.477px]">
                Connect With Us
              </h4>
              <div className="flex flex-col justify-center items-start gap-1">
                <motion.div 
                  className="flex px-0 py-2 sm:py-2.5 pr-2.5 justify-center items-center gap-2.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: 1.0 }
                  } : {}}
                >
                  <p className="text-[rgba(255,255,255,0.7)] font-jakarta 
                                text-[14px] sm:text-base font-medium 
                                leading-6 sm:leading-7">
                    27, Division St, New York, NY<br />
                    100032, USA
                  </p>
                </motion.div>
                <motion.div 
                  className="flex px-0 py-2 sm:py-2.5 pr-2.5 justify-center items-center gap-2.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: 1.1 }
                  } : {}}
                >
                  <motion.a 
                    href="tel:+12345647890" 
                    className="text-[rgba(255,255,255,0.7)] font-jakarta 
                               text-[14px] sm:text-base font-medium leading-normal 
                               hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    +123 456 4789
                  </motion.a>
                </motion.div>
                <motion.div 
                  className="flex px-0 py-2 sm:py-2.5 pr-2.5 justify-center items-center gap-2.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: 1.2 }
                  } : {}}
                >
                  <motion.a 
                    href="mailto:username@mail.com" 
                    className="text-[rgba(255,255,255,0.7)] font-jakarta 
                               text-[14px] sm:text-base font-medium leading-normal 
                               hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    username@mail.com
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright bar */}
      <motion.div 
        className="w-full bg-[#FF541F]"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: 1.3 }
        } : {}}
      >
        <div className="flex px-4 sm:px-6 lg:px-[100px] py-3 justify-center items-center gap-2.5 
                        w-full max-w-[1440px] mx-auto">
          <motion.p 
            className="text-[#010101] font-jakarta 
                      text-[12px] sm:text-[14px] lg:text-base 
                      font-normal leading-[150%] text-center"
            whileHover={{ scale: 1.02 }}
          >
            Copyright © Clarivoice 2024. All Right Reserved.
          </motion.p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
