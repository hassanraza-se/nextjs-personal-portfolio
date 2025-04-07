import React, {JSX} from 'react';
import Button from "@/components/Button";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

type PersonalPortfolioProps = {}

function AboutSection({}: PersonalPortfolioProps): JSX.Element {
    return (
        <section id={"about-me"} className={"about fade-out bg-slate px-8 md:px-36 py-8 md:py-16 flex gap-8 md:flex-row flex-col"}>
            <div className={"w-full md:w-1/2 ps-6 pt-6"}>
                <div className={"relative inline-block"}>
                    <div className={"rounded-3xl bg-gradient-to-r from-primary via-secondary to-orange absolute w-full h-full -top-6 -left-6 p-1"}>
                        <div className={"bg-slate w-full h-full rounded-3xl"}></div>
                    </div>
                    <Image src={"https://hassanraza.net/storage/settings/13671698690364.png"} width={400} height={600} alt={""} className={"rounded-3xl relative z-10 w-full md:max-w-md"}/>
                </div>
            </div>

            <div className={"w-full md:w-1/2 flex flex-col justify-start items-start"}>
                <div className={"text-lg font-semibold"}>About Me</div>
                <div className={"text-4xl font-bold"}>Hassan <span className={"bg-gradient-to-r from-primary via-secondary to-orange text-[transparent] bg-clip-text"}>Raza</span></div>
                <p className={"mt-6 mb-2 tracking-wide text-justify text-darkGrey"}>{`I’m a software engineer and full-stack web developer based in Lahore, Pakistan. With expertise in HTML, CSS, Tailwind CSS, JavaScript, PHP, Laravel, React.js, Vue.js, Node.js, Next.js, MySQL, MongoDB, Github, GitLab, and WordPress, I build dynamic and responsive web applications. My passion lies in solving complex problems and creating seamless user experiences.`}</p>
                <p className={"mb-6 tracking-wide text-justify text-darkGrey"}>{`I have a strong foundation in both front-end and back-end development and strive to deliver high-quality, efficient, and scalable solutions. Staying updated with the latest industry trends and best practices, I am committed to providing innovative solutions to meet the evolving demands of the tech world.`}</p>

                <SocialLinks />

                <Button className={"flex gap-4"}>
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                </Button>
            </div>
        </section>
    );
}

export default AboutSection;