import React from "react";
import { MdArrowOutward } from "react-icons/md";
import message from '../../assets/message.svg'

 const NewsletterSubscribe = () => {
  return (
    <section className="xl:container mx-auto mb-12">
      <div className="bg-primary rounded-lg xl:rounded-3xl mt-16 lg:mt-20 px-4 py-12 md:p-12 lg:p-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="md:basis-1/2 	text-center lg:leading-snug	sm:text-left sm:px-20 md:px-0 xl:pr-20 text-white text-h2 font-PlusJakartaSans font-extrabold	 mb-4 md:mb-0">
            Subscribe to our Newsletter
          </h2>
          <form className="bg-background rounded-full w-full md:basis-1/2 	xl:p-2">
            <div className="flex text-center justify-between p-[1px] font-PlusJakartaSan ">
              <div className="grow flex text-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 w-full xl:text-medium rounded-l-full text-gray-600 focus:outline-none focus:border-transparent "
                />
              </div>
              <div>
                <button
                  type="submit"
                  
                  className="bg-primary xl:text-medium text-white m-[1px] px-6 py-3 rounded-full flex content-center items-center font-PlusJakartaSan font-semibold hover:bg-orange-700 transition duration-300 shadow-md active:shadow-none xl:px-10 xl:py-4"
                >
                  Subscribe
                  <span className="hidden md:block pl-1">
                  <MdArrowOutward className="font-extrabold text-medium"/>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>      
      </div>
      {/* <div className="flex gap-4 justify-center my-12">
          <img src={message} alt="message" />
          <div>
            <p className="font-semibold font-PlusJakartaSans">Email: <a href="#" className="font-normal text-muted">info@next.com</a></p>
            <p className="font-semibold font-PlusJakartaSans">Call us: <a href="#" className="font-normal text-muted"> +1 718-638-5000</a></p>
          </div>
        </div>
        <div className="border-b-2"></div> */}
    </section>
  );
};

export default NewsletterSubscribe;