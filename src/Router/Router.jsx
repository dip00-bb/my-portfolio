import { createBrowserRouter } from "react-router";
import App from "../App";
import FullProjectDetails from "../Component/FullProjectDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'projectDetails/:id',
        loader:()=>fetch('/projectDetails.json'),
        element:<FullProjectDetails/>
    }
])