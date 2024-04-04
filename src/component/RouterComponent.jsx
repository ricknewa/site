import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutComponent from './components/AboutComponent'
import BookingComponent from './components/BookingComponent'
import ContactComponent from './components/ContactComponent'
import GalleryComponent from './components/GalleryComponent'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './RegisterComponent'

export default function RouterComponent() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/booking" element={<BookingComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/gallery" element={<GalleryComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
            </Routes>
        </div>
    )
}