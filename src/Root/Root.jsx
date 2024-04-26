import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllTourists from "../Pages/AllTourists";
import AddTourists from "../Pages/AddTourists";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Update from "../Pages/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allTourists",
                element: <AllTourists></AllTourists>,
                loader: () => fetch(`http://localhost:5000/tourists`)
            },
            {
                path: "/addTourists",
                element: <PrivetRoute><AddTourists></AddTourists></PrivetRoute>
            },
            {
                path: "/myList",
                element: <PrivetRoute><MyList></MyList></PrivetRoute>,
                loader: () => fetch(`http://localhost:5000/tourists`)
            },
            {
                path: "/update/:id",
                element: <PrivetRoute><Update></Update></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/single-tourists/${params.id}`)
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