import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom';
import Subscribe from "./components/Subscribe";
function App() {
  return (
 <>
 <Main>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/subscribe' element={<Subscribe/>}/>
    </Routes>
    </Main>
 </>
  );
}

export default App;
