import { useMemo, useState } from "react"

function App() {
  const [count,setCount] = useState(0);

  let square = useMemo(()=>{
    return count*count;
  },[count]);

  return (
    <>
      <p>Count : {count}</p>
      <p>Square : {square}</p>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )

  // return (
  //   <section>
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <div className="container-fluid">
  //         <a className="navbar-brand" href="#">Navbar</a>
  //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //             <li className="nav-item">
  //               <a className="nav-link active" aria-current="page" href="#">Home</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#">Link</a>
  //             </li>
  //             <li className="nav-item dropdown">
  //               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //                 Dropdown
  //               </a>
  //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //                 <li><a className="dropdown-item" href="#">Action</a></li>
  //                 <li><a className="dropdown-item" href="#">Another action</a></li>
  //                 <li><hr className="dropdown-divider" /></li>
  //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
  //               </ul>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
  //             </li>
  //           </ul>
  //           <form className="d-flex">
  //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  //             <button className="btn btn-outline-success" type="submit">Search</button>
  //           </form>
  //         </div>
  //       </div>
  //     </nav>


  //     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  //       <div className="carousel-indicators">
  //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //       </div>
  //       <div className="carousel-inner">
  //         <div className="carousel-item active">
  //           <img src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVycyUyMGhkfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
  //           <div className="carousel-caption d-none d-md-block">
  //             <h5>First slide label</h5>
  //             <p>Some representative placeholder content for the first slide.</p>
  //           </div>
  //         </div>
  //         <div className="carousel-item">
  //           <img src="https://images.unsplash.com/photo-1607024301817-3bbc081205cd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBkZXNrdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
  //           <div className="carousel-caption d-none d-md-block">
  //             <h5>Second slide label</h5>
  //             <p>Some representative placeholder content for the second slide.</p>
  //           </div>
  //         </div>
  //         <div className="carousel-item">
  //           <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NGslMjB3YWxscGFwZXJzfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
  //           <div className="carousel-caption d-none d-md-block">
  //             <h5>Third slide label</h5>
  //             <p>Some representative placeholder content for the third slide.</p>
  //           </div>
  //         </div>
  //       </div>
  //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>
  //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>
  //     </div>


  //     <nav aria-label="Page navigation example">
  //       <ul className="pagination justify-content-end">
  //         <li className="page-item disabled">
  //           <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
  //         </li>
  //         <li className="page-item"><a className="page-link" href="#">1</a></li>
  //         <li className="page-item"><a className="page-link" href="#">2</a></li>
  //         <li className="page-item"><a className="page-link" href="#">3</a></li>
  //         <li className="page-item">
  //           <a className="page-link" href="#">Next</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </section>
  // )
}

export default App
