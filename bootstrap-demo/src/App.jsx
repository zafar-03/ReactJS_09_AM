// Compoments
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import "./App.css";

function App() {

  return (
    <>
      <header className="position-absolute w-100">
        <div className="bg-black">
          <nav className="container d-flex justify-content-between py-3  text-white  py-2">
            <div className="d-flex gap-4">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-1"><MdEmail />contact@example.com</a>
              <p className="d-flex align-items-center gap-1 m-0"><MdPhone />+1 5589 55488 55</p>
            </div>
            <ul className="list-unstyled d-flex justify-content-center gap-4 m-0">
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
            <ul className="list-unstyled d-flex justify-content-center gap-4 m-0 ">
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

      <div className="my-bg ">
        <section className="d-flex container h-100  align-items-center">
          <aside className="row flex-grow-1 gap-5 ">
            <div className="col d-flex flex-column align-items-start gap-2">
              <p className="bg-success text-white fw-bolder px-3 py-2 rounded-4">Innovative Solutions</p>
              <h1 className="text-white display-5 fw-bolder">Transform Your Business with Modern Technology</h1>
              <p className="text-secondary fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
              <div className="d-flex gap-4 align-items-center">
                <button className="bg-success h5 text-white border-0 px-3 py-2 rounded-2">Explore Services</button>
                <button className="bg-transparent text-success h5 border-0"><FaInstagram /> Watch Demo</button>
              </div>

              <div className="d-flex text-white gap-5">
                <aside className="d-flex flex-column">
                  <span className="text-success h3">500+</span>
                  <span>Projects Completed</span>
                </aside>
                <aside className="d-flex flex-column">
                  <span className="text-success h3">98%</span>
                  <span>Client Satisfaction</span>
                </aside>
                <aside className="d-flex flex-column">
                  <span className="text-success h3">24/7</span>
                  <span>Support Available</span>
                </aside>
              </div>


            </div>
            <div className="col row align-self-center">
              <main className="col-6 p-2 ">
                <aside className="my-class-2 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 gap-2"><FaFacebook size={"32px"} color="#198754" /> Zafar</aside>
              </main>
              <main className="col-6 p-2">
                <aside className="my-class-2 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 gap-2"><FaFacebook size={"32px"} color="#198754" /> Zafar</aside>
              </main>
              <main className="col-6 p-2">
                <aside className="my-class-2 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 gap-2"><FaFacebook size={"32px"} color="#198754" /> Zafar</aside>
              </main>
              <main className="col-6 p-2">
                <aside className="my-class-2 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 gap-2"><FaFacebook size={"32px"} color="#198754" /> Zafar</aside>
              </main>
            </div>
          </aside>
        </section>
      </div>

      <div className="">
        <section className="container d-flex">
          <div className="flex-grow-1 col-xxl-8 px-4 py-5">
            <div className=" row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6 position-relative">
                <img src="https://bootstrapmade.com/content/demo/Passion/assets/img/about/about-square-8.webp" className="d-block mx-lg-auto img-fluid rounded-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

                <div className="bg-white position-absolute d-flex p-3 gap-2 rounded-4 placeholder-p-1 align-items-center">
                    <aside className="bg-secondary p-1 d-flex rounded">
                      <FaInstagram size={"24px"}/>
                    </aside>
                    <aside>
                      <b>Excellence Award</b>
                      <p className="m-0">Digital Innovation 2023</p>
                    </aside>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column gap-3">
                <h1 className="display-5 fw-bold lh-1 mb-3">Transforming Ideas Into Reality Since 2015</h1>
                <p className="fw-bolder">We are a passionate team of innovators dedicated to creating exceptional digital experiences that drive meaningful results for businesses worldwide.</p>
                <p>Our journey began with a simple vision: to bridge the gap between cutting-edge technology and human-centered design. Today, we've grown into a trusted partner for companies seeking to transform their digital presence and accelerate their growth.</p>
                <p>Through collaborative partnerships and innovative solutions, we've helped hundreds of organizations achieve their goals while building lasting relationships founded on trust, transparency, and exceptional results.</p>

                <div className="border-top border-bottom mb-3 py-4 d-flex text-center">
                  <aside className=" flex-grow-1 d-flex flex-column">
                    <span className="text-success h3">8+</span>
                    <span>Years Experience</span>
                  </aside>
                  <aside className=" flex-grow-1 d-flex flex-column">
                    <span className="text-success h3">450+</span>
                    <span>Projects Completed</span>
                  </aside>
                  <aside className=" flex-grow-1 d-flex flex-column">
                    <span className="text-success h3">25</span>
                    <span>Team Members</span>
                  </aside>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-success btn-lg px-4 me-md-2 rounded-101">Discover Our Work</button>
                  <button type="button" className="btn btn-outline-success btn-lg px-4 rounded-101">Meet Our Team</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>

  )
}

export default App
