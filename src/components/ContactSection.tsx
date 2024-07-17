"use client";
import React, {useState} from 'react';
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";

function ContactSection() {

    const [fields, setFields] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (fields.name && fields.email && fields.subject && fields.message) {
            setMessage("Your message has been received! We'll get back to ASAP.");
            setFields({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        } else {
            setMessage("All fields are required.")
        }
        setTimeout(() => {
            setMessage("");
        }, 3000)
    }

    const fieldClasses = "p-2 rounded border border-slateGrey focus-visible:outline-none focus:ring-primary focus:ring-2 text-darkGrey";

    return (
        <section id={"contact"} className={"px-8 fade-out md:px-36 py-4 md:py-16 flex flex-col bg-slate"}>
            <div className={"text-lg font-semibold"}>Have Any Question?</div>
            <h2 className={"text-4xl font-bold mb-4"}>
                <span className={"bg-gradient-to-r from-black via-secondary to-orange text-[transparent] bg-clip-text"}>
                    Contact Me
                </span>
            </h2>

            <div className={"flex flex-col md:flex-row gap-4 justify-between"}>
                <div id={"contact-form"} className={"w-full md:w-8/12 flex flex-col gap-4"}>
                    <div className={"flex flex-col md:flex-row gap-4"}>
                        <input type={"text"} className={"w-full md:w-1/2 " +fieldClasses }
                               placeholder={"Your Name"} value={fields.name}
                               onChange={handleChange}
                               name={"name"}
                        />
                        <input type={"email"} className={"w-full md:w-1/2 " + fieldClasses}
                               placeholder={"Your Email"} value={fields.email}
                               onChange={handleChange}
                               name={"email"}
                        />
                    </div>
                    <input type={"text"} className={fieldClasses}
                           placeholder={"Subject"} value={fields.subject}
                           onChange={handleChange}
                           name={"subject"}
                    />
                    <textarea className={"resize-none " + fieldClasses} rows={6}
                              placeholder={"Message"} value={fields.message}
                              onChange={handleChange}
                              name={"message"}
                    ></textarea>
                    {message && <div className={"text-primary"}>{message}</div>}
                    <Button onClick={handleSubmit}>Send Message</Button>
                </div>
                <div className={"flex flex-col gap-8 text-lg"}>
                    <div className={"flex gap-4 text-darkGrey"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                        </svg>
                        <a href={"tel:+1 571-600-4520"}>+1 571-600-4520</a>
                    </div>
                    <div className={"flex gap-4 text-darkGrey"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                        </svg>

                        <a href={"mailto:info@hassanraza.net"}>info@hassanraza.net</a>
                    </div>
                    <div className={"flex gap-4 text-darkGrey"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                        </svg>

                        Lahore, Pakistan
                    </div>
                    <div className={"flex gap-4 text-darkGrey"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                        </svg>

                        <a href={"https://hassanraza.net"}>hassanraza.net</a>
                    </div>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;