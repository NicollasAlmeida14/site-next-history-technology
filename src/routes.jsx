import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import FinancialSimulator from "./pages/FinancialSimulator";
import Login from './pages/Login'
import Register from './pages/Register'
import Plans from "./pages/Plans";
import Metrics from "./pages/Metrics";
import Dashboard from "./pages/Dashboard";

import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ScrollToTop>
                <Home />
            </ScrollToTop>
        )
    },
    {
        path: '/simulador-financeiro-nh3',
        element: (
            <ScrollToTop>
                <FinancialSimulator />
            </ScrollToTop>
        )
    },
    {
        path: '/login-nh3',
        element: (
            <ScrollToTop>
                <Login />
            </ScrollToTop>
        )
    },
    {
        path: '/cadastro-nh3',
        element: (
            <ScrollToTop>
                <Register />
            </ScrollToTop>
        )
    },
    {
        path: '/planos-nh3',
        element: (
            <ScrollToTop>
                <Plans />
            </ScrollToTop>
        )
    },
    {
        path: '/metricas-nh3',
        element: (
            <ScrollToTop>
                <Metrics />
            </ScrollToTop>
        )
    },
    {
        path: '/dashboard',
        element: (
            <ScrollToTop>
                <Dashboard />
            </ScrollToTop>
        )
    }
])

export default router