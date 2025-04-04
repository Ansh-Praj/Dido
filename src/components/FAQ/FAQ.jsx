import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
 
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  const accordionItems = [
    {
      id: "collapseOne",
      title: "DIDO",
      content:
        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      id: "collapseTwo",
      title: "DIDO",
      content:
        "<strong>This is the second item's accordion body.</strong> It is hidden by default. You can modify any of this with custom CSS or overriding our default variables.",
    },
    {
      id: "collapseThree",
      title: "DIDO",
      content:
        "<strong>This is the third item's accordion body.</strong> It is hidden by default. You can modify any of this with custom CSS or overriding our default variables.",
    },
  ];

  useGSAP(()=>{
    gsap.from('#faq', {
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: '#faq',
        start: 'top center+=200px',
        toggleActions: 'play none none reverse',
      }
    })
  }, [])
 
  return (
    <div id="faq" className="w-screen py-7 lg:w-[70%] lg:mx-auto">
 
      <div>
        <h1 className="text-center text-3xl my-5 lg:text-5xl">Frequently asked questions</h1>
        <p className=" text-[15px] my-5 mx-auto w-[90%] lg:text-2xl">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by sending us an email and we’ll get back to you as soon as we can.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
       
      {accordionItems.map((item, index) => (
        <div key={item.id} className="accordion-item  py-2 my-4 border-b-2 border-[#FFFCE1] w-[95%]">
          <h2 className="accordion-header">
            <button
              className="accordion-button flex justify-between items-center w-full p-4 text-left font-medium   focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={item.id}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <svg
                className={`w-5 h-10 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h2>
          <div
            id={item.id}
            className={`accordion-collapse overflow-hidden transition-all duration-300 ${
              openIndex === index ? "opacity-100 h-auto" : "opacity-0 h-0"
            }`}
            aria-labelledby={`heading-${item.id}`}
          >
            <div className="p-4 " dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
 
export default FAQ;
 