"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response?.data;
                setTimeline(data?.user?.timeline);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const education = timeline?.filter(item => item?.enabled && item?.forEducation);
    const experience = timeline?.filter(item => item?.enabled && !item?.forEducation);

    return (

        <div>
            <div id='works' className='text-center mt-8 '>

                <p className=' font-bold text-4xl' >My work history</p>
                <h2 className=' text-red-500 ' >
                    <span

                    
                    >
                        Experience
                    </span>
                    /
                    <span

                    >
                        Education
                    </span>
                </h2>
            </div>

            <div className="p-6 md:ml-20 space-y-4 ">

                <div>
                    <h2 className="text-xl  mt-3 mb-8  uppercase  font-bold"> <span className='text-red-500 mr-4'>Education</span>  history</h2>
                    {education?.map((item, index) => (
                        <div key={index} className="max-w-md  mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 p-5">
                                    <img className="h-12 w-12 md:h-28 object-cover md:w-28" src={item?.icon?.url || 'https://i.ibb.co/HCfVxBR/images.png'} alt={item?.company_name} />
                                </div>
                                <div className="p-8">
                                    <p className=" mt-1 text-2xl uppercase font-bold text-black ">{item?.company_name}</p>
                                    <div className=" tracking-wide text-lg text-black mt-2 font-semibold">{item?.jobTitle}</div>
                                    <p className='mt-2 text-base text-black'>{item?.jobLocation}</p>
                                    <p className="mt-2 text-gray-500">{item?.summary}</p>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>


                <div className='py-4 mt-8 mb-8' >

                    <div className="text-xl     font-bold uppercase"> <span className='text-red-500 mr-4 '>Experience</span> History </div>
                    {experience?.map((item, index) => (
                        <div key={index} className=" max-w-md mx-auto gap-4 mt-8  bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 p-5">
                                    <img className="h-12 w-12 md:h-28 object-cover md:w-28" src={item?.icon?.url || 'https://i.ibb.co/HCfVxBR/images.png'} alt={item?.company_name} />
                                </div>
                                <div className="p-8">
                                    <p className=" mt-1 text-2xl uppercase font-bold text-black ">{item?.company_name}</p>
                                    <div className=" tracking-wide text-lg text-black mt-2 font-semibold">{item?.jobTitle}</div>
                                    <p className='mt-2 text-base text-black'>{item?.jobLocation}</p>
                                    <p className="mt-2 text-gray-500">{item?.summary}</p>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    );
};

export default Timeline;
