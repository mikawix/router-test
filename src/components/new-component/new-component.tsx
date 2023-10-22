import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile } from '../profile/profile';
import { Login } from '../login/login'; // Import your Profile component

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Profile />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default AppRouter;