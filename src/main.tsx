import React from "react";
import {useRoutes, BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Setting from "./setting/Setting";
import AllPosts from "./allposts/AllPosts";

import "./style.css";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rootData = [
    {
        path: "/",
        element: <App />,
        default: 0,
        children:[
        {
            path: "/setting",
            element: <Setting />
        },
        {
            path: "/allposts",
            element: <AllPosts />
        }
        ]
    }
];

const RssXRoot = ()=>{
    let routes = useRoutes(rootData);
    return routes
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RssXRoot/>
        </BrowserRouter>
    </React.StrictMode>
)
