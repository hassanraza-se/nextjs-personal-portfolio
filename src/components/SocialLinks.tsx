import React from 'react';

type Props = {
    facebook?: boolean;
    linkedIn?: boolean;
    github?: boolean;
    skype?: boolean;
    stackoverflow?: boolean;
    instagram?: boolean;
    bgColor?: string;
}

function SocialLinks({
    facebook = true,
    linkedIn = true,
    github = true,
    skype = true,
    stackoverflow = true,
    instagram = true,
    bgColor = "bg-white"
 } : Props) {
    return (
        <div className={"social-link flex gap-4 pb-6"}>
            {facebook && <a href={"https://www.facebook.com/imHassaanRaza"} target={"_blank"}
                            className={"rounded shadow p-2 " + bgColor}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                     viewBox="0 0 48 48" className={"size-6"}>
                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                    <path fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                </svg>
            </a>}

            {linkedIn && <a href={"https://www.linkedin.com/in/hassanrazadev/"} target={"_blank"}
                            className={"rounded shadow p-2 " + bgColor}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                     viewBox="0 0 48 48" className={"size-6"}>
                    <path fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                    <path fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                </svg>
            </a>}

            {github &&
                <a href={"https://github.com/hassanrazadev/"} target={"_blank"} className={"rounded shadow p-2 " + bgColor}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 48 48" className={"size-6"}>
                        <path fill="#fff"
                              d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path>
                        <path fill="#455a64"
                              d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path>
                        <path fill="#455a64"
                              d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path>
                        <path fill="#455a64"
                              d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path>
                        <path fill="#00bcd4"
                              d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                    </svg>
                </a>}

            {skype && <a href={"https://join.skype.com/invite/UxrmU4IapaXk"} target={"_blank"}
                         className={"rounded shadow p-2 " + bgColor}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                     viewBox="0 0 48 48" className={"size-6"}>
                    <path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                    <path fill="#03a9f4"
                          d="M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"></path>
                    <path fill="#fff"
                          d="M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"></path>
                </svg>
            </a>}
            {stackoverflow && <a href={"https://stackoverflow.com/users/8325024/hassanrazadev"} target={"_blank"}
                                 className={"rounded shadow p-2 " + bgColor}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                     viewBox="0 0 48 48" className={"size-6"}>
                    <path fill="#607D8B" d="M9 28H12V42H9z"></path>
                    <path fill="#607D8B" d="M9 39H35V42H9z"></path>
                    <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"></path>
                    <path fill="#A68A6E" d="M14.88 29H28.880000000000003V32H14.88z"
                          transform="rotate(6.142 21.88 30.5)"></path>
                    <path fill="#EF6C00" d="M29.452 11.646H43.451V14.647H29.452z"
                          transform="rotate(81.234 36.453 13.148)"></path>
                    <path fill="#FF9800" d="M23.576 13.578H37.574V16.579H23.576z"
                          transform="rotate(60.79 30.576 15.079)"></path>
                    <path fill="#D38B28" d="M18.395 18.275H32.393V21.276H18.395z"
                          transform="rotate(34.765 25.396 19.777)"></path>
                    <path fill="#C09553" d="M15.977 23.499H29.976V26.5H15.977z"
                          transform="rotate(19.785 22.978 25.003)"></path>
                </svg>
            </a>}
        </div>
    );
}

export default SocialLinks;