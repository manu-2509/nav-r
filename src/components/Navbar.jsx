import "./Navbar.css"
export const Navbar=()=>{
    return(
        <div className="navbar">
            <h3>LOGOBAKERY</h3>
            <div className="mid">
                <p>Services</p>
                <p>Projects</p>
                <p>About</p>
            </div>
            <button className="btn">Contact</button>
        </div>
    )
}