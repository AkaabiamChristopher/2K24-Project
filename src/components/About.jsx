import React from 'react';

function About() {
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold inline-block">About Us</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Our Vision',
                            description: 'To be a leading institution that transforms lives through education, innovation, and service to humanity.',
                            icon: (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                        },
                        {
                            title: 'Our Mission',
                            description: 'To provide quality education that empowers students with knowledge, skills, and character for leadership and service.',
                            icon: (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Our Values',
                            description: 'Excellence, Integrity, Innovation, Community, and Respect form the foundation of everything we do.',
                            icon: (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-indigo-900 mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 mb-0">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;