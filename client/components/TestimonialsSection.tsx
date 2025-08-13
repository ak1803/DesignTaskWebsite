import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight } from "@/hooks/use-animations";

const testimonials = [
  {
    id: 1,
    name: "Roman Swift",
    location: "Rome, Italy",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3cc6fd13f75af40a7f03d15a0523180d97247d67?width=160",
    content: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "London, UK",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3cc6fd13f75af40a7f03d15a0523180d97247d67?width=160",
    content: "Incredible AI-powered solutions that transformed our contact center operations. The automation features saved us countless hours every day."
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Tokyo, Japan",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3cc6fd13f75af40a7f03d15a0523180d97247d67?width=160",
    content: "Clarivoice has revolutionized how we handle customer interactions. The AI insights help us make better data-driven decisions."
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation(0.1);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];
  
  return (
    <section className="w-full relative overflow-hidden py-[60px] sm:py-[80px] lg:py-[120px]">
      {/* Decorative rounded rectangles - hidden on mobile and tablet, visible on desktop */}
      <motion.div
        className="absolute hidden lg:block w-[393px] h-[141px] 
                   border-[23.447px] border-[#F6F6F6] rounded-[117.235px] 
                   left-[-196px] top-[100px] z-0"
        style={{ transform: 'rotate(90deg)' }}
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 90 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.div
        className="absolute hidden lg:block w-[527px] h-[184px] 
                   border-[23.447px] border-[#FF541F] rounded-[117.235px] 
                   right-[-263px] top-[200px] z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="relative z-10 flex flex-col items-center gap-[40px] sm:gap-[60px] lg:gap-[92px] 
                      w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-0">
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
            What our Client Says
          </motion.h2>
          
          <motion.div 
            className="flex flex-col items-start gap-4 sm:gap-6 w-full lg:w-auto"
            variants={slideInRight}
          >
            <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[398px]">
              <p className="text-[rgba(255,255,255,0.7)] font-jakarta 
                            text-[14px] sm:text-base font-normal 
                            leading-6 sm:leading-7 max-w-[422px]">
                Unlock the full potential of your creativity with our AI-powered design assistant.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={prevTestimonial}
                className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                           rounded-lg border border-[rgba(255,255,255,0.2)] 
                           hover:border-[#FF541F] transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 84, 31, 0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1.5} />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="flex w-10 sm:w-12 h-10 sm:h-12 justify-center items-center gap-2.5 
                           rounded-lg border border-[rgba(255,255,255,0.2)] 
                           hover:border-[#FF541F] transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 84, 31, 0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          ref={testimonialRef}
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={testimonialVisible ? { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
          } : {}}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[175px]"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.img
                src={current.avatar}
                alt={current.name}
                className="w-16 sm:w-20 h-16 sm:h-20 aspect-square rounded-xl sm:rounded-2xl 
                           border-[4px] sm:border-[7px] border-[rgba(246,246,246,0.15)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="flex flex-col items-center gap-1 w-full">
                <h3 className="text-white font-jakarta 
                               text-[20px] sm:text-[24px] lg:text-[28px] 
                               font-extrabold leading-normal text-center">
                  {current.name}
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] text-center font-jakarta 
                              text-[12px] sm:text-[14px] lg:text-base 
                              font-normal leading-normal">
                  {current.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div 
              key={`content-${currentTestimonial}`}
              className="flex flex-col items-center gap-2 w-full max-w-[672px] px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-[rgba(255,255,255,0.6)] text-center font-jakarta 
                            text-[14px] sm:text-base font-normal 
                            leading-6 sm:leading-8">
                {current.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial indicators */}
        <motion.div 
          className="flex items-center gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.3 }
          } : {}}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentTestimonial 
                  ? 'bg-[#FF541F]' 
                  : 'bg-[rgba(255,255,255,0.3)]'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
