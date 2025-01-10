import Layout from '@/layouts/Layout';
import LayoutAdmin from '@/layouts/LayoutAdmin';
import About from '@/page/about';
import Dashboard from '@/page/admin/Dashboard';
import Manage from '@/page/admin/manage';
import Home from '@/page/Home';
import Notfound from '@/page/Notfound';
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >

                {/* Public */}
                <Route
                    element={
                        <Layout />
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>

                {/* Private */}
                <Route
                    path="admin"
                    element={
                        <LayoutAdmin />
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path="manage" element={<Manage />} />
                </Route>



                <Route path="*" element={<Notfound />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
