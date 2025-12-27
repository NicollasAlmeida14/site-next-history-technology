import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import FinancialSimulator from "./pages/FinancialSimulator";
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Home />
        )
    },
    {
        path: '/simulador-financeiro-nh3',
        element: (
            <FinancialSimulator />
        )
    },
    {
        path: '/tela-de-login',
        element: (
            <Login />
        )
    },
    {
        path: '/tela-de-cadastro',
        element: (
            <Register />
        )
    }
])

export default router