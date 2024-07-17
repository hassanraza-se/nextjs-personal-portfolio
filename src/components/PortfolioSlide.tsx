import React from 'react';
import Image from "next/image";

export type Project = {
    title: string;
    description: string;
    url: string;
    image: string;
    hashtags: string[]
}

export type PortfolioSlideProps = {
    project: Project;
    className?: string
}

function PortfolioSlide({project, className = ""}: PortfolioSlideProps) {
    return (
        <div className={"flex flex-col gap-4 p-6 rounded-xl shadow-lg bg-white " + className}>
            <Image className={"rounded-xl"} src={project?.image} alt="" width={400} height={250}/>
            <h3 className={"font-bold"}>{project.title}</h3>
            <p className={"text-darkGrey"}>{project.description}</p>
            <div className={"flex gap-4 text-primary"}>
                {project.hashtags.map((hashtag, index) => <span key={index}>#{hashtag}</span>)}
            </div>
            <a href={project.url} target={"_blank"} className={"flex items-center gap-3 font-semibold mt-auto"}>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-primary w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
            </a>
        </div>
    );
}

export default PortfolioSlide;