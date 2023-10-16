
 
import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Update from '../pages/Update';
import Root from '../Root/Root';
import HomeCard from '../HomeCard/HomeCard';
import UpdateCard from '../updateCard/UpdateCard';
import SingleCoffee from '../singleCoffee/singleCoffee';
import ErrorPage from '../Error/ErrorPage';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>,
                loader : () => fetch('https://coffe-server-site-hxjlqk8tc-riad-hasan-rajus-projects.vercel.app/coffees')
            },
            {
                path : '/getcoffee',
                element : <Details/>
            },
            {
                path : '/update/:id',
                element : <Update/>,
                loader : ({params}) => fetch(`https://coffe-server-site-hxjlqk8tc-riad-hasan-rajus-projects.vercel.app/coffees/${params.id}`)
            },
            {
                path : '/homecard',
                element : <HomeCard />,
                
            },
            {
                path : '/singlecoffee/:id',
                element : <SingleCoffee />,
                loader : ({params}) => fetch(`https://coffe-server-site-hxjlqk8tc-riad-hasan-rajus-projects.vercel.app/coffees/${params.id}`)
               
                
            }

        ]
    }
])
 
export default router;