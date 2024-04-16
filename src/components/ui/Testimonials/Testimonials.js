"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LoadingPage from '@/app/loading';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef();

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        autoSlideRef.current = handleNext;
    });

    useEffect(() => {
        const play = () => {
            autoSlideRef.current();
        }

        const autoPlayId = setInterval(play, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(autoPlayId);
        }
    }, []);

    const item = items[currentIndex];
    
    return (
        <div className="flex flex-col items-center px-4 md:px-20">
            <div className='w-full flex justify-between mt-4 mb-4  ' >
                <div className="  ">
                    <h2 className=" uppercase text-3xl font-bold ">Testimonials</h2>
                    <h2 className='text-lg mt-4 mb-4 text-red-500'>
                        Clients are satisfied for
                        our work, view feedback
                    </h2>
                </div>

                <div>
                    <button onClick={handlePrev} className="p-4 bg-red-400 btn-circle btn mr-5 ">  ❮  </button>
                    <button onClick={handleNext} className="p-4 bg-red-400 btn-circle btn">❯</button>

                </div>

            </div>
            <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden   mb-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={item?.image?.url} alt={item?.name} />
                    </div>
                    <div className="p-8">
                        <p className="mt-1 text-2xl  font-bold text-black ">{item?.name}</p>
                        <div className="tracking-wide text-lg text-red-400 mt-2 font-semibold">{item?.position}</div>
                        <p className="mt-2 text-gray-500 mb-3 font-mono">{item?.review}</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response?.data;
                setTestimonials(data?.user?.testimonials);
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const enabledTestimonials = testimonials?.filter(item => item?.enabled);

    return (
        <div className="p-6 space-y-4">
            {isLoading ? <div><span className="loading  h-28 w-28 loading-spinner text-error"></span></div> : <Carousel items={enabledTestimonials} />}
        </div>
    );
};

export default Testimonials;
