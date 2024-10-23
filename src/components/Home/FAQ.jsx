import { faqs } from "../../utils/localDb.js";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="xl:container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 py-20 lg:mt-8 px-6">
        <div className="flex flex-col gap-6 lg:basis-5/12 ">
          <div>
            <p className="bg-primary text-background py-2 px-6 rounded-full font-roboto inline">
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="text-h2 font-roboto leading-tight	">
            Everything You Need to Know
          </h2>
          <p className="font-poppins text-small text-muted leading-relaxed font-normal">
            Got questions? We’ve got answers! Explore our FAQs to learn more
            about how Wishings works and how we can help you create the perfect
            personalized video.
          </p>
        </div>
        <div className="space-y-2 lg:basis-7/12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg p-5 lg:p-6 transition-all duration-700 ease-in-out ${
                openIndex === index ? "bg-primary" : "bg-accent"
              }`}
            >
              <div className="flex justify-center text-center gap-2 ">
                <p className="w-full text-left text-medium font-semibold">
                  {faq.question}
                </p>
                <button onClick={() => handleToggle(index)}>
                  {openIndex === index ? (
                    <FaMinus className="text-small mt-1 cursor-pointer" />
                  ) : (
                    <FaPlus className="text-small mt-1 cursor-pointer" />
                  )}
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-medium text-muted font-normal leading-tight	">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
