"use client";

import Lottie from "lottie-react";
import animate from "../../../assets/Animation - 1702402794506.json";
const Contact = () => {
  return (
    <>
      <div id="contact" className="mb-5 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
          Contact with Me
        </p>

        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lottie */}
          <div className="my-auto">
            <Lottie className="" animationData={animate} loop={true} height={40} width={50} />
          </div>
          {/* Form */}
          <div className='bg-red-100 border-2 rounded-lg my-auto mx-4 md:mx-8 border-red-400'>
            <form className='mt-8 px-4 sm:px-6 md:px-10 flex flex-col gap-4 text-[#333333]'>
              <div className=" ">
                <label className='flex flex-col w-full'>
                  <span className='text-[#333333] font-medium mb-4'>Name</span>
                  <input
                    type='text'
                    name='name'
                    required
                    placeholder=" Your Name :"
                    className='bg-tertiary mb-3 py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-black rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col w-full'>
                  <span className='text-[#333333] font-medium mb-4'>Email</span>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder="Your Email :"
                    className='bg-tertiary py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-black rounded-lg outline-none border-none font-medium'
                  />
                </label>
              </div>
              <label className='flex flex-col'>
                <span className='text-[#333333] font-medium mb-4'>Subject</span>
                <input
                  type='text'
                  name='subject'
                  required
                  placeholder="Subject :"
                  className='bg-tertiary py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-[#333333] font-medium mb-4'>Your Message</span>
                <textarea
                  rows={4}
                  name='message'
                  required
                  placeholder='Message :'
                  className='bg-tertiary py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <button className="btn mb-8 hover:bg-orange-50 hover:text-red-500 text-white bg-red-400">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
