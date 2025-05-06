import { Link } from "react-router-dom"; 

const Header = () => {
    return (
        <>
            <header>
                <h2>Dev FullStack</h2>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">Sobre</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;