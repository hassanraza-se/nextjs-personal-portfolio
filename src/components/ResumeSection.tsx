import React from 'react';
import ResumeItem from "@/components/ResumeItem";

function ResumeSection() {

    const works = [
        {
            "company": "Chemist POS Direct",
            "title": "Senior MEAN Stack Developer",
            "year": "2024 - *",
            "summary": "Working on an IT services platform for pharmacies using Angular for front-end, Node.js APIs handling 10,000+ daily transactions, and scalable backends with Express.js and NestJS.",
            "hashtags": ["Laravel", "React.js", "Node.js"]
        },
        {
            "company": "myls - mylokalesuche",
            "title": "Full-Stack Laravel & Vue.js Developer",
            "year": "2023 - 2024",
            "summary": "Worked on a comprehensive platform for businesses to manage their online presence using Laravel, Vue.js, and MySQL, ensuring seamless integration across multiple social platforms.",
            "hashtags": ["Laravel", "Vue.js", "MySQL"]
        },
        {
            "company": "Computan",
            "title": "Senior Software Engineer",
            "year": "2020 - 2023",
            "summary": "At Computan, with over 100+ employees, provided software and integration solutions to marketers, leveraging Laravel, Vue.js, and MySQL to deliver robust and scalable applications.",
            "hashtags": ["Laravel", "Vue.js", "MySQL"]
        },
        {
            "company": "Paksa It Solutions",
            "title": "Software Engineer",
            "year": "2019 - 2020",
            "summary": "Worked at a growing ecommerce-based product company, developing solutions with PHP, Opencart, and Laravel, enhancing the functionality and performance of ecommerce platforms.",
            "hashtags": ["PHP", "Opencart", "Laravel"]
        },
        {
            "company": "VU - Software House",
            "title": "Trainee Software Engineer",
            "year": "2018 - 2019",
            "summary": "Gained experience at Virtual University's software house, spending one year working on a project called 'Hostel Finder,' following the complete SDLC and utilizing Laravel, MySQL, and Stripe.",
            "hashtags": ["Laravel", "MySQL", "Stripe"]
        }
    ];

    const midIndex = Math.ceil(works.length / 2);
    const works1 = works.slice(0, midIndex);
    const works2 = works.slice(midIndex);

    return (
        <section id={"resume"} className={"px-8 fade-out md:px-36 py-4 md:py-16 flex flex-col bg-white"}>
            <div className={"text-lg font-semibold"}>My Professional Experience</div>
            <h2 className={"text-4xl font-bold mb-4"}>My <span
                className={"bg-gradient-to-r from-primary via-secondary to-orange text-[transparent] bg-clip-text"}>Resume</span>
            </h2>

            <div className={"flex flex-col md:flex-row gap-x-12 mt-4"}>
                <div className={"w-full md:w-1/2"}>
                    <ul className="list-none">
                        {works1.map((work, index) => <ResumeItem key={index} work={work} />)}
                    </ul>
                </div>
                <div className={"w-full md:w-1/2"}>
                    <ul className="list-none">
                        {works2.map((work, index) => <ResumeItem key={index} work={work}/>)}
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default ResumeSection;