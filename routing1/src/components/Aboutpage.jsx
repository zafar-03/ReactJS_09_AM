
import React from "react";

function Aboutpage() {
  return (
    <>
      {/* About Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Learn, grow, and achieve your goals with our learning platform.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="bg-light rounded-4 p-5 text-center">
                <div className="display-1">🎓</div>
                <h2 className="fw-bold mt-3">Learn Without Limits</h2>
                <p className="text-muted">
                  Quality education made simple, accessible, and practical.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">
                We Make Learning Simple
              </h2>

              <p className="text-muted">
                Our platform is designed to help students learn new skills
                through high-quality courses, video lessons, quizzes, and
                practical projects.
              </p>

              <p className="text-muted">
                Whether you are a beginner or looking to improve your
                existing skills, our learning resources help you learn at
                your own pace.
              </p>

              <button className="btn btn-primary mt-2">
                Start Learning
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="card-body">
                  <div className="display-5 mb-3">🎯</div>

                  <h3 className="fw-bold">Our Mission</h3>

                  <p className="text-muted">
                    Our mission is to provide simple, practical, and
                    affordable learning resources that help students
                    develop skills and build their careers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="card-body">
                  <div className="display-5 mb-3">🚀</div>

                  <h3 className="fw-bold">Our Vision</h3>

                  <p className="text-muted">
                    Our vision is to create a learning environment where
                    everyone can access quality education and continue
                    learning without limits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">What We Offer</h2>
            <p className="text-muted">
              Everything you need for a better learning experience.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4">
                <div className="display-5 mb-3">🎥</div>
                <h5 className="fw-bold">Video Lessons</h5>
                <p className="text-muted mb-0">
                  Easy-to-understand video lessons.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4">
                <div className="display-5 mb-3">📝</div>
                <h5 className="fw-bold">Quizzes</h5>
                <p className="text-muted mb-0">
                  Test your knowledge with interactive quizzes.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4">
                <div className="display-5 mb-3">💻</div>
                <h5 className="fw-bold">Projects</h5>
                <p className="text-muted mb-0">
                  Practice your skills with real projects.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4">
                <div className="display-5 mb-3">📊</div>
                <h5 className="fw-bold">Progress</h5>
                <p className="text-muted mb-0">
                  Track your learning progress easily.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold">10K+</h2>
              <p className="mb-0">Students</p>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold">50+</h2>
              <p className="mb-0">Courses</p>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold">100+</h2>
              <p className="mb-0">Lessons</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">95%</h2>
              <p className="mb-0">Satisfaction</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutpage;

