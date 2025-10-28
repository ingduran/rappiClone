export default function Header() {
    return (
        <header className="flex items-center" style={{margin: '12px 24px 12px 16px'}}>
            {/**Left */}
            <div id="burger-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
                </svg>
            </div>

            {/**center */}
            <div className="section2-main">
                <div id="contenedor">
                    <div id="search-box" className="box-search">
                        <form className="style-form">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 56 18" className="style-svg">
                                <path fill="#FF441F" fillRule="evenodd" d="M46.572 5.84c3.14 2.244 5.752 2.084 8.7-.42.244-.204.484-.413.728-.618-.438 2.36-1.385 4.469-2.78 6.389-1.781 2.443-4.118 4.204-7.05 5.161-6.858 2.254-15.518-.883-18.17-6.802-2.652 5.92-11.312 9.056-18.17 6.802-2.932-.957-5.269-2.718-7.05-5.161C1.385 9.27.433 7.16 0 4.802c.24.205.484.414.728.619 2.943 2.503 5.56 2.663 8.695.419 1.441-1.033 2.734-2.26 4.18-3.282 1.12-.793 2.311-1.58 3.584-2.07 2.21-.847 4.46-.563 6.47.629 1.375.813 2.622 1.82 3.895 2.778.178.134.31.204.448.2.132.004.265-.066.443-.2 1.273-.958 2.525-1.965 3.894-2.778 2.021-1.192 4.261-1.476 6.476-.628 1.278.488 2.459 1.276 3.579 2.07 1.446 1.022 2.739 2.248 4.18 3.28z" clipRule="evenodd"></path>
                            </svg>

                            <div style={{ width: '100%', position: 'relative' }}>
                                <input width="100%" type="search" placeholder="Comida, restaurantes, tiendas, productos,..." data-qa="input" id="input" autoComplete="off" aria-label="Comida, restaurantes, tiendas, productos,..." role="searchbox" className="style-input" ></input>
                            </div>
                        </form>

                        <a role="button" className="style-a">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#6A696E" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/**Right */}
            <div id="login-cart" className="flex">
                <a className="style-login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#6A696E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"></path>
                    </svg>
                </a>

                <div>
                    <button className="style-btn">
                        <span className="style-span">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#6a696e" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}