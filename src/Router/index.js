import React from 'react'
import { Home } from '../Pages/Home'
import { AnimeDetails } from '../Pages/AnimeDetails'
import { Login } from '../Pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const Router = () => {
    const isLoggedin = true
    return (
        <div>
            <BrowserRouter>
                <Routes>

            <Route path="/" element={isLoggedin ? <Home /> : <Login />} />

             <Route path="/anime/:id" element={<AnimeDetails />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Router


