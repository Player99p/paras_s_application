import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-global-1 w-full mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] px-4 sm:px-6 md:px-8 lg:px-[84px] py-6 sm:py-8 lg:py-[118px]">
      <div className="w-full max-w-7xl mx-auto min-w-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-0 mb-8 sm:mb-10 lg:mb-[114px]">
          {/* Company Info Section */}
          <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 lg:gap-11 w-full lg:w-1/5">
            <img 
              src="/images/img_footer_logo.png" 
              alt="Everlink Exim Footer Logo" 
              className="w-32 h-24 sm:w-40 sm:h-28 lg:w-[206px] lg:h-[152px]"
            />
            <p className="font-inter text-sm sm:text-base font-normal leading-5 lg:leading-[19px] text-white text-center lg:text-justify max-w-full">
              At Everlink Exim, quality is our foundation and consistency is our commitment. We do not just export products—we deliver dependable solutions across borders. From spices to herbal and functional powders, we power global supply chains with precision.
            </p>
          </div>

          {/* Links and Contact Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-0 w-full lg:w-2/5 min-w-0">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9 w-full sm:w-auto">
              <h3 className="font-lato text-base sm:text-lg lg:text-2xl font-extrabold leading-6 sm:leading-7 lg:leading-[29px] text-white uppercase">
                Quick links
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <button className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[21px] text-white text-left hover:text-button transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center">
                  HOME
                </button>
                <button className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[21px] text-white text-left hover:text-button transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center">ABOUT US</button>
                <button className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[21px] text-white text-left hover:text-button transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center">PRODUCTS</button>
                <button className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[21px] text-white text-left hover:text-button transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center">CONTACT US</button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full sm:w-auto min-w-0">
              <h3 className="font-lato text-base sm:text-lg lg:text-2xl font-extrabold leading-6 sm:leading-7 lg:leading-[29px] text-white uppercase">
                Contact Us
              </h3>
              
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {/* Phone Numbers */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-[14px] min-w-0">
                  <img 
                    src="/images/img_vector_white_a700.svg" 
                    alt="Phone" 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px] flex-shrink-0 object-contain"
                  />
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-[10px] flex-wrap">
                    <span className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-white">+91</span>
                    <span className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-white">85114</span>
                    <span className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-white">14656</span>
                  </div>
                </div>

                {/* Alternative Phone */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-[14px] min-w-0">
                  <img 
                    src="/images/img_group.svg" 
                    alt="Phone" 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px] flex-shrink-0 object-contain"
                  />
                  <span className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-white break-all">
                    +91 85114 14656
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-[14px] min-w-0">
                  <img 
                    src="/images/img_frame_white_a700.svg" 
                    alt="Email" 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px] flex-shrink-0 object-contain"
                  />
                  <span className="font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-white break-all">
                    everlinkexim@gmail.com
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-start sm:justify-between items-center gap-3 sm:gap-4 w-full max-w-[200px]">
                <img 
                  src="/images/img_frame_white_a700_44x44.svg" 
                  alt="Instagram" 
                  className="size-10 lg:size-11 flex-shrink-0 object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img 
                  src="/images/img_frame_44x44.svg" 
                  alt="Facebook" 
                  className="size-10 lg:size-11 flex-shrink-0 object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img 
                  src="/images/img_layer_2.svg" 
                  alt="LinkedIn" 
                  className="size-10 lg:size-11 flex-shrink-0 object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
                <a href="https://x.com/EverlinkExim" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 size-10 lg:size-11 flex items-center justify-center">
                  <img 
                    src="/images/img_group_white_a700.svg" 
                    alt="X (Twitter)" 
                    className="w-full h-full object-contain hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-inter text-sm lg:text-base font-normal leading-5 lg:leading-5 text-white">
            Copyright © 2025 Everlink Exim. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;