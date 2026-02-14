import { createBrowserRouter, RouterProvider } from "react-router"
import Login from '@pages/login'
import DefaultLayout from "./app/layout/default-layout";
import Home from "@pages/home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  { 
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        element: <Home/>
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
