"use client";
import React from 'react';
import {Autoplay, Pagination} from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ServiceSlide from "@/components/ServiceSlide";

type Props = {

}

function ServiceSection({}: Props) {

    const services: {
        title: string,
        heading: string,
        description: string,
    }[] = [
        {
            title: 'Full-Stack Development',
            heading: 'Comprehensive Web Solutions',
            description: 'I provide end-to-end full-stack development services, leveraging my expertise in HTML, CSS, JavaScript, PHP, Laravel, React.js, Vue.js, Next.js, Tailwind CSS, and Node.js to build robust and scalable web applications.'
        },
        {
            title: 'Frontend Development',
            heading: 'Modern User Interfaces',
            description: 'Specializing in React.js, Vue.js, Next.js, and Tailwind CSS, I create visually appealing and responsive frontend interfaces. My designs ensure seamless navigation and exceptional user experience.'
        },
        {
            title: 'Backend Development',
            heading: 'Laravel & Node.js',
            description: 'With expertise in Laravel and Node.js, I develop powerful and secure backend systems. From database management to server-side logic, my solutions ensure efficient data processing and functionality.'
        },
        {
            title: 'Database Management',
            heading: 'MySQL & MongoDB',
            description: 'I offer professional database management services using MySQL and MongoDB. Whether it\'s structuring data for performance or ensuring data integrity, my solutions support your application’s growth.'
        },
        {
            title: 'Content Management Systems',
            heading: 'WordPress & Custom CMS',
            description: 'I provide CMS solutions using WordPress and custom-built systems tailored to your needs. My services ensure you have full control over your website’s content, enabling easy updates and management.'
        }
    ];


    return (
        <section id={"services"} className={"service-section fade-out px-8 md:px-36 py-8 md:py-16 bg-white"}>
            <div className={"text-lg font-semibold"}>Services I Offer to my Clients</div>
            <h2 className={"text-4xl font-bold mb-4"}>My Best <span className={"bg-gradient-to-r from-primary via-secondary to-orange text-[transparent] bg-clip-text"}>Services</span></h2>

            <div className={"-ms-4 -me-4"}>
                <Swiper
                    spaceBetween={40}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={true}
                    pagination={{
                        el: '.swiper-custom-pagination',
                        clickable: true
                    }}
                    breakpoints={{
                        640: {slidesPerView: 1},
                        786: {slidesPerView: 3}
                    }}
                >
                    {services.map((service, index) =>
                        <SwiperSlide key={index} className={"p-4"}>
                            <ServiceSlide service={service}/>
                        </SwiperSlide>
                    )}


                </Swiper>
                <div className="swiper-custom-pagination text-center flex gap-2 mt-8 justify-center"/>
            </div>
        </section>
    );
}

export default ServiceSection;