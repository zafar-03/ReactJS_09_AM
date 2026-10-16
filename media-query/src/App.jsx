import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaBars } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"
import './App.css'


function App() {
  return (
    <>
      <header className=" w-100">
        <div className="bg-black">
          <nav className="container d-flex justify-content-between py-3  text-white  py-2">
            <div className="d-flex gap-4">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-1"><MdEmail /><span className="d-none d-md-inline">contact@example.com</span></a>
              <p className="d-flex align-items-center gap-1 m-0"><MdPhone /><span className="d-none d-md-inline">+1 5589 55488 55</span></p>
            </div>
            <ul className="list-unstyled d-flex justify-content-center gap-4 m-0 bg-danger">
              <li>
                <a href="#" className="text-white text-decoration-none"><FaInstagram /></a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none"><FaFacebook /></a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none"><FaTwitter /></a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none"><FaLinkedin /></a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none"><FaGithub /></a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="container d-flex justify-content-between py-3 align-items-center">
          <div className="fs-3 fw-bolder text-white">Passion</div>
          <div>
            <FaBars className="d-lg-none" color="white" />
            <ul className="list-unstyled d-none d-lg-flex justify-content-center gap-4 m-0 ">
              <li><a href="#" className="text-decoration-none text-white">Home</a></li>
              <li><a href="#" className="text-decoration-none text-white">About</a></li>
              <li><a href="#" className="text-decoration-none text-white">Services</a></li>
              <li><a href="#" className="text-decoration-none text-white">Portfolio</a></li>
              <li><a href="#" className="text-decoration-none text-white">Team</a></li>
              <li><a href="#" className="text-decoration-none text-white">Dropdown</a></li>
              <li><a href="#" className="text-decoration-none text-white">Megamenu</a></li>
              <li><a href="#" className="text-decoration-none text-white">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="">
        <aside className="container p-5">
          <section className=" row gap-3 gap-md-0">
            <main className="col-md-4">
              <p className="m-0 bg-success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a minima fuga sunt, veritatis tenetur. Veritatis fugit eveniet exercitationem iure.</p>
            </main>
            <main className="col-md-4">
              <p className="m-0 bg-success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a minima fuga sunt, veritatis tenetur. Veritatis fugit eveniet exercitationem iure.</p>
            </main>
            <main className="col-md-4">
              <p className="m-0 bg-success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a minima fuga sunt, veritatis tenetur. Veritatis fugit eveniet exercitationem iure.</p>
            </main>
        </section>
        </aside>
      </div>
    </>
  )
}

export default App
