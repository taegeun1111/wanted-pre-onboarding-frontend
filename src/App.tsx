import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import TokenProvider from "./store/TokenProvider";

function App() {

  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          {/*로그인*/}
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>

          {/*Todo*/}
          <Route path="/todo" element={<Todo/>}/>

          {/*404*/}
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
