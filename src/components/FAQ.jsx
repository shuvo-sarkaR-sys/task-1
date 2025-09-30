import React, { useState } from "react";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "Many do charge a call-out fee (also called a service fee or minimum charge). This covers their time and travel just to come to your location, even if no work is done.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade at any time from your account dashboard. The difference will be prorated.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We can usually send an engineer the same day, and in many cases within a few hours depending on your location and availability."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="xl:p-32 xl:mx-auto font-inter md:p-10 py-8 px-4 xl:py-10  sm:w-full md:m-auto md:w-[768px]  xl:w-[920px]">
      <h2 className="xl:text-[48px] md:text-[32px] text-2xl font-inter font-bold text-center mb-14">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 rounded-lg "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex cursor-pointer justify-between items-center p-4 text-left md:text-xl xl:text-[28px] font-semibold text-[#1B1743]   "
            >
              {faq.question}

              {/* Rotating Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Answer with animation */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              } border-b border-gray-200  text-sm xl:text-[18px] text-[#2A2F32]`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
