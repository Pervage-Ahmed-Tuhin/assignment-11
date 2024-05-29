import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/Authprovider/AuthProvider.jsx';
import AvailableFood from './Components/AvailableFood/AvailableFood.jsx';
import AddFood from './Components/AddFood/AddFood.jsx';
import MyfoodRequest from './Components/MyFoodRequest/MyfoodRequest.jsx';
import ManageFoods from './Components/ManageFoods/ManageFoods.jsx';
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import UpdateProfile from './Components/UpdateUser/UpdateProfile.jsx';
import FoodDetails from './Components/FoodDetails/FoodDetails.jsx';
import UpdateFood from './Components/Update/UpdateFood.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://food-sharing-server-site.vercel.app/featuredFood')
      },
      {
        path: '/availableFood',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('https://food-sharing-server-site.vercel.app/featuredFood')
      },
      {
        path: '/addFood',
        element: <PrivateRoute> <AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/MyRequest',
        element: <PrivateRoute><MyfoodRequest></MyfoodRequest></PrivateRoute>,
        // loader: () =>fetch('https://food-sharing-server-site.vercel.app/requestedFood')
      },
      {
        path: '/manageMyFoods',
        element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/availableFoodDetails/:id',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-sharing-server-site.vercel.app/featuredFood/${params.id}`)
      },
      {
        path: '/updateDataBase/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-sharing-server-site.vercel.app/updateFood/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
