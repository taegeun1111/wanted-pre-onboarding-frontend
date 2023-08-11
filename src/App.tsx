import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/notFound/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/todo" element={<Todo/>}/>

        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
