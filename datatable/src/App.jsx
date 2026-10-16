import { useEffect, useMemo, useState } from "react";
import { IoFilter } from "react-icons/io5";

function App() {
  const API = "http://localhost:3000/employees";
  const [allData, setAllData] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        setAllData(data);
      })
    });
  }, []);
  // ===================
  const [perPagesData,setPerPagesData] = useState(25);
  const [currentPage,setCurrentPage] = useState(1);
  const [issorted,setIsSorted] = useState(false);

  let totalPages = Math.ceil(allData.length/perPagesData);

  let lastIndex = currentPage * perPagesData;
  let firstIndex = lastIndex - perPagesData;

  let currentPageData = allData.slice(firstIndex,lastIndex);
  // ===================

  let filterData = useMemo(()=>{
      if(!issorted){
        return [...currentPageData];
      }
      return [...currentPageData].sort((a,b)=>{
        return a.age-b.age;
      })
  },[currentPageData,issorted]);
  const hnadleFilter = ()=>{
    if(!issorted)
      setIsSorted(true);
    else  
    setIsSorted(false);
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Employee List</h2>
        <div className="d-flex py-3">
          <input type="text" placeholder="Search Here" className="flex-grow-1 py-2 px-3 rounded border-0 border-bottom" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>EMPLOYEE ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th className="d-flex justify-content-between align-items-center">AGE
                    <IoFilter onClick={hnadleFilter}/>
                </th>
                <th>DEPARTMENT</th>
                <th>SALARY</th>
                <th>LOCATION</th>
              </tr>
            </thead>

            <tbody>
              {
                filterData.filter((element)=>{
                  return element.name.toLowerCase().includes(search.toLowerCase());
                }).map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.age}</td>
                      <td>
                        <span className="badge bg-primary">
                          {element.department}
                        </span>
                      </td>
                      <td>₹{element.salary}</td>
                      <td>{element.city}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                    {/* Rows Per Page */}
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-bold mb-0">
                        Rows per Page:
                      </label>

                      <select className="form-select form-select-sm w-auto"
                        onChange={(e)=>{setPerPagesData(e.target.value)}}
                      >
                        <option selected={perPagesData == 5}>5</option>
                        <option selected={perPagesData == 25}>25</option>
                        <option selected={perPagesData == 50}>50</option>
                        <option selected={perPagesData == 100}>100</option>
                      </select>
                    </div>

                    {/* Page Information */}
                    <div className="text-muted">
                      Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                      <span className="ms-1">(Total {allData.length} Entries)</span>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary btn-sm"
                        disabled={currentPage==1}
                        onClick={()=>{setCurrentPage(currentPage-1)}}
                      >
                        Pre
                      </button>

                      <button className="btn btn-primary btn-sm"
                        disabled={currentPage==totalPages}
                        onClick={()=>{setCurrentPage(currentPage+1)}}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
