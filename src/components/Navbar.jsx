import React, { useState, useEffect } from 'react';

function Navbar({ setIsLoginModalOpen, setIsSignupModalOpen }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const target = document.querySelector(`#${id}`);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="bg-black shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <svg className="h-10 w-10 text-indigo-600" viewBox="0 0 40 40" fill="currentColor">
                                <path
                                    d="M20,0 C31.045695,0 40,8.954305 40,20 C40,31.045695 31.045695,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 Z M20,38 C29.941125,38 38,29.941125 38,20 C38,10.058875 29.941125,2 20,2 C10.058875,2 2,10.058875 2,20 C2,29.941125 10.058875,38 20,38 Z"
                                    fill="#1a365d"
                                />
                                <text x="10" y="25" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#f6ad55">
                                    FGCKD
                                </text>
                            </svg>
                            <span className="ml-2 text-xl font-bold text-white-900">FGCKD 2K24 SET </span>
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {['home', 'about', 'faculty', 'events', 'gallery'].map(section => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`${activeSection === section ? 'nav-active' : 'text-gray-700 hover:text-gray-900'
                                    } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                                onClick={e => handleNavClick(e, section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                        <div className="relative">
                            <button
                                onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                                className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium focus:outline-none"
                            >
                                Account
                                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isAuthMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <a
                                        href="#"
                                        onClick={e => {
                                            e.preventDefault();
                                            setIsAuthMenuOpen(false);
                                            setIsLoginModalOpen(true);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="#"
                                        onClick={e => {
                                            e.preventDefault();
                                            setIsAuthMenuOpen(false);
                                            setIsSignupModalOpen(true);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/3000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['home', 'about', 'faculty', 'events', 'gallery'].map(section => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`${activeSection === section ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    } block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={e => handleNavClick(e, section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="space-y-1">
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        setIsLoginModalOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    Login
                                </a>
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        setIsSignupModalOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;