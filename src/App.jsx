import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/sign_up' element={<SignUp/>}/>
        <Route path='/sign_in' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}