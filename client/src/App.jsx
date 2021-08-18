// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
//import Master from "./Components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
     
    </>
  );
}

export default App;