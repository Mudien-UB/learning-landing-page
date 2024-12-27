import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import AboutPage from '../pages/AboutPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
