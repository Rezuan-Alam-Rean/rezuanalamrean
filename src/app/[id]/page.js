"use client";
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingPage from '../loading';

const Details = ({ params }) => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
                const data = response?.data;
                const project = data?.user?.projects.find(project => project?._id === params?.id);
                setProject(project);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (params.id) {
            fetchData();
        }
    }, [params.id]);

    // Render the project data
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">

            <h1 className='mt-12 mb-10 text-2xl sm:text-3xl md:text-4xl text-red-500 text-center font-bold' >Project Details </h1>

            {project ? (
                <div className='w-full' >




                    <div className=" mt-10 mb-10 px-4 sm:px-6 md:px-10 bg-white w-full mx-auto h-auto md:h-screen rounded-xl shadow-md overflow-hidden md:flex-row ">
                        <div className=" ">
                            <img className=" h-96   w-full object-cover" src={project?.image?.url} alt={project?.title} layout="fill" />
                        </div>
                        <div className="p-4 sm:p-6 md:p-8">
                            <div className="uppercase tracking-wide  text-black text-xl sm:text-2xl md:text-3xl font-semibold">{project?.title}</div>
                            <p className="mt-2 text-gray-500">{project?.description}</p>
                            <div className="mt-4 mb-4">
                                {project?.techStack.map((tech, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tech}</span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <a href={project?.liveurl} target="_blank" rel="noreferrer" className="btn btn-outline btn-error mr-4">Live URL</a>
                                <a href={project?.githuburl} target="_blank" rel="noreferrer" className="btn btn-outline btn-error">GitHub URL</a>
                            </div>
                        </div>
                    </div>



                </div>
            ) : (
                <LoadingPage />
            )}

            <Link href="/">
                <div className='text-center mt-4 mb-6' >

                    <button className=' text-center btn btn-error' > Home </button>
                </div>

            </Link>


        </div>
    );
};

export default Details;


