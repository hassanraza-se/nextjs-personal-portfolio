import React from 'react';

export type Work = {
    company: string;
    title: string;
    year: string;
    summary: string;
    hashtags: string[]
}

type ItemProps = {
    work: Work;
    className?: string
}

function ResumeItem({work, className = ""}: ItemProps) {
    return (
        <li className={"work-item rounded-lg group cursor-pointer " + className}>
            <div className="flex flex-row gap-4">
                <div className="text-right hidden md:inline-block">
                    <div className="bg-[trasnparent] group-hover:bg-primary w-28 text-left border border-slateGrey group-hover:text-white text-primary px-4 py-2 text-sm text-nowrap rounded-lg inline-block">
                        {work.year}
                    </div>
                </div>
                <div className="items-center flex flex-col justify-around">
                    <div className="border-l-2 border-gray h-3"></div>
                    <div className="bg-[trasnparent] group-hover:bg-primary border-2 border-gray group-hover:border-primary rounded-full h-5 w-5">&nbsp;</div>
                    <div className="border-l-2 h-full border-gray"></div>
                </div>
                <div className="work-details">
                    <div className="bg-white p-4 rounded-lg shadow-lg border border-slateGrey flex flex-col gap-2">
                        <h2 className="font-bold text-xl">{work.company}</h2>
                        <div className={"text-darkGrey"}>{work.title}</div>
                        <div className={"text-primary block md:hidden"}>{work.year}</div>
                        <p className="text-gray">{work.summary}</p>
                        <div className={"flex gap-3 text-primary mt-2"}>
                            {work.hashtags.map((tag, index) => <span key={index}>#{tag}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ResumeItem;