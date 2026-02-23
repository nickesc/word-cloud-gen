import "./header.css";

function Header() {
    return (
        <header id="header">
            <div id="header-title">
                <h1>Article Word Cloud Generator</h1>
            </div>
            <div id="header-content">
                <span>
                    by&nbsp;
                    <a id="header-author-link" href="https://github.com/nickesc" target="_blank">
                        Nick Escobar
                    </a>
                </span>
                <span id="header-content-right">
                    <div id="date-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-calendar-check2-icon lucide-calendar-check-2"
                        >
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                            <path d="M3 10h18" />
                            <path d="m16 20 2 2 4-4" />
                        </svg>

                        <span>February&nbsp;9th,&nbsp;2026</span>
                    </div>

                    <a className="linkButton" href="https://github.com/nickesc/3D-Word-Cloud-Nick" target="_blank">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="currentColor"
                        >
                            <path
                                d="M17 7C18.1046 7 19 6.10457 19 5C19 3.89543 18.1046 3 17 3C15.8954 3 15 3.89543 15 5C15 6.10457 15.8954 7 17 7Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7 7C8.10457 7 9 6.10457 9 5C9 3.89543 8.10457 3 7 3C5.89543 3 5 3.89543 5 5C5 6.10457 5.89543 7 7 7Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19C5 20.1046 5.89543 21 7 21Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7 7V17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M17 7V8C17 10.5 15 11 15 11L9 13C9 13 7 13.5 7 16V17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Source
                    </a>
                </span>
            </div>
        </header>
    );
}

export default Header;
