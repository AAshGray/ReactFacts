import logo from "src/assets/react-logo.png"

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} className="nav-logo" alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}    