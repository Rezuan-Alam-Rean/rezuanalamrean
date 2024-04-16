"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response.data;
                setSkills(data?.user?.skills);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="font-bold text-4xl mt-5 mb-4">
                    <span>Professional Skills</span>
                </h2>
                <div className="font-mono font-bold text-lg">
                    <span className='text-red-500'>My</span> Skills
                </div>
            </div>
                
            <div className="flex flex-wrap justify-center items-center px-3 md:px-20">
                {skills?.filter(skill => skill?.enabled).map((skill, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                        <div className="bg-white rounded shadow">
                            <div className="flex items-center justify-between p-4">
                                <div className='flex items-center'>
                                    <img className="w-10 h-10 mr-4 rounded-full" src={skill?.image?.url} alt={skill?.name} />
                                    <div className="text-xl text-black">{skill?.name}</div>
                                </div>
                                <div className='flex text-black justify-end'>{skill?.percentage}%</div>
                            </div>
                            <div className="relative pt-1 px-4 pb-4">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${skill?.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-red-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

