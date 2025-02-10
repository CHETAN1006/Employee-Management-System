// import React from 'react'
// import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import Home from '../components/hero/Home'
// import AddEmp from '../components/addEmp/AddEmp'
// import UpdateEmp from '../components/updateEmp/UpdateEmp'
// import AboutUs from '../components/aboutUS/AboutUs'
// import Login from '../components/login/Login'
// import Register from '../components/register/Register'


// export default function Routepath() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/addEmp' element={<AddEmp/>}/>
//           <Route path= '/updateEmp' element={<UpdateEmp/>}/>
//           <Route path ='/aboutUs' element={<AboutUs/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/register' element={<Register/>}/>
//         </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }



import { Routes, Route } from "react-router-dom";
import Home from "../components/hero/Home"
import AddEmp from "../components/addEmp/AddEmp";
import Login from "../components/login/Login"
import Register from "../components/register/Register";
import AboutUs from "../components/aboutUS/AboutUs"
import UpdateEmp from "../components/updateEmp/UpdateEmp";

export default function RoutePath() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addEmp" element={<AddEmp />} />
            <Route path="/updateEmp" element={<UpdateEmp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}



