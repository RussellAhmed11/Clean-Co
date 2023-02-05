import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Services from '../Pages/Services';

export const publicRoute=[
    {path:"/", name:"Home", Component:Home},
    {path:"/about", name:"About", Component:About},
    {path:"/services", name:"Services", Component:Services},
    {path:"/contact", name:"Contact", Component:Contact},
    {path:"/login", name:"Login", Component:Login}
  ]