"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response.data;
                setServices(data?.user?.services);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id='services' >
            <div className="text-center">
                <p className='font-bold text-4xl mt-5 mb-4'> <span className='text-red-500' >My</span>  Services</p>
                <h2 className='font-mono' >I Provide Wide Range Of Digital Services</h2>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 md:px-0 mt-10  gap-5 max-w-7xl mx-auto   ">
                {services?.filter(service => service?.enabled).map((service, index) => (
                    <div key={index} className={`p-2 md:p-5 cursor-pointer border transition-all duration-700 hover:scale-105 rounded  overflow-hidden shadow-lg bg-white `} >
                        <img className="w-full" src={service?.image?.url} alt={service?.name} />
                        <div className="px-6 py-4 text-left">
                            <div className="font-bold text-xl mb-2">{service?.name}</div>
                            <p className="text-gray-700 text-base">{service?.desc}</p>
                            <p className="text-gray-700 text-base">Charge: {service?.charge}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

