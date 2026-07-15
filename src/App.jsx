import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import ViewPosts from "./components/ViewPosts";
import ViewAll from "./components/Viewall";
import Navbar from "./components/Navbar";


function App() {

  return (
    <BrowserRouter>

    

      <Routes>

        <Route 
          path="/" 
          element={<SignIn />} 
        />

        <Route 
          path="/signup" 
          element={<SignUp />} 
        />

        <Route 
          path="/create" 
          element={<CreatePost />} 
        />

        <Route 
          path="/viewmyposts" 
          element={<ViewPosts />} 
        />

        <Route 
          path="/viewall" 
          element={<ViewAll />} 
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;