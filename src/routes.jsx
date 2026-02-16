import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import FinancialSimulator from "./pages/FinancialSimulator";
import Login from './pages/Login'
import Register from './pages/Register'
import Plans from "./pages/Plans";
import Metrics from "./pages/Metrics";
import Dashboard from "./pages/Dashboard";

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
        path: '/login-nh3',
        element: (
            <Login />
        )
    },
    {
        path: '/cadastro-nh3',
        element: (
            <Register />
        )
    },
    {
        path: '/planos-nh3',
        element: (
            <Plans />
        )
    },
    {
        path: '/metricas-nh3',
        element: <Metrics />
    },
    {
        path: '/dashboard',
        element: (
            <Dashboard />
        )
    }
])

export default router