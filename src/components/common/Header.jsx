import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-[100px] py-4 lg:py-[26px]">
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/img_group_7.svg" 
            alt="Everlink Exim Logo" 
            className="w-8 h-8 lg:w-[40px] lg:h-[40px]"
          />
          <img 
            src="/images/img_everlink_exim.svg" 
            alt="Everlink Exim" 
            className="w-16 h-4 lg:w-[98px] lg:h-[22px]"
          />
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button 
          className="block lg:hidden p-2" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-11 p-4 lg:p-0">
            <button 
              role="menuitem" 
              className="font-poppins text-sm lg:text-base font-normal leading-6 text-primary hover:text-button transition-colors"
            >
              Products
            </button>
            <button 
              role="menuitem" 
              className="font-poppins text-sm lg:text-base font-normal leading-6 text-primary hover:text-button transition-colors"
            >
              About Us
            </button>
            <button 
              role="menuitem" 
              className="font-poppins text-sm lg:text-base font-normal leading-6 text-primary hover:text-button transition-colors"
            >
              Contact Us
            </button>
            
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <span className="font-poppins text-sm lg:text-base font-normal leading-6 text-primary">EN</span>
              <img 
                src="/images/img_image_86.png" 
                alt="Language selector" 
                className="w-4 h-4 lg:w-5 lg:h-5"
              />
            </div>
          </div>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Button 
            variant="primary"
            className="bg-global-3 text-primary font-lato text-lg font-bold leading-[22px] px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-200"
          >
            Contact Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;