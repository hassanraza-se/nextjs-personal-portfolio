"use client";
import React, {useEffect} from 'react';
import NavItem from "@/components/NavItem";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";

function NavBar() {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const setActiveNav = () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav #navbar-default ul li a');

        let current : string = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                const s = section.getAttribute("id");
                if (s) {
                    current = s;
                }
            }
            if (scrollY === 0) {
                current = "home";
            }
        });

        const section = document.getElementById(current);
        if (section && section.classList.contains('fade-out')) {
            section.classList.remove('fade-out');
            section.classList.add('fade-in')
        }

        navItems.forEach(item => {
            item.classList.remove("text-primary");
            if (item.classList.contains(current)) {
                item.classList.add("text-primary");
            }
        });
    }

    useEffect(() => {
        setActiveNav();
        window.onscroll = () => {
            setActiveNav();
        }
    }, [])

    return (
        <nav className={"bg-white w-full max-w-full " + (isOpen ? 'h-screen' : 'h-auto')}>
            <div className="container px-4 md:px-16 flex flex-wrap md:flex-nowrap items-center justify-between mx-auto py-8">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6 stroke-2 stroke-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
                    </svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-primary via-secondary to-orange text-[transparent] bg-clip-text">Hassan Raza</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" onClick={toggleNav}
                        className="relative z-10 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {isOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                    }
                    {!isOpen &&
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    }
                </button>

                <div
                    className={"transition-all duration-300 w-full justify-between items-center flex-col md:flex-row " + (isOpen ? "flex" : "hidden md:flex")}
                    id="navbar-default">
                    <ul className="font-medium flex mx-auto flex-col p-4 md:p-0 mt-4 text-center bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <NavItem className={"home"}>
                            <NavLink url={'/#home'} className={"home"}> {"Home"} </NavLink>
                        </NavItem>

                        <NavItem className={"about-me"}>
                            <NavLink url={'/#about-me'} className={"about-me"}> {"About Me"} </NavLink>
                        </NavItem>

                        <NavItem className={"services"}>
                            <NavLink url={'/#services'} className={"services"}> {"Services"} </NavLink>
                        </NavItem>

                        <NavItem className={"portfolio"}>
                            <NavLink url={'/#portfolio'} className={"portfolio"}> {"Portfolio"} </NavLink>
                        </NavItem>

                        <NavItem className={"resume"}>
                            <NavLink url={'/#resume'} className={"resume"}> {"Resume"} </NavLink>
                        </NavItem>
                    </ul>

                    <div className={"nav-buttons flex flex-col justify-center items-center md:flex-row gap-6"}>
                        <Button variant={"slate"} display={"a"} url={"/Hassan-Raza-cv.pdf"} className={"flex gap-2"}>
                            Download CV
                        </Button>
                        <Button variant={"secondary"} display={"a"} url={"#contact"}>Contact</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;