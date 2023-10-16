import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HomePage from "../Pages/Home/HomePage/HomePage";
import CaInformation from "../Pages/Components/CaInformation/CaInformation";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/information",
            element: <CaInformation></CaInformation>
        },
      ]
    },
  ]);