import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, editProduct } from "./redux/action";

function App() {
  const products = useSelector((state) => {
    return state.products
  });
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name =="" || price=="" ){
      return;
    }

    if (id) {
      dispatch(editProduct({
        id: id,
        "name": name,
        "category": category,
        "price": price,
        "brand": brand
      }));
    } else {
      dispatch(addProduct({
        id: products.length + 1,
        "name": name,
        "category": category,
        "price": price,
        "brand": brand
      }));
    }
      setName("");
      setCategory("");
      setPrice("");
      setBrand("");
      setId(null);
  }

  const handleEdit = (product) => {
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setBrand(product.brand);
    setId(product.id);
  }
  const handleReset = ()=>{
      setName("");
      setCategory("");
      setPrice("");
      setBrand("");
      setId(null);
  }

  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center mb-4">CRUD with REDUX</h1>

        {/* Product Form */}
        <div className="card shadow p-4 mb-5">
          <h3 className="mb-4">
            {(id) ? "Edit Product" : "Add Product"}
          </h3>

          <form>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  placeholder="Enter Product Name"
                  onChange={(e) => { setName(e.target.value) }}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  className="form-control"
                  placeholder="Enter Category"
                  onChange={(e) => { setCategory(e.target.value) }}
                  required

                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  className="form-control"
                  placeholder="Enter Price"
                  onChange={(e) => { setPrice(e.target.value) }}
                  required

                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  className="form-control"
                  placeholder="Enter Brand"
                  onChange={(e) => { setBrand(e.target.value) }}
                  required

                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  {(id) ? "Edit Product" : "Add Product"}
                </button>

                <button type="reset" className="btn btn-secondary ms-2"
                onClick={handleReset}
                >
                  Reset
                </button>
              </div>

            </div>
          </form>
        </div>


        {/* Product Table */}
        <div className="card shadow p-4">

          <h3 className="mb-4">Product List</h3>

          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped align-middle">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>₹{product.price}</td>
                        <td>{product.brand}</td>

                        <td>
                          <button className="btn btn-warning btn-sm me-2"
                            onClick={() => { handleEdit(product) }}
                          >
                            Edit
                          </button>

                          <button className="btn btn-danger btn-sm"
                            onClick={() => { dispatch(deleteProduct(product.id)) }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
