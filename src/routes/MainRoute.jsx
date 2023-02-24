import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import { Layout } from '../components/Layout'
import { AddNewProduct } from '../pages/AddNewProduct';
import { CartPage } from '../pages/CartPage';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { ProductPage } from '../pages/ProductPage';
import { SignUp } from '../pages/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'addproduct',
                element: <AddNewProduct/>
            },
            {
                path: '/:categoria/:id',
                element: <ProductPage />
            },
            {
                path: '/cart',
                element: <CartPage/>
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path:'/login',
        element: <Login/>
    }
]);

export const MainRoute = () => {
    return (
        <RouterProvider router={ router } />
    )
}