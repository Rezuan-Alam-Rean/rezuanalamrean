"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingPage from '@/app/loading';

const Hero = () => {
    const [socialHandles, setSocialHandles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response.data;
                setLoading(false);
                setAbout(data.user.about);
                setSocialHandles(data.user.social_handles);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) return <LoadingPage/>;

    return (
        <div className="flex flex-col lg:flex-row px-6 md:px-20 py-5 bg-black text-white gap-4 lg:gap-20">
            <div className='w-full lg:w-1/2 p-4'>
                <div className="text-white text-lg mt-4 font-semibold max-w-2xl">
                    HELLO, <span className='text-red-400 '>MY NAME IS</span>
                    <div className="text-red-400 mt-4 mb-4 text-8xl font-serif">
                        JOHN  <span className='text-white'>DOE</span>
                    </div>
                    <span className="text-xl mt-6">
                        I am a  {about?.title}
                    </span>
                </div>
                <p className="text-white mt-2 text-base font-thin whitespace-pre-wrap ">
                    {about?.description}
                </p>

                <div className="flex flex-row justify-start mt-5 mb-5 space-x-4">
                    {socialHandles?.filter(item => item.enabled === true).map((social, index) => (
                        <a key={index} className="w-8 h-8" target="_blank" rel="nofollow" href={social.url}>
                            <img className="w-full h-full object-cover rounded-full" src={social.image.url} alt={social.platform} />
                        </a>
                    ))}
                </div>
                <div className='mt-7' >
                    <button className="btn btn-outline btn-error mr-6">Resume</button>
                    <a href='#project' className="btn btn-outline btn-error"> See Projects</a>
                </div>
            </div>
            <div className='w-full h-full lg:w-1/2 p-4 relative '>
                <img className="w-full max-h-[550px] object-cover rounded-full" src={about?.avatar?.url} />
                <div className="absolute bottom-28 left-0 bg-black border border-red-400 px-8 p-2 rounded-full ">
                    <span className="text-lg font-bold">
                        {about?.exp_year}
                    </span>
                    <span className="text-base">
                        {""}  Years of <br /> <strong className='text-red-400' >Experience</strong>
                    </span>
                </div>
                <div className="absolute bottom-5 right-0 bg-black border border-red-400 px-8 p-2 rounded-full ">
                    <span className="text-lg font-bold">{about?.some_total}</span>
                    <span className="text-base">
                        {""} Completed <br /> <strong className='text-red-400' >Projects</strong>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;

