const Header = () => {
    return (<div className="header">
        <div className="zigzag"></div>
        <img className="bg" src="/bg.png" />
        <div className="transition"></div>
        <div className="content">
            <img id="logo" src="/logo.png" />
            <a id="playbutton" href="https://www.roblox.com/games/15783753029/BETA-v0-2-JJT-Money-Empire" className="glightbox_video"> 
                <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                    <circle className="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                    <path className="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#FAB20E"></path>
                </svg>
            </a>
        </div>


    </div>);
}

export default Header;