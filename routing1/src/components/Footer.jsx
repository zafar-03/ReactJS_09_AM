import {FaFacebook, FaLinkedin} from "react-icons/fa";
function Footer() {
    return (
        <>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">

                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href=""><FaFacebook/></a></li>
                                        <li><a className="hover-target" href=""><FaLinkedin/></a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>Copyright &copy; 2019 <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" /> All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer;