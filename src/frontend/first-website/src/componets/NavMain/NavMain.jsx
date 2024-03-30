import "./NavMain.css"

function NavMain() {

    return(
        <nav className="NavBar">
            <a href="/" className="HomeTitle">The Webpage</a>
            <div className="NavbarList">
                <ul>
                    <li>
                    <a href="/login">Login</a>
                    <a href="/sign-up">Sign-up</a>
                    </li>
                </ul>
            </div>    
        </nav>
    );
}

export default NavMain