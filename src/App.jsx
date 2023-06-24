import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/project/:id' element={<Project/>}/>
        <Route path='/sign_up' element={<SignUp/>}/>
        <Route path='/sign_in' element={<SignIn/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}