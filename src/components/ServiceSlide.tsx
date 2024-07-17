import React from 'react';

type Props = {
    service: {
        title: string,
        heading: string,
        description: string,
    }
}

function ServiceSlide({service}: Props) {
    return (
        <div className={"flex flex-col gap-4 p-6 rounded-xl shadow-lg"}>
            <div>{service.title}</div>
            <h3 className={"text-lg font-semibold"}>{service.heading}</h3>
            <p className={"text-darkGrey"}>{service.description}</p>
            <div className={"flex items-center gap-3 font-semibold"}>See Pricing
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-primary w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
            </div>
        </div>
    );
}

export default ServiceSlide;