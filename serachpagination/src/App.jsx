import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const API = "http://localhost:3000/blogs";
  fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    response.json().then((data) => {
      setData(data);
    });
  });

  useEffect(() => {

  }, [data]);
  // ==========================
  const perPagesBlog = 3;
  const totalPages = Math.ceil(data.length / perPagesBlog);
  let [currentPage, setCurrentPage] = useState(1);

  let lastIndex = perPagesBlog * currentPage;    // 3 * 1   = 3     // 3 * 2  = 6
  let firstIndex = lastIndex - perPagesBlog;     // 3 - 3   = 0     // 6 - 3  = 3


  let currentPageData = data.slice(firstIndex, lastIndex);

  // ==========================





  return (
    <>
      <div className="container d-flex px-4 py-2">
        <input type="text" placeholder="Search Here" className="flex-grow-1 px-2 py-3 fs-3 rounded border-0 border-bottom" onChange={(e) => { setSearch(e.target.value) }} />
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2 my-4">
        <button onClick={()=>{setCurrentPage(currentPage-1)}} disabled={currentPage == 1}>Pre</button>
        {
          Array.from({ length: totalPages }).map((_, index) => {
            return (
              <button
                key={index}
                className="btn btn-primary"
                onClick={()=>{setCurrentPage(index+1)}}
              >
                {index + 1}
              </button>
            );
          })
        }
        <button onClick={()=>{setCurrentPage(currentPage+1)}} disabled={currentPage == totalPages}>Next</button>
      </div>

      <section className="container mt-4">
        <div className="row">
          {
            currentPageData.filter((element, index) => {
              return element.title.toLowerCase().includes(search.toLowerCase());
            }).map((element, index) => {
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 shadow-sm">

                    <img
                      src={element.image}
                      className="card-img-top"
                      alt={element.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <div className="card-body">
                      <p className="text-muted">ID : {element.id}</p>

                      <h5 className="card-title">
                        {element.title}
                      </h5>

                      <p className="card-text">
                        {element.description}
                      </p>

                      <p className="mb-1">
                        <b>Date:</b> {element.date}
                      </p>

                      <p className="mb-0">
                        <b>Author:</b> {element.author}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </>
  )
}

export default App
