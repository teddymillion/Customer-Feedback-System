
import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import Home from './Home/Home'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Routes,Route } from "react-router-dom"
import About from "./About/About"
import Feedback from "./Feedback/Feedback"
import Login from "./Login/Login"
import Compliant from "./Compliant/Compliant"
import PageNotFound from "./PageNotFound"
const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route  index element={<Home/>} />
      <Route path='feedback' element={<Feedback/>} />
      <Route path='compliant' element={<Compliant/>} />
      <Route path='about' element={<About/>} />
      <Route path='login' element={<Login/>} />
      
      <Route path="*" element={<PageNotFound/>}/>

    </Route>


    
  )
)
function App() {


  return (
    <>
     <RouterProvider router={Router}/>
   
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


