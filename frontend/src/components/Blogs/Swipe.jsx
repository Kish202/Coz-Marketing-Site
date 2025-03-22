// // Swipe.jsx
// import React from 'react';
// import Slider from "react-slick";
// import BlogCard from './BlogCard';
// import ImgBlog from "../../assets/blog1.jpg";

// // Important! Add these CSS imports at the top
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom arrow components with corrected names
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div 
//             className={className}
//             style={{ 
//                 ...style, 
//                 display: "block", 
//                 background: "red",
//                 zIndex: 10,
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 right: "-15px"
//             }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div  
//             className={className}
//             style={{ 
//                 ...style, 
//                 display: "block", 
//                 background: "green",
//                 zIndex: 10,
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 left: "-15px"
//             }}
//             onClick={onClick}
//         />
//     );
// }

// const Swipe = () => {
//     // Use local state to track if component is mounted (for SSR compatibility)
//     const [mounted, setMounted] = React.useState(false);

//     React.useEffect(() => {
//         setMounted(true);
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 600,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         pauseOnHover: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 }
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 }
//             }
//         ]
//     };

//     // Inject custom CSS for additional styling
//     React.useEffect(() => {
//         const styleEl = document.createElement('style');
//         const css = `
//             .slick-dots { bottom: -30px; }
//             .slick-dots li button:before { font-size: 10px; }
//             .slick-slider { margin: 0 -8px; width: 100%; }
//             .slick-slide { padding: 0 8px; box-sizing: border-box; }
            
//             /* Force slide visibility */
//             .slick-slide {
//                 visibility: visible !important;
//                 opacity: 1 !important;
//                 width: auto !important; 
//             }
            
//             /* Fix slider container size */
//             .slick-list {
//                 overflow: visible !important;
//                 padding: 0 !important;
//             }
            
//             /* Ensure slides have proper height */
//             .slick-track {
//                 display: flex !important;
//                 height: auto !important;
//             }
//         `;
        
//         styleEl.textContent = css;
//         document.head.appendChild(styleEl);
        
//         return () => {
//             document.head.removeChild(styleEl);
//         };
//     }, []);

//     return (
//         <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//             <div className="container px-6 py-10">
//                 <h1 className="mb-8 inline-block border-b-2 border-primary py-2 text-3xl font-bold">
//                     Explore
//                 </h1>
                
//                 {/* Only render slider when component is mounted */}
//                 {mounted && (
//                     <div style={{ position: "relative", width: "100%" }}>
//                         <Slider {...settings}>
//                             {[1, 2, 3, 4, 5, 6].map((item, index) => (
//                                 <div key={index} style={{ padding: "0 8px", boxSizing: "border-box" }}>
//                                     <BlogCard Img1={ImgBlog} />
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Swipe;



import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import BlogCard from './BlogCard';
import ImgBlog from "../../assets/blog1.jpg";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const Swipe = () => {
    const [mounted, setMounted] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {

        const linkSlick = document.createElement('link');
        linkSlick.rel = 'stylesheet';
        linkSlick.type = 'text/css';
        linkSlick.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
        
        const linkSlickTheme = document.createElement('link');
        linkSlickTheme.rel = 'stylesheet';
        linkSlickTheme.type = 'text/css';
        linkSlickTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
        
        document.head.appendChild(linkSlick);
        document.head.appendChild(linkSlickTheme);
        
    
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100);
        
        return () => {
            document.head.removeChild(linkSlick);
            document.head.removeChild(linkSlickTheme);
            clearTimeout(timer);
        };
    }, []);

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
          <div 
              className="absolute top-1/2 -right-7 cursor-pointer  z-10  shadow-md r"
              style={{ ...style }}
              onClick={onClick}
          >  
              <HiChevronRight size={24} color="black"  /> 
          </div>
      );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center shadow-md z-10 cursor-pointer"
            onClick={onClick}
        >
            <HiChevronLeft size={24} color="black" />
        </div>
    );
}

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        touchMove:false,
        swipe:false,
       
        // Disable touch movement
        draggable: false,     // Disable mouse dragging
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };


    useEffect(() => {
        if (!mounted) return;
        
        const styleEl = document.createElement('style');
        const css = `
            body, html {
            overflow-x: hidden;  /* Prevent horizontal scrolling on the entire page */
        }
        
        .slider-container {
            position: relative;
            width: 100%;
            overflow: hidden;
        }
        
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            user-select: none;
            touch-action: pan-y;  /* Disable all touch actions */
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
            width: 100%;
            margin: 0;
            padding: 0 -8px
            ;
        }
        
        .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
            width: 100%;
        }
        
        .slick-track {
            display: flex;
            margin-left: 0;
            margin-right: 0;
            // width: 100% !important;
            // transform: none !important;
        }
        
        .slick-slide {
            padding: 0 8px;
            box-sizing: border-box;
            float: left;
            height: 100%;
            min-height: 1px;
            display: block !important;
            width: auto !important;
        }
            
            .slick-initialized .slick-slide {
                display: block;
            }
            
            .slick-dots {
                bottom: -30px;
            }
            
            .slick-dots li button:before {
                font-size: 10px;
            }
            
            .slick-prev:before, .slick-next:before {
                display: none;
            }
            
           
        `;
        
        const preventTouchMove = (e) => {
            const sliderElement = document.querySelector('.slider-container');
            if (!sliderElement.contains(e.target)) {
                e.preventDefault();
            }
        };





        document.addEventListener('touchmove', preventTouchMove, { passive: false });
    
       

        styleEl.textContent = css;
        document.head.appendChild(styleEl);
        
      
        const timer = setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(0);
            }
        }, 200);
        
        return () => {
            document.head.removeChild(styleEl);
            document.removeEventListener('touchmove', preventTouchMove);
            clearTimeout(timer);
        };
    }, [mounted]);

    return (
        <div className="slider-container" style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <div className="container px-6 py-10 ">
                <h1 className="mb-8 inline-block border-b-2 border-primary py-2 text-3xl font-bold">
                    Explore
                </h1>
                
                {mounted && (
                    <div className="slider-wrapper" style={{ position: "relative", width: "100%" }}>
                        <Slider ref={sliderRef} {...settings}>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <div key={index}>
                                    <BlogCard Img1={ImgBlog} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Swipe;
