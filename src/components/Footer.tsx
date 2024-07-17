import React from 'react';

function Footer() {
    return (
        <footer className={"px-8 md:px-36 py-8 md:py-12 bg-primary"}>
            <div className={"flex flex-col md:flex-row justify-between gap-4 text-white"}>
                <div className={"flex gap-2"}>
                    Developed with
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                         stroke="currentColor" className="size-6 fill-red-500">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    by: <a href={"https://hassanraza.net"} target={"_blank"}>Hassan Raza</a>
                </div>
                <div className={""}>
                    Copyright &copy; {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
}

export default Footer;