import { increment,decrement,reset } from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  let count = useSelector((state)=>{
    return state.count;
  });
  let dispatch = useDispatch();

return (
    <>
      <h1>REDUX : Counter</h1>
      <p>Count : {count}</p>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </>
  )
}

export default App
