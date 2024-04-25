import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllTourists from "../Pages/AllTourists";
import AddTourists from "../Pages/AddTourists";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/allTourists",
            element: <AllTourists></AllTourists>
        },
        {
            path: "/addTourists",
            element: <AddTourists></AddTourists>
        },
        {
            path: "/myList",
            element: <MyList></MyList>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;