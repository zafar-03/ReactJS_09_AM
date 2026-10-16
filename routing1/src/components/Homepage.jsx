import React from "react";

function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Learn Without Limits
              </h1>

              <p className="lead mt-3">
                Improve your skills with interactive courses, quizzes,
                and practical learning resources.
              </p>

              <div className="mt-4">
                <button className="btn btn-light btn-lg me-2">
                  Get Started
                </button>

                <button className="btn btn-outline-light btn-lg">
                  Explore Courses
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className="bg-white text-dark rounded-4 p-5 shadow">
                <h2 className="fw-bold">Start Learning Today</h2>
                <p className="text-muted">
                  Access quality learning content anytime, anywhere.
                </p>

                <div className="row mt-4">
                  <div className="col-4">
                    <h3 className="fw-bold text-primary">50+</h3>
                    <small>Courses</small>
                  </div>

                  <div className="col-4">
                    <h3 className="fw-bold text-primary">10K+</h3>
                    <small>Students</small>
                  </div>

                  <div className="col-4">
                    <h3 className="fw-bold text-primary">100+</h3>
                    <small>Lessons</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-muted">
              Everything you need to make learning simple and effective.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-5 text-primary mb-3">
                  🎥
                </div>
                <h4 className="fw-bold">Video Lessons</h4>
                <p className="text-muted">
                  Learn through easy-to-understand video lessons
                  created by experienced instructors.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-5 text-success mb-3">
                  📝
                </div>
                <h4 className="fw-bold">Interactive Quizzes</h4>
                <p className="text-muted">
                  Test your knowledge with quizzes and improve
                  your understanding of every topic.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-5 text-warning mb-3">
                  📊
                </div>
                <h4 className="fw-bold">Track Progress</h4>
                <p className="text-muted">
                  Monitor your learning progress and achieve
                  your goals step by step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-light py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Popular Courses</h2>
            <p className="text-muted">
              Start learning from our most popular courses.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-primary mb-3">
                    Web Development
                  </span>

                  <h4 className="fw-bold">React JS</h4>

                  <p className="text-muted">
                    Learn React from basics to advanced concepts
                    with practical projects.
                  </p>

                  <button className="btn btn-primary">
                    View Course
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-success mb-3">
                    Programming
                  </span>

                  <h4 className="fw-bold">Python</h4>

                  <p className="text-muted">
                    Build a strong programming foundation with
                    Python programming.
                  </p>

                  <button className="btn btn-success">
                    View Course
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-warning text-dark mb-3">
                    Backend
                  </span>

                  <h4 className="fw-bold">Node JS</h4>

                  <p className="text-muted">
                    Learn backend development using Node.js,
                    Express and MongoDB.
                  </p>

                  <button className="btn btn-warning">
                    View Course
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-5">
        <div className="container">
          <div className="bg-dark text-white rounded-4 p-5 text-center">
            <h2 className="fw-bold">
              Ready to Start Learning?
            </h2>

            <p className="lead">
              Join thousands of students and start your learning journey.
            </p>

            <button className="btn btn-primary btn-lg">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;