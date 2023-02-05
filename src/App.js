
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { publicRoute } from './Routes/PublicRoutes';
function App() {
  return (
      <Navbar>
       <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/> */}
        {
        publicRoute.map(({path,Component},index)=>(<Route key={index} path={path} element={<Component/>}/>))
        }
       </Routes>
      </Navbar>
  );
}

export default App;
