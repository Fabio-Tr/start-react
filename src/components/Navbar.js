import navLogo from '../Ft2.gif';

function Navbar() {

    const refreshPage = () => {
        window.location.reload();}

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0" fixed="top">
                <div className="container-fluid project-navbar align-items-center">
                    <a className="navbar-brand" href="#" onClick={refreshPage}>
                        <img src={navLogo} alt="Il logo di Fabio Trani" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler mytoggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <a href="https://www.linkedin.com/in/fabio-trani/">
                            <i className="fa-brands fa-linkedin fs-2 px-1"></i>
                        </a>
                        <a href="https://github.com/Fabio-Tr">
                            <i className="fa-brands fa-github fs-2 px-1"></i>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" id="home-nav" aria-current="page" href="#">About me</a>
                            <a className="nav-link" id="cv-nav" href="#">CV</a>
                            <a className="nav-link" id="project-nav" href="#">Progetti</a>
                            <a className="nav-link" id="contact-nav" href="#">Contattami</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    export default Navbar