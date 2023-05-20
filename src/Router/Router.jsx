import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddAToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import ToyDetails from "../Pages/SingleToy/ToyDetails";
import MyToy from "../Pages/Mytoy/MyToy";
import UpdatedPage from "../Pages/UpdatedToy/UpdatedPage";
import Updatedtoy from "../Pages/UpdatedToy/Updatedtoy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path:'/login',
        element:<Login/>

      },
      {
        path:'/register',
        element:<Register/>

      },
      {
        path:'/blog',
        element:<Blog/>

      },
      {
        path: '/alltoys',
        element:<PrivateRoute> <AllToys/> </PrivateRoute>

      },
      {
        path:'/addtoy',
        element:<AddToy/>
      },
      {
        path:'/toy/:id',
        element:  <ToyDetails />   ,
        loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)

      },
      {
        path:'/mytoys',
        element:<MyToy/>
      },
      {
        path: '/updatedtoy/:id', 
        element: <Updatedtoy />,
        loader: ({params}) => fetch(`http://localhost:5000/updatedtoy/${params.id}`)
      }

    ],
  },
]);

export default router;
