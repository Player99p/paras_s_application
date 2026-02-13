import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[100px] py-3 sm:py-4 lg:py-[26px] bg-global-5 z-40">
      <div className="flex justify-between items-center w-full max-w-[1524px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          <img 
            src="/images/img_group_7.svg" 
            alt="Everlink Exim Logo" 
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px]"
          />
          <img 
            src="/images/img_everlink_exim.svg" 
            alt="Everlink Exim" 
            className="w-16 h-4 sm:w-20 sm:h-5 lg:w-[98px] lg:h-[22px]"
          />
        </div>

        {/* Hamburger Menu Icon (Mobile & tablet) */}
        <button 
          className="flex lg:hidden p-2.5 min-w-[44px] min-h-[44px] items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 right-0 lg:left-auto lg:right-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-0 lg:gap-11 p-4 sm:p-6 lg:p-0 border-t border-gray-100 lg:border-0">
            <button 
              role="menuitem" 
              className="font-poppins text-base sm:text-lg lg:text-base font-normal leading-6 py-3 lg:py-0 text-left text-primary hover:text-button transition-colors rounded-lg lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent min-h-[44px] lg:min-h-0"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </button>
            <button 
              role="menuitem" 
              className="font-poppins text-base sm:text-lg lg:text-base font-normal leading-6 py-3 lg:py-0 text-left text-primary hover:text-button transition-colors rounded-lg lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent min-h-[44px] lg:min-h-0"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </button>
            <button 
              role="menuitem" 
              className="font-poppins text-base sm:text-lg lg:text-base font-normal leading-6 py-3 lg:py-0 text-left text-primary hover:text-button transition-colors rounded-lg lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent min-h-[44px] lg:min-h-0"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </button>
            
            <div className="flex items-center gap-1 py-3 lg:py-0 mt-2 lg:mt-0 border-t border-gray-100 lg:border-0">
              <span className="font-poppins text-base lg:text-base font-normal leading-6 text-primary">EN</span>
              <img 
                src="/images/img_image_86.png" 
                alt="Language selector" 
                className="w-4 h-4 lg:w-5 lg:h-5"
              />
            </div>

            {/* Contact Button - visible in mobile/tablet menu */}
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
              <Button 
                variant="primary"
                className="w-full sm:w-auto bg-global-3 text-primary font-lato text-base font-bold leading-[22px] px-6 py-3.5 rounded-xl hover:bg-opacity-90 transition-all duration-200 min-h-[48px]"
                onClick={() => setMenuOpen(false)}
              >
                Contact Now
              </Button>
            </div>
          </div>
        </nav>

        {/* Contact Button - Desktop only */}
        <div className="hidden lg:block flex-shrink-0">
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