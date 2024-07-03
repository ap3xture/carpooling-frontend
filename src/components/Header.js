const Header = (props) => {
    return (
        <header>
            <nav className="navbar">
                <a className="logo" href="#">Carpooling App<span>.</span></a>
                <ul className="menu-links">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Signup</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header