import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    country: '',
    products: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const productCategories = [
    {
      title: "Dehydrated Vegetable Powders",
      products: [
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        },
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        }
      ]
    },
    {
      title: "Spices & Masala Product",
      products: [
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        },
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        }
      ]
    },
    {
      title: "Herbal Powder",
      products: [
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        },
        {
          name: "Onion Powder & Flakes",
          image: "/images/img_gemini_generate.png"
        },
        {
          name: "Ginger Powder",
          image: "/images/img_gemini_generate_422x488.png"
        },
        {
          name: "Garlic Powder",
          image: "/images/img_gemini_generate_1.png"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: "/images/img_frame.svg",
      title: "Uncompromised Quality:",
      description: " Rigorous quality checks ensure every batch meets international standards."
    },
    {
      icon: "/images/img_frame.svg",
      title: "Wide Product Range:",
      description: " From onion and garlic powders to moringa and turmeric, we offer a diverse and customizable selection."
    },
    {
      icon: "/images/img_frame.svg",
      title: "Global Export Expertise:",
      description: " Smooth documentation, reliable logistics, and timely deliveries across the globe."
    },
    {
      icon: "/images/img_frame.svg",
      title: "Clean & Safe Processing:",
      description: " Hygienically processed and lab-tested for safety and shelf-life."
    },
    {
      icon: "/images/img_vector.svg",
      title: "Customer - Centric Approach:",
      description: " Flexible order quantities, responsive service, and long-term partnership focus."
    }
  ];

  const orderingSteps = [
    {
      icon: "/images/img_group_1948759429.svg",
      title: "Share Your Requirements",
      description: "Tell us your required products, quantity, packaging, destination port, and preferred Incoterm (FOB, CIF, etc.) so we can prepare the right offer."
    },
    {
      icon: "/images/img_group_1948759429_white_a700.svg",
      title: "Receive a Tailored Quotation",
      description: "Based on your input, we will provide a detailed proforma invoice including product cost, freight, insurance (if applicable), and documentation charges."
    },
    {
      icon: "/images/img_group_1948759429_white_a700_50x50.svg",
      title: "Confirm Payment & Delivery Terms",
      description: "Finalize the payment method (LC, TT, etc.), delivery schedule, and shipping terms. All export documents—Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, etc.—will be arranged as per requirements."
    },
    {
      icon: "/images/img_revenue_linere.svg",
      title: "Order Execution & Shipping",
      description: "We process and pack your order under strict quality control. Pre-shipment inspection can be arranged on request. Your goods will be shipped within 7–12 working days, and the Bill of Lading and export documents will be transferred securely for customs clearance and final delivery."
    }
  ];

  return (
    <div className="bg-global-5 w-full flex flex-col items-center">
      <Header />
      
      <div className="w-full max-w-[1524px] mx-auto px-4 sm:px-6 lg:px-[38px] flex flex-col gap-16 lg:gap-[98px]">
        {/* Hero Section */}
        <div 
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[24px] lg:rounded-[38px] overflow-hidden"
          style={{
            backgroundImage: "url('/images/img_33_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="relative z-10 flex items-end h-full p-6 sm:p-8 lg:p-[90px]">
            <div className="flex flex-col gap-6 lg:gap-[38px] w-full lg:w-[44%]">
              <img 
                src="/images/img_logo.svg" 
                alt="Everlink Exim Logo" 
                className="w-48 h-12 sm:w-64 sm:h-16 lg:w-[396px] lg:h-[94px] mx-auto lg:mx-0"
              />
              <h1 className="font-nanummyeongjo text-lg sm:text-xl lg:text-[25px] font-bold leading-6 sm:leading-7 lg:leading-[31px] text-center text-white">
                We export premium-quality dehydrated Vegetable powders and Spices
              </h1>
              <p className="font-nanummyeongjo text-lg sm:text-xl lg:text-[25px] font-bold leading-6 sm:leading-7 lg:leading-[31px] text-center text-white">
                delivering rich flavor and long shelf life for food manufacturers, wholesalers, and global culinary brands.
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories - First Category Only */}
        <div className="flex flex-col gap-8 lg:gap-[42px] w-full">
          <h2 className="font-nunito-sans text-2xl sm:text-3xl lg:text-[45px] font-semibold leading-8 sm:leading-10 lg:leading-[62px] text-primary">
            {productCategories[0].title}
          </h2>
          
          {/* Horizontal scrolling container */}
          <div className="relative">
            <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
              <div className="flex gap-4 sm:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[0].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-3 lg:gap-[14px] flex-shrink-0 w-64 sm:w-72 lg:w-[440px]">
                    <div className="relative w-full h-64 sm:h-80 lg:h-80 rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-xl sm:text-2xl lg:text-[34px] font-semibold leading-7 sm:leading-8 lg:leading-[47px] text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button 
                      variant="primary"
                      className="bg-global-3 text-primary font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-3 lg:py-[14px] px-6 lg:px-[34px] rounded-xl"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/img_group_88.svg" 
              alt="Decorative element" 
              className="w-32 h-6 lg:w-[216px] lg:h-[40px]"
            />
          </div>
        </div>

        {/* Why Choose Everlink Exim Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 w-full">
          <div className="w-full lg:w-[48%] relative">
            <div className="relative w-full h-64 sm:h-80 lg:h-[750px] rounded-[24px] overflow-hidden shadow-lg">
              <img 
                src="/images/img_22_1.png" 
                alt="Everlink Exim Products" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-global-2 rounded-[24px]"></div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full border border-white flex items-center justify-center hover:bg-opacity-90 transition-all">
                <img 
                  src="/images/img_group_1948759419.svg" 
                  alt="Play button" 
                  className="w-8 h-8 lg:w-12 lg:h-12"
                />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[46%] flex flex-col gap-6 lg:gap-8">
            <h2 className="font-lato text-2xl sm:text-3xl lg:text-[45px] font-bold leading-8 sm:leading-10 lg:leading-[54px] text-primary">
              <span className="text-2xl sm:text-3xl lg:text-[45px]">Why Choose</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-[90px] leading-10 sm:leading-12 lg:leading-[90px]">Everlink Exim ?</span>
            </h2>
            
            <p className="font-lato text-sm lg:text-base font-medium leading-5 lg:leading-[19px] text-primary mt-3">
              At Everlink Exim, we are committed to delivering premium-quality spices, herbal powders, and dehydrated vegetable powders sourced responsibly and processed with precision. Our focus on purity, consistency, and customer satisfaction makes us a trusted partner in global trade.
            </p>

            <div className="flex flex-col gap-4 lg:gap-6 mt-6 lg:mt-7">
              <h3 className="font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-primary">
                What sets us apart:
              </h3>
              
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 lg:gap-[14px] items-start">
                  <img 
                    src={benefit.icon} 
                    alt="Benefit icon" 
                    className="w-6 h-6 lg:w-[30px] lg:h-[30px] mt-1"
                  />
                  <p className="font-lato text-sm lg:text-lg font-normal leading-5 lg:leading-[21px] text-primary">
                    <span className="font-semibold text-button">{benefit.title}</span>
                    <span className="font-semibold">{benefit.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Product Category - After Why Choose Us */}
        <div className="flex flex-col gap-8 lg:gap-[42px] w-full">
          <h2 className="font-nunito-sans text-2xl sm:text-3xl lg:text-[45px] font-semibold leading-8 sm:leading-10 lg:leading-[62px] text-primary">
            {productCategories[1].title}
          </h2>
          
          {/* Horizontal scrolling container */}
          <div className="relative">
            <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
              <div className="flex gap-4 sm:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[1].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-3 lg:gap-[14px] flex-shrink-0 w-64 sm:w-72 lg:w-[440px]">
                    <div className="relative w-full h-64 sm:h-80 lg:h-80 rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-xl sm:text-2xl lg:text-[34px] font-semibold leading-7 sm:leading-8 lg:leading-[47px] text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button 
                      variant="primary"
                      className="bg-global-3 text-primary font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-3 lg:py-[14px] px-6 lg:px-[34px] rounded-xl"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/img_group_88.svg" 
              alt="Decorative element" 
              className="w-32 h-6 lg:w-[216px] lg:h-[40px]"
            />
          </div>
        </div>

        {/* Easy Ordering Section */}
        <div className="flex flex-col gap-8 lg:gap-[46px] w-full px-4 lg:px-4">
          <h2 className="font-lato text-2xl sm:text-3xl lg:text-[50px] font-bold leading-8 sm:leading-10 lg:leading-[61px] text-center text-secondary">
            Easy Ordering. Trusted Delivery.
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            <div className="w-full lg:w-[44%] flex flex-col gap-8 lg:gap-10">
              {orderingSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-3 lg:gap-[14px] items-start p-3 lg:p-3 ${index === 1 ? 'bg-global-4 rounded-xl' : ''}`}
                >
                  <div className="w-12 h-12 lg:w-[50px] lg:h-[50px] bg-global-3 rounded-[24px] flex items-center justify-center flex-shrink-0">
                    <img 
                      src={step.icon} 
                      alt="Step icon" 
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    />
                  </div>
                  <div className="flex flex-col gap-1 lg:gap-1">
                    <h3 className="font-lato text-lg lg:text-2xl font-bold leading-6 lg:leading-[29px] text-secondary">
                      {step.title}
                    </h3>
                    <p className="font-lato text-sm lg:text-lg font-normal leading-6 lg:leading-[27px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full lg:w-[48%]">
              <img 
                src="/images/img_image.png" 
                alt="Shipping and delivery" 
                className="w-full h-64 sm:h-80 lg:h-[750px] object-cover rounded-[18px]"
              />
            </div>
          </div>
        </div>

        {/* Third Product Category - After Easy Ordering */}
        <div className="flex flex-col gap-8 lg:gap-[42px] w-full">
          <h2 className="font-nunito-sans text-2xl sm:text-3xl lg:text-[45px] font-semibold leading-8 sm:leading-10 lg:leading-[62px] text-primary">
            {productCategories[2].title}
          </h2>
          
          {/* Horizontal scrolling container */}
          <div className="relative">
            <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
              <div className="flex gap-4 sm:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[2].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-3 lg:gap-[14px] flex-shrink-0 w-64 sm:w-72 lg:w-[440px]">
                    <div className="relative w-full h-64 sm:h-80 lg:h-80 rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-xl sm:text-2xl lg:text-[34px] font-semibold leading-7 sm:leading-8 lg:leading-[47px] text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button 
                      variant="primary"
                      className="bg-global-3 text-primary font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-3 lg:py-[14px] px-6 lg:px-[34px] rounded-xl"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/img_group_88.svg" 
              alt="Decorative element" 
              className="w-32 h-6 lg:w-[216px] lg:h-[40px]"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full">
          <div className="bg-global-1 rounded-[24px] p-4 sm:p-6 lg:p-[48px] shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[18px]">
              <div className="w-full lg:w-[56%] flex flex-col gap-6 lg:gap-8">
                <div className="relative">
                  <div className="absolute top-12 lg:top-[58px] left-0 w-full lg:w-[84%] h-16 lg:h-[88px] border border-white border-opacity-80 rounded-lg bg-global-6"></div>
                  <h2 className="relative font-lato text-2xl sm:text-3xl lg:text-[40px] font-bold leading-8 sm:leading-10 lg:leading-[48px] text-white">
                    <span className="text-2xl sm:text-3xl lg:text-[45px] leading-10 lg:leading-[48px]">Source Direct from</span>
                    <br />
                    <span className="text-4xl sm:text-5xl lg:text-[90px] leading-12 lg:leading-[90px]">Everlink Exim</span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-[45px] leading-12 lg:leading-[64px]">Your B2B Partner in Dehydrated</span>
                    <span className="text-2xl sm:text-3xl lg:text-[45px] leading-10 lg:leading-[48px]"> Powders & Spices</span>
                  </h2>
                </div>
                
                <p className="font-lato text-sm lg:text-base font-medium leading-5 lg:leading-[19px] text-white mt-3 lg:mt-[14px] ml-0 lg:ml-[10px]">
                  Premium-Grade Ingredients. Global Export Expertise. Trusted by Food Industry Leaders.
                </p>
                
                <div className="flex flex-col gap-4 lg:gap-5 mt-6 lg:mt-[36px]">
                  <p className="font-lato text-sm lg:text-lg font-normal leading-5 lg:leading-[21px] text-white">
                    Everlink Exim specializes in bulk exports of dehydrated vegetable powders like onion, garlic, and ginger, as well as high-purity spice and herbal powders including cumin, cloves, and cinnamon.
                  </p>
                  <p className="font-lato text-sm lg:text-lg font-normal leading-5 lg:leading-[21px] text-white">
                    We cater to importers, food processors, and B2B distributors with stringent quality demands and consistent delivery schedules.
                  </p>
                  <p className="font-lato text-sm lg:text-lg font-normal leading-5 lg:leading-[21px] text-white">
                    Let us know your requirements, and we will get back to you with a tailored quote and product specifications.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[44%]">
                <div className="bg-global-3 border border-white rounded-[24px] p-4 lg:p-[24px]">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-4">
                    <h3 className="font-lato text-lg lg:text-[22px] font-medium italic leading-6 lg:leading-[27px] text-white">
                      Get a Tailored Quote or Product Info Packet
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                      <EditText
                        placeholder="Name..."
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full"
                      />
                      <EditText
                        placeholder="Company Name..."
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    <EditText
                      placeholder="Business Email..."
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    
                    <div className="flex gap-2">
                      <EditText
                        placeholder="+91"
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange('countryCode', e.target.value)}
                        className="w-20"
                      />
                      <EditText
                        placeholder="Phone Number..."
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    
                    <EditText
                      placeholder="Country of Import"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    />
                    
                    <EditText
                      placeholder="Products of Interest..."
                      value={formData.products}
                      onChange={(e) => handleInputChange('products', e.target.value)}
                    />
                    
                    <TextArea
                      placeholder="Message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                    />
                    
                    <Button 
                      type="submit"
                      variant="primary"
                      className="bg-global-1 text-button font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-3 lg:py-[14px] px-6 lg:px-[34px] rounded-xl mt-3 lg:mt-5"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;