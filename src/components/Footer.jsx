export default function Footer() {
  return (
    <>
      <div
        className="container 
         text-white"
      >
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item text-white">
              <a
                className="nav-link text-white"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white"
                aria-current="page"
                href="#myself"
              >
                MySelf
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className="nav-link text-white"
                aria-current="page"
              >
                Skills & Tech
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Contact me
              </a>
            </li>
          </ul>
          <p className="text-center text-white">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}
