import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./Profile";
import User from "./User";
import Post from "./Post";
import Reels from "./Reels";
import Save from "./Save";
import Tagged from "./Tagged";
// import CreatePost from "./assets/Components/Create/CreatePost";
import Notification from "./assets/Components/Notification/Notification";
import { UserProvider } from "./context/userContext";
import PrivateRoute from "./components/privateroute";

function App() {
  const [isCreatePostVisible, setCreatePostVisible] = useState("false"); // bug is that i am not able to pass true bez when
  //try to do it navbar get undefined value but same thing is working in CreatePost component
  const [isNotification, setNotification] = useState(false);
  const handleCreatePostVisibility = () => {
    setCreatePostVisible((prevVisible) => !prevVisible);
  };
  const HandleNotifiction = () => {
    setNotification((prevNotification) => !prevNotification);
  };
// Privateroute to for authorization 
  const router = createBrowserRouter([
    {
      path: "/:naam",
      element: (

        <PrivateRoute> 
        <User />
      </PrivateRoute>
      ),
      children: [
        { path: "", element: <Post /> },
        { path: "reels", element: <Reels /> },
        { path: "save", element: <Save /> },
        { path: "tagged", element: <Tagged /> },
      ],
    },
    {
      path: "/",
      element: (
        <>
          <Navbar
            HandleNotification={HandleNotifiction}
            handle={handleCreatePostVisibility}
          />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar
            HandleNotification={HandleNotifiction}
            handle={handleCreatePostVisibility}
          />
          <Profile />
        </>
      ),
    },
  ]);

  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
        {/* <CreatePost visibility={isCreatePostVisible}  name="harsh" onClose={handleCreatePostVisibility}/> */}
        <Notification Notification={isNotification} />
      </UserProvider>
    </>
  );
}

export default App;
