import React from 'react';
import Nav from './Navbar';
import Hero from './Hero';
import Product from './Product';
import Testimonial from './Testimonials';
import Footer from './Footer';


export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#07101a] to-[#03121a] text-white">
            <Nav />
            <main className="flex-grow">
                <Hero />
                <Product />
                <Testimonial />
            </main>
            <Footer />
        </div>
    )
}