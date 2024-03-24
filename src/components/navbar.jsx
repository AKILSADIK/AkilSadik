// import "../styles/navbar.css";
import style from "../styles/navbar.module.css";
import pdf from "../pages/Images/Akil Resume.pdf";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navSec ps-xl-0 ">
      <div
        id="nav-menu"
        className={`container-fluid fixed-top pe-2 ps-2 pe-sm-5 ps-sm-5 ps-md-5  ps-lg-0 ps-xl-5   pe-md-5  pe-lg-0 pe-xl-5 pt-1 pb-1 ${style.nav_menu}`}
      >
        <a className="navbar-brand d-flex ms-lg-5 ms-md-0  align-items-center  " href="#">
          <span className={style.span}>A</span>kil{""}
        </a>
        <button
          className={`navbar-toggler ${style.hamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-center ">
            <a
              className="nav-link home active me-lg-2 me-xl-5  text-info-emphasis "
              aria-current="page"
              href="#home"
            >
              HOME
            </a>
            <a
              className="nav-link about active me-lg-2 me-xl-5  text-info-emphasis "
              aria-current="page"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="nav-link skills active me-lg-2 me-xl-5 text-info-emphasis "
              aria-current="page"
              href="#skills"
            >
              SKILLS
            </a>
            <a
              className="nav-link projects active me-lg-2 me-xl-5  text-info-emphasis"
              aria-current="page"
              href="#projects"
            >
              PROJECTS
            </a>
            <a
              className="nav-link active me-lg-2 me-xl-5 text-info-emphasis"
              aria-current="page"
              href="#github"
            >
              GITHUB
            </a>
            <a
              className="nav-link contact active me-lg-2 me-xl-5  text-info-emphasis"
              aria-current="page"
              href="#contact"
            >
              CONTACT
            </a>
            <a
              className="nav-link resume active   me-5 text-info-emphasis"
              id="resume-link-1"
              aria-current="page"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1bBV9GQK-jZvAxMtxRHyT9pNbry278LC2/view?usp=sharing"
                )
              }
              download="Akil Resume"
              href={pdf}
            >
              <button id="resume-button-1"  className={`${style.button} ms-5`}>
                <span className={style.buttonContent}>Resume </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
