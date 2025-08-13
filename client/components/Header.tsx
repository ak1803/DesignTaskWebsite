import { Link } from "react-router-dom";
import { UserPlus, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-20">
      <div className="flex w-full px-4 sm:px-6 lg:px-[100px] py-6 lg:py-8 justify-between items-center max-w-[1440px] mx-auto">
        <Link to="/" className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[22px] font-jakarta">
          Clarivoice
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
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
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex px-2.5 py-2.5 justify-center items-center gap-2">
            <UserPlus className="w-5 h-5 text-white" strokeWidth={1.5} />
            <span className="text-white font-jakarta text-base font-medium">Sign up</span>
          </div>
          
          <button className="flex px-[22px] py-2.5 justify-center items-center gap-2.5 rounded-lg border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F]">
            <span className="text-white font-jakarta text-base font-medium">Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#010101] border-t border-[rgba(255,255,255,0.1)] z-10">
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
        </div>
      )}
    </header>
  );
}
