import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Shared/Home/Home";
import DatePicker from "../components/Shared/DatePicker/DatePicker";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://travel-guide-server-methubd.vercel.app/locations')
            },
            {
                path: '/hello',
                element: <DatePicker></DatePicker>
            }
        ]
    }
])

export default router;