import React, { useState, useRef, useCallback, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const [errors, setErrors] = useState({
    name: '',
    companyName: '',
    email: '',
    countryCode: '',
    phone: '',
    country: '',
    products: '',
    message: ''
  });

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    if (!EMAIL_REGEX.test(email.trim())) return 'Please enter a valid email address';
    return '';
  };

  const validateField = (field, value) => {
    let message = '';
    switch (field) {
      case 'name':
        message = !value.trim() ? 'Name is required' : '';
        break;
      case 'email':
        message = validateEmail(value);
        break;
      case 'countryCode':
        if (value && !/^\+?[0-9]*$/.test(value)) message = 'Country code can only contain + and numbers';
        break;
      case 'phone':
        if (value && !/^[0-9]*$/.test(value)) message = 'Phone number can only contain numbers';
        else if (!value.trim()) message = 'Phone number is required';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [field]: message }));
    return message;
  };

  const validateAll = () => {
    const newErrors = {
      name: !formData.name.trim() ? 'Name is required' : '',
      email: validateEmail(formData.email),
      countryCode: formData.countryCode && !/^\+?[0-9]*$/.test(formData.countryCode) ? 'Country code can only contain + and numbers' : '',
      phone: !formData.phone.trim() ? 'Phone number is required' : (formData.phone && !/^[0-9]*$/.test(formData.phone) ? 'Phone number can only contain numbers' : ''),
      companyName: '',
      country: '',
      products: '',
      message: ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleInputChange = (field, value) => {
    if (field === 'countryCode') {
      value = value.replace(/[^\d+]/g, '');
      if (value.length > 4) value = value.slice(0, 4);
    } else if (field === 'phone') {
      value = value.replace(/\D/g, '');
      if (value.length > 15) value = value.slice(0, 15);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
    if (['name', 'email', 'countryCode', 'phone'].includes(field)) validateField(field, value);
  };

  const handleBlur = (field) => {
    validateField(field, formData[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    console.log('Form submitted:', formData);
  };

  const sliderRef0 = useRef(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const scrollSlider = useCallback((sliderRef, direction) => {
    const el = sliderRef?.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    const offset = direction === 'left' ? -scrollAmount : scrollAmount;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  }, []);

  // Inquiry Modal State
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryData, setInquiryData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
    quantity: '',
    destinationPort: ''
  });

  const [inquiryErrors, setInquiryErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phone: '',
    message: '',
    quantity: '',
    destinationPort: ''
  });

  const validateInquiryEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    if (!EMAIL_REGEX.test(email.trim())) return 'Please enter a valid email address';
    return '';
  };

  const validateInquiryField = (field, value) => {
    let message = '';
    switch (field) {
      case 'firstName':
        message = !value.trim() ? 'First name is required' : '';
        break;
      case 'lastName':
        message = !value.trim() ? 'Last name is required' : '';
        break;
      case 'email':
        message = validateInquiryEmail(value);
        break;
      case 'countryCode':
        if (value && !/^\+?[0-9]*$/.test(value)) message = 'Country code can only contain + and numbers';
        break;
      case 'phone':
        if (value && !/^[0-9]*$/.test(value)) message = 'Phone number can only contain numbers';
        else if (!value.trim()) message = 'Phone number is required';
        break;
      case 'quantity':
        message = !value.trim() ? 'Quantity is required' : '';
        break;
      case 'destinationPort':
        message = !value.trim() ? 'Destination port is required' : '';
        break;
      default:
        break;
    }
    setInquiryErrors(prev => ({ ...prev, [field]: message }));
    return message;
  };

  const validateInquiryAll = () => {
    const newErrors = {
      firstName: !inquiryData.firstName.trim() ? 'First name is required' : '',
      lastName: !inquiryData.lastName.trim() ? 'Last name is required' : '',
      email: validateInquiryEmail(inquiryData.email),
      countryCode: inquiryData.countryCode && !/^\+?[0-9]*$/.test(inquiryData.countryCode) ? 'Country code can only contain + and numbers' : '',
      phone: !inquiryData.phone.trim() ? 'Phone number is required' : (inquiryData.phone && !/^[0-9]*$/.test(inquiryData.phone) ? 'Phone number can only contain numbers' : ''),
      message: '',
      quantity: !inquiryData.quantity.trim() ? 'Quantity is required' : '',
      destinationPort: !inquiryData.destinationPort.trim() ? 'Destination port is required' : ''
    };
    setInquiryErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleInquiryInputChange = (field, value) => {
    if (field === 'countryCode') {
      value = value.replace(/[^\d+]/g, '');
      if (value.length > 4) value = value.slice(0, 4);
    } else if (field === 'phone') {
      value = value.replace(/\D/g, '');
      if (value.length > 15) value = value.slice(0, 15);
    }
    setInquiryData(prev => ({ ...prev, [field]: value }));
    if (['firstName', 'lastName', 'email', 'countryCode', 'phone', 'quantity', 'destinationPort'].includes(field)) {
      validateInquiryField(field, value);
    }
  };

  const handleInquiryBlur = (field) => {
    validateInquiryField(field, inquiryData[field]);
  };

  const openInquiryModal = (productName) => {
    setSelectedProduct(productName);
    setIsInquiryModalOpen(true);
    // Reset form when opening
    setInquiryData({
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: '',
      quantity: '',
      destinationPort: ''
    });
    setInquiryErrors({
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '',
      phone: '',
      message: '',
      quantity: '',
      destinationPort: ''
    });
  };

  const closeInquiryModal = useCallback(() => {
    setIsInquiryModalOpen(false);
    setSelectedProduct(null);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!validateInquiryAll()) return;
    console.log('Inquiry submitted:', { product: selectedProduct, ...inquiryData });
    closeInquiryModal();
  };

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    if (isInquiryModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          closeInquiryModal();
        }
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isInquiryModalOpen, closeInquiryModal]);

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
          name: "Tomato Powder",
          image: "/images/tomato_powder.png"
        },
        {
          name: "Spinach Powder",
          image: "/images/spinach_powder.png"
        },
        {
          name: "Beetroot Powder",
          image: "/images/beetroot_powder.png"
        }
      ]
    },
    {
      title: "Spices & Masala Product",
      products: [
        {
          name: "Turmeric Powder",
          image: "/images/turmeric_powder.png"
        },
        {
          name: "Chilli Powder",
          image: "/images/chilli_powder.png"
        },
        {
          name: "Coriander Powder",
          image: "/images/coriander_powder.png"
        },
        {
          name: "Cumin Seed Powder",
          image: "/images/cumin_powder.png"
        },
        {
          name: "Black Pepper Powder",
          image: "/images/black_pepper_powder.png"
        },
        {
          name: "Cinnamon Powder",
          image: "/images/cinnamon_powder.png"
        }
      ]
    },
    {
      title: "Herbal Powder",
      products: [
        {
          name: "Amla Powder",
          image: "/images/amla_powder.png"
        },
        {
          name: "Moringa Powder",
          image: "/images/moringa_powder.png"
        },
        {
          name: "Tulsi Powder",
          image: "/images/tulsi_powder.png"
        },
        {
          name: " Neem Powder",
          image: "/images/neem_powder.png"
        },
        {
          name: "Ashwagandha Powder",
          image: "/images/ashwagandha_powder.png"
        },
        {
          name: "Brahmi Powder",
          image: "/images/brahmi_powder.png"
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
      icon: "/images/img_frame.svg",
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
    <div className="bg-global-5 w-full min-w-0 flex flex-col items-center overflow-x-hidden">
      <Header />

      <div className="w-full max-w-[1524px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[38px] flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[98px]">
        {/* Hero Section */}
        <div
          className="relative w-full h-[340px] sm:h-[450px] md:h-[520px] lg:h-[600px] rounded-2xl sm:rounded-[24px] lg:rounded-[38px] overflow-hidden"
          style={{
            backgroundImage: "url('/images/img_33_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="relative z-10 flex items-end h-full p-4 sm:p-6 md:p-8 lg:p-[90px]">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-[38px] w-full lg:w-[44%]">
              <img
                src="/images/img_logo.svg"
                alt="Everlink Exim Logo"
                className="w-36 h-9 sm:w-48 sm:h-12 md:w-56 md:h-14 lg:w-[396px] lg:h-[94px] mx-auto lg:mx-0 flex-shrink-0"
              />
              <h1 className="font-nanummyeongjo text-base sm:text-lg md:text-xl lg:text-[25px] font-normal leading-5 sm:leading-6 lg:leading-[31px] text-center text-white max-w-full">
                We export premium-quality dehydrated Vegetable powders and Spices
              </h1>
              <p className="font-nanummyeongjo text-sm sm:text-base md:text-lg lg:text-[25px] font-normal leading-5 sm:leading-6 lg:leading-[31px] text-center text-white max-w-full">
                delivering rich flavor and long shelf life for food manufacturers, wholesalers, and global culinary brands.
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories - First Category Only */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[42px] w-full min-w-0">
          <h2 className="font-nunito-sans text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-semibold leading-7 sm:leading-8 md:leading-10 lg:leading-[62px] text-primary">
            {productCategories[0].title}
          </h2>

          {/* Horizontal scrolling container */}
          <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
            <div ref={sliderRef0} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory touch-pan-x">
              <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[0].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-2 sm:gap-3 lg:gap-[14px] flex-shrink-0 w-[260px] sm:w-72 md:w-[360px] lg:w-[440px] snap-start">
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-base sm:text-xl md:text-2xl lg:text-[34px] font-semibold leading-5 sm:leading-7 lg:leading-[47px] text-white line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => openInquiryModal(product.name)}
                      className="bg-global-3 text-primary font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-2.5 sm:py-3 lg:py-[14px] px-4 sm:px-6 lg:px-[34px] rounded-xl min-h-[44px]"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-4 w-6 sm:w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>

          <div className="flex justify-center items-center gap-2 sm:gap-1">
            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef0, 'left')} aria-label="Scroll products left">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_left.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_left_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>

            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef0, 'right')} aria-label="Scroll products right">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_right.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_right_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Why Choose Everlink Exim Section */}
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-0 w-full min-w-0">
          <div className="w-full lg:w-[48%] relative order-2 lg:order-1">
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[750px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg">
              <img
                src="/images/img_22_1.png"
                alt="Everlink Exim Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-global-2 rounded-[24px]"></div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full border border-white flex items-center justify-center hover:bg-opacity-90 transition-all min-w-[56px] min-h-[56px]" aria-label="Play video">
                <img
                  src="/images/img_group_1948759419.svg"
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
                />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[46%] flex flex-col gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2">
            <h2 className="font-lato text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold leading-7 sm:leading-8 md:leading-10 lg:leading-[54px] text-primary">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-[45px]">Why Choose</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] leading-9 sm:leading-10 md:leading-12 lg:leading-[90px]">Everlink Exim ?</span>
            </h2>

            <p className="font-lato text-sm sm:text-base font-medium leading-5 lg:leading-[19px] text-primary mt-2 sm:mt-3">
              At Everlink Exim, we are committed to delivering premium-quality spices, herbal powders, and dehydrated vegetable powders sourced responsibly and processed with precision. Our focus on purity, consistency, and customer satisfaction makes us a trusted partner in global trade.
            </p>

            <div className="flex flex-col gap-4 lg:gap-6 mt-6 lg:mt-7">
              <h3 className="font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] text-primary">
                What sets us apart:
              </h3>

              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 lg:gap-[14px] items-start min-w-0">
                  <img
                    src={benefit.icon}
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px] mt-0.5 flex-shrink-0"
                  />
                  <p className="font-lato text-sm sm:text-base lg:text-lg font-normal leading-5 lg:leading-[21px] text-primary min-w-0">
                    <span className="font-semibold text-button">{benefit.title}</span>
                    <span className="font-semibold">{benefit.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Product Category - After Why Choose Us */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[42px] w-full min-w-0">
          <h2 className="font-nunito-sans text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-semibold leading-7 sm:leading-8 md:leading-10 lg:leading-[62px] text-primary">
            {productCategories[1].title}
          </h2>

          {/* Horizontal scrolling container */}
          <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
            <div ref={sliderRef1} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory touch-pan-x">
              <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[1].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-2 sm:gap-3 lg:gap-[14px] flex-shrink-0 w-[260px] sm:w-72 md:w-[360px] lg:w-[440px] snap-start">
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-base sm:text-xl md:text-2xl lg:text-[34px] font-semibold leading-5 sm:leading-7 lg:leading-[47px] text-white line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => openInquiryModal(product.name)}
                      className="bg-global-3 text-primary font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-2.5 sm:py-3 lg:py-[14px] px-4 sm:px-6 lg:px-[34px] rounded-xl min-h-[44px]"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-4 w-6 sm:w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>

           <div className="flex justify-center items-center gap-2 sm:gap-1">
            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef1, 'left')} aria-label="Scroll products left">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_left.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_left_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>

            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef1, 'right')} aria-label="Scroll products right">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_right.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_right_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Easy Ordering Section */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[46px] w-full min-w-0">
          <h2 className="font-lato text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-7 sm:leading-8 md:leading-10 lg:leading-[61px] text-center text-secondary px-2">
            Easy Ordering. Trusted Delivery.
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-0">
            <div className="w-full lg:w-[44%] flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {orderingSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-3 sm:gap-4 lg:gap-[14px] items-start p-3 sm:p-4 lg:p-3 ${index === 1 ? 'bg-global-4 rounded-xl' : ''}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] bg-global-3 rounded-xl sm:rounded-[24px] flex items-center justify-center flex-shrink-0 min-w-[40px] min-h-[40px]">
                    <img
                      src={step.icon}
                      alt=""
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-lato text-base sm:text-lg lg:text-2xl font-bold leading-5 sm:leading-6 lg:leading-[29px] text-secondary">
                      {step.title}
                    </h3>
                    <p className="font-lato text-sm sm:text-base lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-[27px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[48%] min-w-0">
              <img
                src="/images/img_image.png"
                alt="Shipping and delivery"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-[750px] object-cover rounded-2xl sm:rounded-[18px]"
              />
            </div>
          </div>
        </div>

        {/* Third Product Category - After Easy Ordering */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[42px] w-full min-w-0">
          <h2 className="font-nunito-sans text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-semibold leading-7 sm:leading-8 md:leading-10 lg:leading-[62px] text-primary">
            {productCategories[2].title}
          </h2>

          {/* Horizontal scrolling container */}
          <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
            <div ref={sliderRef2} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory touch-pan-x">
              <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[30px] min-w-max">
                {productCategories[2].products.map((product, productIndex) => (
                  <div key={productIndex} className="flex flex-col gap-2 sm:gap-3 lg:gap-[14px] flex-shrink-0 w-[260px] sm:w-72 md:w-[360px] lg:w-[440px] snap-start">
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4 lg:p-5 rounded-xl">
                        <h3 className="font-nunito-sans text-base sm:text-xl md:text-2xl lg:text-[34px] font-semibold leading-5 sm:leading-7 lg:leading-[47px] text-white line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => openInquiryModal(product.name)}
                      className="bg-global-3 text-primary font-lato text-sm sm:text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-2.5 sm:py-3 lg:py-[14px] px-4 sm:px-6 lg:px-[34px] rounded-xl min-h-[44px]"
                    >
                      Inquire Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-4 w-6 sm:w-8 bg-gradient-to-l from-global-5 to-transparent pointer-events-none"></div>
          </div>

          <div className="flex justify-center items-center gap-2 sm:gap-1">
            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef2, 'left')} aria-label="Scroll products left">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_left.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_left_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>

            <button type="button" className="min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => scrollSlider(sliderRef2, 'right')} aria-label="Scroll products right">
              <div className="group relative w-fit">
                <img
                  src="/images/arrow_right.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/arrow_right_hover.svg"
                  alt=""
                  className="h-6 lg:h-[40px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full min-w-0">
          <div className="bg-global-1 rounded-2xl sm:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-[48px] shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[18px]">
              <div className="w-full lg:w-[56%] flex flex-col gap-4 sm:gap-6 lg:gap-8 min-w-0">
                <div className="relative">
                  <div className="absolute top-8 sm:top-10 md:top-12 lg:top-[58px] left-0 w-full lg:w-[84%] h-12 sm:h-14 md:h-16 lg:h-[88px] border border-white border-opacity-80 rounded-lg bg-global-6"></div>
                  <h2 className="relative font-lato text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-7 sm:leading-8 md:leading-10 lg:leading-[48px] text-white break-words">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] leading-8 sm:leading-9 md:leading-10 lg:leading-[48px]">Source Direct from</span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[90px] leading-9 sm:leading-10 md:leading-12 lg:leading-[90px]">Everlink Exim</span>
                    <br />
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] leading-8 sm:leading-10 lg:leading-[64px]">Your B2B Partner in Dehydrated</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] leading-8 sm:leading-10 lg:leading-[48px]"> Powders & Spices</span>
                  </h2>
                </div>

                <p className="font-lato text-sm sm:text-base font-medium leading-5 lg:leading-[19px] text-white mt-2 sm:mt-3 lg:mt-[14px] ml-0 lg:ml-[10px]">
                  Premium-Grade Ingredients. Global Export Expertise. Trusted by Food Industry Leaders.
                </p>

                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 mt-4 sm:mt-6 lg:mt-[36px]">
                  <p className="font-lato text-sm sm:text-base lg:text-lg font-normal leading-5 lg:leading-[21px] text-white">
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

              <div className="w-full lg:w-[44%] min-w-0">
                <div className="bg-global-3 border border-white rounded-2xl sm:rounded-[24px] p-4 sm:p-5 lg:p-[24px]">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
                    <h3 className="font-lato text-base sm:text-lg lg:text-[22px] font-medium italic leading-5 sm:leading-6 lg:leading-[27px] text-white">
                      Get a Tailored Quote or Product Info Packet
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                      <EditText
                        placeholder="Name..."
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className="w-full"
                        error={errors.name}
                      />
                      <EditText
                        placeholder="Company Name..."
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        onBlur={() => handleBlur('companyName')}
                        className="w-full"
                        error={errors.companyName}
                      />
                    </div>

                    <EditText
                      placeholder="Business Email..."
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      error={errors.email}
                    />

                    <div className="flex gap-2">
                      <div className="flex-none w-14 sm:w-16 min-w-0">
                        <EditText
                          placeholder="+91"
                          value={formData.countryCode}
                          onChange={(e) => handleInputChange('countryCode', e.target.value)}
                          onBlur={() => handleBlur('countryCode')}
                          error={errors.countryCode}
                          inputMode="tel"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <EditText
                          placeholder="Phone Number..."
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          error={errors.phone}
                          inputMode="numeric"
                        />
                      </div>
                    </div>

                    <EditText
                      placeholder="Country of Import"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      onBlur={() => handleBlur('country')}
                      error={errors.country}
                    />

                    <EditText
                      placeholder="Products of Interest..."
                      value={formData.products}
                      onChange={(e) => handleInputChange('products', e.target.value)}
                      onBlur={() => handleBlur('products')}
                      error={errors.products}
                    />

                    <TextArea
                      placeholder="Message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      rows={4}
                      error={errors.message}
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

      {/* Inquiry Modal */}
      {isInquiryModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black bg-opacity-50 overflow-y-auto"
          onClick={closeInquiryModal}
        >
          <div 
            className="bg-global-5 rounded-2xl sm:rounded-[24px] p-4 sm:p-6 lg:p-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl my-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-3 mb-4 sm:mb-6">
              <h2 className="font-lato text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold leading-6 sm:leading-7 lg:leading-[34px] text-secondary break-words pr-2">
                Inquire about {selectedProduct}
              </h2>
              <button
                onClick={closeInquiryModal}
                className="flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center text-secondary hover:text-primary transition-colors text-2xl lg:text-3xl font-bold leading-none rounded-lg hover:bg-gray-100"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4 lg:gap-5">
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                <EditText
                  placeholder="First Name..."
                  value={inquiryData.firstName}
                  onChange={(e) => handleInquiryInputChange('firstName', e.target.value)}
                  onBlur={() => handleInquiryBlur('firstName')}
                  error={inquiryErrors.firstName}
                  className="w-full !bg-gray-100"
                />
                <EditText
                  placeholder="Last Name..."
                  value={inquiryData.lastName}
                  onChange={(e) => handleInquiryInputChange('lastName', e.target.value)}
                  onBlur={() => handleInquiryBlur('lastName')}
                  error={inquiryErrors.lastName}
                  className="w-full !bg-gray-100"
                />
              </div>

              <EditText
                placeholder="Email ID..."
                type="email"
                value={inquiryData.email}
                onChange={(e) => handleInquiryInputChange('email', e.target.value)}
                onBlur={() => handleInquiryBlur('email')}
                error={inquiryErrors.email}
                className="!bg-gray-100"
              />

              <div className="flex gap-2">
                <div className="flex-none w-14 sm:w-16 min-w-0">
                  <EditText
                    placeholder="+91"
                    value={inquiryData.countryCode}
                    onChange={(e) => handleInquiryInputChange('countryCode', e.target.value)}
                    onBlur={() => handleInquiryBlur('countryCode')}
                    error={inquiryErrors.countryCode}
                    inputMode="tel"
                    className="!bg-gray-100"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <EditText
                    placeholder="Phone Number..."
                    value={inquiryData.phone}
                    onChange={(e) => handleInquiryInputChange('phone', e.target.value)}
                    onBlur={() => handleInquiryBlur('phone')}
                    error={inquiryErrors.phone}
                    inputMode="numeric"
                    className="!bg-gray-100"
                  />
                </div>
              </div>

              <EditText
                placeholder="Quantity..."
                value={inquiryData.quantity}
                onChange={(e) => handleInquiryInputChange('quantity', e.target.value)}
                onBlur={() => handleInquiryBlur('quantity')}
                error={inquiryErrors.quantity}
                className="!bg-gray-100"
              />

              <EditText
                placeholder="Destination Port..."
                value={inquiryData.destinationPort}
                onChange={(e) => handleInquiryInputChange('destinationPort', e.target.value)}
                onBlur={() => handleInquiryBlur('destinationPort')}
                error={inquiryErrors.destinationPort}
                className="!bg-gray-100"
              />

              <TextArea
                placeholder="Message..."
                value={inquiryData.message}
                onChange={(e) => handleInquiryInputChange('message', e.target.value)}
                onBlur={() => handleInquiryBlur('message')}
                rows={4}
                error={inquiryErrors.message}
                className="!bg-gray-100"
              />

              <Button
                type="submit"
                variant="primary"
                className="bg-global-3 text-primary font-lato text-base lg:text-lg font-bold leading-5 lg:leading-[22px] py-3 lg:py-[14px] px-6 lg:px-[34px] rounded-xl mt-2"
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;