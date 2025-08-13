import { ArrowRight, UserPlus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from "@/hooks/use-animations";

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[854px] overflow-hidden">
      {/* Full-width background image */}
      <motion.img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/c4d2771471b19c01bda13959efafb14078ef7fc0?width=3849" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Hero Background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Navigation Header integrated into hero */}
      <motion.header 
        className="absolute top-0 left-0 w-full z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex w-full px-4 sm:px-6 lg:px-[100px] py-6 lg:py-8 justify-between items-center max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/" className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[22px] font-jakarta">
              Clarivoice
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-8">
              <div className="flex px-2.5 py-2.5 justify-center items-center gap-2.5 relative">
                <span className="text-white font-jakarta text-base font-normal">About</span>
                <div className="absolute -bottom-0 left-2.5 w-[19px] h-[3px] rounded-[10px] bg-[#FF541F]"></div>
              </div>
              <div className="flex px-2.5 py-2.5 justify-center items-center gap-2.5">
                <span className="text-white font-jakarta text-base font-normal">Pricing</span>
              </div>
              <div className="flex px-2.5 py-2.5 justify-center items-center gap-2.5">
                <span className="text-white font-jakarta text-base font-normal">Blog</span>
              </div>
              <div className="flex px-2.5 py-2.5 justify-center items-center gap-2.5">
                <span className="text-white font-jakarta text-base font-normal">Contact</span>
              </div>
            </div>
          </motion.nav>

          {/* Desktop Auth Buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex px-2.5 py-2.5 justify-center items-center gap-2">
              <UserPlus className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-white font-jakarta text-base font-medium">Sign up</span>
            </div>
            
            <motion.button 
              className="flex px-[22px] py-2.5 justify-center items-center gap-2.5 rounded-lg border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-jakarta text-base font-medium">Login</span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full bg-[rgba(1,1,1,0.9)] backdrop-blur-md border-t border-[rgba(255,255,255,0.1)] z-10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-4 py-6 gap-4 max-w-[1440px] mx-auto">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-4">
                <div className="flex px-4 py-3 justify-start items-center">
                  <span className="text-white font-jakarta text-base font-normal">About</span>
                </div>
                <div className="flex px-4 py-3 justify-start items-center">
                  <span className="text-white font-jakarta text-base font-normal">Pricing</span>
                </div>
                <div className="flex px-4 py-3 justify-start items-center">
                  <span className="text-white font-jakarta text-base font-normal">Blog</span>
                </div>
                <div className="flex px-4 py-3 justify-start items-center">
                  <span className="text-white font-jakarta text-base font-normal">Contact</span>
                </div>
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                <div className="flex px-4 py-3 justify-start items-center gap-2">
                  <UserPlus className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span className="text-white font-jakarta text-base font-medium">Sign up</span>
                </div>
                
                <button className="flex px-[22px] py-2.5 justify-center items-center gap-2.5 rounded-lg border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F] w-full">
                  <span className="text-white font-jakarta text-base font-medium">Login</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] pt-24 sm:pt-28 lg:pt-32 h-full items-center justify-center">
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:gap-5 w-full max-w-[677px] mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main heading */}
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 w-full text-center" variants={staggerItem}>
            <motion.h1 
              className="w-full text-[#FF541F] text-center font-jakarta 
                         text-[32px] sm:text-[48px] md:text-[64px] lg:text-[88px] 
                         font-extrabold leading-tight lg:leading-normal"
              variants={staggerItem}
            >
              Clarivoice
            </motion.h1>
            <motion.h2 
              className="w-full text-white text-center font-jakarta 
                         text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] 
                         font-bold leading-tight lg:leading-normal"
              variants={staggerItem}
            >
              AI-powered Cloud Contact Center
            </motion.h2>
          </motion.div>

          {/* Description and CTA */}
          <motion.div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-[621px] px-4 sm:px-0" variants={staggerItem}>
            <motion.p 
              className="text-[rgba(255,255,255,0.7)] text-center font-jakarta 
                        text-[14px] sm:text-base font-normal leading-6 sm:leading-7 
                        max-w-[500px] lg:max-w-none"
              variants={staggerItem}
            >
              Our AI-powered Cloud Contact Center empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
              variants={staggerItem}
            >
              <motion.button 
                className="flex px-[16px] sm:px-[22px] py-2 sm:py-2.5 justify-center items-center gap-2.5 
                           rounded-lg border-[3px] sm:border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F] 
                           w-full sm:w-auto min-w-[180px] sm:min-w-[200px]"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 84, 31, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-jakarta text-[14px] sm:text-base font-medium">Explore The Journey</span>
              </motion.button>
              
              <motion.button 
                className="flex px-[16px] sm:px-[22px] py-2 sm:py-2.5 justify-center items-center gap-2.5 
                           rounded-lg border-[1.5px] border-white w-full sm:w-auto min-w-[140px] sm:min-w-[160px]"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-jakarta text-[14px] sm:text-base font-medium">More Details</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
