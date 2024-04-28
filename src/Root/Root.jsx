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
import ViewDetails from "../Pages/ViewDetails";
import CountriesData from "../Pages/CountriesData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },
            {
                path: "/allTourists",
                element: <AllTourists></AllTourists>,
                loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },
            {
                path: "/details/:id",
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://tourism-server-beta.vercel.app/single-tourists/${params.id}`),
            },
            {
                path: "/addTourists",
                element: <PrivetRoute><AddTourists></AddTourists></PrivetRoute>
            },
            {
                path: "/myList",
                element: <PrivetRoute><MyList></MyList></PrivetRoute>,
                loader: () => fetch(`https://tourism-server-beta.vercel.app/tourists`)
            },
            {
                path: "/countries/:countryName",
                element: <PrivetRoute><CountriesData></CountriesData></PrivetRoute>,
                loader: ({params}) => fetch(`https://tourism-server-beta.vercel.app/countries/${params.countryName}`)
            },
            {
                path: "/update/:id",
                element: <PrivetRoute><Update></Update></PrivetRoute>,
                loader: ({ params }) => fetch(`https://tourism-server-beta.vercel.app/single-tourists/${params.id}`)
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