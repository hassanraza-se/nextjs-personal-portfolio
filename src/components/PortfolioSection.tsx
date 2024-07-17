"use client";
import React from 'react';

import {Autoplay, Pagination} from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import PortfolioSlide, {Project} from "@/components/PortfolioSlide";

function PortfolioSection() {

    const projects = [
        {
            title: "Stepdoc",
            description: "A React.js Chrome extension integrated with PHP/Laravel backend, enabling streamlined workflow recording and secure storage. Enhances productivity with a user-friendly interface.",
            hashtags: ["React.js", "PHP", "Laravel"],
            url: "https://t.ly/jy0NI",
            image: "https://hassanraza.net/storage/projects/13844018676510.png"
        },
        {
            title: "Mon-Arch",
            description: "A bespoke WordPress website showcasing home renovation and decoration services with creative expertise. Features include Elementor and custom shortcodes for enhanced functionality.",
            hashtags: ["WordPress", "Elementor", "PHP"],
            url: "https://mon-arch.ca/",
            image: "https://hassanraza.net/storage/projects/14493751683114.png"
        },
        {
            title: "Skill Test",
            description: "A Laravel-powered platform designed for recruiters to seamlessly conduct skill assessments for candidates. Includes MySQL database integration for storing test results efficiently.",
            hashtags: ["Laravel", "PHP", "MySQL"],
            url: "https://skilltest.se/",
            image: "https://hassanraza.net/storage/projects/8839109882974.png"
        },
        {
            title: "Vueitinsurtech",
            description: "A Laravel-driven platform for managing insurance policy documents. Incorporates Google Form Parser and AWS S3 for efficient document handling and secure storage solutions.",
            hashtags: ["Laravel", "GCP", "AWS"],
            url: "https://vueitinsurtech.com/",
            image: "https://hassanraza.net/storage/projects/16803402431112.png"
        },
        {
            title: "Sendies",
            description: "A Laravel-driven platform with Stripe and FedEx integration for managing campaigns. Provides seamless payment processing and shipping solutions for efficient business operations.",
            hashtags: ["Laravel", "Stripe", "FedEx"],
            url: "https://sendies.io/",
            image: "https://hassanraza.net/storage/projects/984180028455.png"
        }
    ];

    return (
        <section id={"portfolio"} className={"px-8 fade-out bg-slate md:px-36 py-8 md:py-16"}>
            <div className={"text-lg font-semibold"}>Visit My Portfolio</div>
            <h2 className={"text-4xl font-bold mb-4"}>My
                <span
                    className={"bg-gradient-to-r from-primary via-secondary to-orange text-[transparent] bg-clip-text"}>
                    Amazing Work
                </span>
            </h2>

            <div className={"-ms-4 -me-4"}>
                <Swiper
                    spaceBetween={40}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={true}
                    breakpoints={{
                        640: {slidesPerView: 1},
                        786: {slidesPerView: 3}
                    }}
                >
                    {projects.map((project, index) =>
                        <SwiperSlide key={index} className={"p-4 h-auto"}>
                            <PortfolioSlide className={"h-full"} project={project} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

        </section>
);
}

export default PortfolioSection;