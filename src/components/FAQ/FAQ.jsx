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
      id: "collapseThree",
      title: "What can I do with DIDO?",
      content:
        "<strong>You can:</strong><ul><li>Open apps directly with a voice or text command</li><li>Search the internet or specific apps</li><li>Generate AI-powered images</li><li>Upload PDFs and ask questions about their content</li></ul>DIDO is built to assist you efficiently and intuitively.",
    },
    {
      id: "collapseSix",
      title: "Where can I find DIDO after opening it?",
      content:
        "<strong>Once opened, DIDO minimizes to your system tray.</strong> You can find the icon near your clock (bottom-right on Windows, top-right on macOS). Just click the icon to reopen the assistant anytime.",
    },
    {
      id: "collapseSix",
      title: "How to use DiDo?",
      content:
        "<strong>DiDo use your voice to run specific tasks.</strong> If you want to use PDF Explainer or Image Generator, you will have to open the application from the system tray. (bottom-right on Windows, top-right on macOS). Just click the icon to reopen the assistant anytime.",
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
        <div key={item.id} className="accordion-item py-2 my-4 border-b-2 border-[#FFFCE1] w-[95%]">
          <h2 className="accordion-header ">
            <button
              className="accordion-button flex cursor-pointer justify-between items-center w-full p-4 text-left font-medium   focus:outline-none"
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
 