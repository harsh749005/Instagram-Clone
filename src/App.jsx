import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import User from "./User";
import Post from "./Post";
import Reels from "./Reels";
import Save from "./Save";
import Tagged from "./Tagged";
import CreatePost from "./assets/Components/Create/CreatePost";
import Notification from "./assets/Components/Notification/Notification";

function App() {
  const [isCreatePostVisible, setCreatePostVisible] = useState("false"); // bug is that i am not able to pass true bez when 
  //try to do it navbar get undefined value but same thing is working in CreatePost component
  const [isNotification,setNotification] = useState(false);
  const handleCreatePostVisibility = () => {
    setCreatePostVisible((prevVisible) => !prevVisible );
  };
  const HandleNotifiction=()=>{
    setNotification((prevNotification)=>!prevNotification);
  }

  const router = createBrowserRouter([
    {
      path: "/:naam",
      element: <User />,
      children: [
        { path: "", element: <Post /> },
        { path: "reels", element: <Reels /> },
        { path: "save", element: <Save /> },
        { path: "tagged", element: <Tagged /> },
      ],
    },
    { path: "/", element: <><Navbar HandleNotification={HandleNotifiction} handle={handleCreatePostVisibility}/><Home /></> },
    { path: "/login", element: <><Navbar HandleNotification={HandleNotifiction} handle={handleCreatePostVisibility}/><Login /></> },
    { path: "/profile", element: <><Navbar HandleNotification={HandleNotifiction} handle={handleCreatePostVisibility}/><Profile /></> },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <CreatePost visibility={isCreatePostVisible}  name="harsh" onClose={handleCreatePostVisibility}/>
      <Notification Notification={isNotification}/>
    </>
  );
}

export default App;
