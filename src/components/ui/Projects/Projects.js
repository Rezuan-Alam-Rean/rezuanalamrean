"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
const ProjectCard = ({ project }) => {
    return (
        <div className={`p-2 md:p-5 cursor-pointer border transition-all duration-700 hover:scale-105 rounded  overflow-hidden shadow-lg bg-white `}>
            <div className="">
                <img className=" w-full " src={project?.image?.url} alt={project?.title} />
                <div className="p-8">
                    <div className="mt-2">
                        {project?.techStack?.map((tech, index) => (
                            <span key={index} className="  text-sm font-semibold text-red-500 ">{tech},</span>
                        ))}
                    </div>
                    <a href={project?.liveurl} target="_blank" rel="noreferrer" className="block mt-1 text-2xl leading-tight font-bold text-black  hover:underline">{project?.title}</a>
                    <p className="mt-2 text-gray-500">{project?.description}</p>

                    <Link href={`/${project?._id}`}>
                        <button className='btn btn-outline btn-error mt-4' > view  </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination flex justify-center mt-12 '>
                <li>
                    <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)} className=' btn btn-outline btn-error mr-5 '>
                        Previous
                    </button>
                </li>
                {/* {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className=''>
                            {number}
                        </button>
                    </li>
                ))} */}
                <li>
                    <button onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)} className=' btn btn-outline btn-error'>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6); // Display 10 projects per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                const data = response?.data;
                setProjects(data?.user?.projects);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const enabledProjects = projects?.filter(project => project?.enabled);

    // Get current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = enabledProjects?.slice(indexOfFirstProject, indexOfLastProject);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div id="project" className="p-6 space-y-4">
            <div className="text-center">
                <p className='font-bold text-4xl mt-5 mb-4'> <span className='text-red-500' >My</span>  Projects</p>
                <h2 className='font-mono' >I Have created this  this   responsive web applications that highlight the user’s experience. </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 md:px-0 mt-10  gap-5 max-w-7xl mx-auto ">
                {currentProjects?.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
            <Pagination projectsPerPage={projectsPerPage} totalProjects={enabledProjects?.length} paginate={paginate} currentPage={currentPage} />
        </div>
    );
};

export default Projects;
