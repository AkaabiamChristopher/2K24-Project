import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Events from './components/Event';
import Gallery from './components/Gallery';
import Footer from './components/footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <Navbar setIsLoginModalOpen={setIsLoginModalOpen} setIsSignupModalOpen={setIsSignupModalOpen} />
            <main>
                <Hero />
                <About />
                <Faculty />
                <Events />
                <Gallery />
            </main>
            <Footer />
            <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
            <SignupModal isOpen={isSignupModalOpen} setIsOpen={setIsSignupModalOpen} />
        </div>
    );
}

export default App;