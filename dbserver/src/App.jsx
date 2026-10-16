import { useState } from "react";

function App() {
  const API = "http://localhost:3000/blog";
  const [myList, setMyList] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState(null);


  fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    response.json().then((data) => {
      setMyList(data);
    });
  })

  const handleClick = (e) => {
    // e.preventDefault();
    const blog = {
      title, author, description, date, category
    };


    if (!id) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    }else{
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    }
  }

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


  const handleEdit = (blog) => {
    setId(blog.id);
    setTitle(blog.title);
    setAuthor(blog.author);
    setDate(blog.date);
    setDescription(blog.description);
    setCategory(blog.category);

  }

  
  return (
    <>
      <div className="text-center">
        <br />

        <form>
          <input type="text" value={title} placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
          <br />
          <br />
          <input type="text" value={author} placeholder="Author" onChange={(e) => { setAuthor(e.target.value) }} />
          <br />
          <br />
          <input type="text" value={description} placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} />
          <br />
          <br />
          <input type="text" value={category} placeholder="category" onChange={(e) => { setCategory(e.target.value) }} />
          <br />
          <br />
          <input type="text" value={date} placeholder="date" onChange={(e) => { setDate(e.target.value) }} />
          <br />
          <br />
          <button onClick={handleClick}>{(id) ? "Edit" : "Add"}</button>
        </form>
      </div>
      <div className="container mt-4">
        <div className="row g-4">

          {
            myList.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 shadow">
                    <div className="card-body">
                      <h6 className="text-muted">Blog  : {index + 1}</h6>
                      <h4 className="card-title">{element.title}</h4>
                      <h6 className="text-primary">AUTHOR : {element.author}</h6>
                      <p className="card-text">
                        {element.description}
                      </p>
                      <p className="text-secondary mb-0">
                        <strong>DATE :</strong> {element.date}
                      </p>
                    </div>

                    <div className="p-4 d-flex justify-content-evenly">
                      <button onClick={() => { handleDelete(element.id) }} className="text-white bg-danger border-0 py-1 px-2 fw-bold rounded">DELETE</button>
                      <button onClick={() => { handleEdit(element) }} className="text-black bg-black-50 border-0 py-1 px-2 fw-bold rounded">EDIT</button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
