import "./assets/App.css";

// const myStyles = {
//   color : "red"
// };


const myStyles = {
  myheading1 : {
    color : "navy"
  },
  myheading2 : {
    color : "lightblue"
  }
};

function App() {

  return (
    <section style={{fontFamily:"cursive",padding : "50px",backgroundColor : "#efefef"}}>
        <h1 style={myStyles.myheading1}>Hello</h1>
        <h2 style={myStyles["myheading2"]}>CSS</h2>
        <h3>Welcome to React</h3>
    </section>
  )
}

export default App