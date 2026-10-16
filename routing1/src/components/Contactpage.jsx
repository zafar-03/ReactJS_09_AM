
import React from "react";

function Contactpage() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-3">
            Have a question? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* Contact Information */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Get In Touch</h2>

              <p className="text-muted">
                If you have any questions, suggestions, or need help,
                feel free to contact us.
              </p>

              <div className="mt-4">

                <div className="d-flex mb-4">
                  <div className="fs-3 me-3">📍</div>
                  <div>
                    <h5 className="fw-bold mb-1">Address</h5>
                    <p className="text-muted mb-0">
                      123 Learning Street, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="fs-3 me-3">📧</div>
                  <div>
                    <h5 className="fw-bold mb-1">Email</h5>
                    <p className="text-muted mb-0">
                      info@example.com
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="fs-3 me-3">📞</div>
                  <div>
                    <h5 className="fw-bold mb-1">Phone</h5>
                    <p className="text-muted mb-0">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="fs-3 me-3">🕐</div>
                  <div>
                    <h5 className="fw-bold mb-1">Working Hours</h5>
                    <p className="text-muted mb-0">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4">

                <h3 className="fw-bold mb-4">
                  Send Us a Message
                </h3>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Send Message
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="text-muted">
              Some common questions from our students.
            </p>
          </div>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                >
                  How can I start learning?
                </button>
              </h2>

              <div
                id="faqOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Choose a course and start learning through our
                  video lessons and practical exercises.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                >
                  Are the courses beginner friendly?
                </button>
              </h2>

              <div
                id="faqTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. Our courses are designed for beginners as well
                  as students who want to improve their existing skills.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqThree"
                >
                  Can I learn at my own pace?
                </button>
              </h2>

              <div
                id="faqThree"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. You can access the learning materials and
                  continue your learning at your own pace.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contactpage;

