
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sucess from './sucess.jsx';
import Fail from './fail.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<App/>}></Route>
   <Route path="/sucess" element={<Sucess/>}></Route>
   <Route path="/fail" element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
    
  
)
