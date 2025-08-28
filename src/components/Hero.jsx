import React from 'react';

function Hero() {
    return (
        <section id="home" className="hero pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            <span className="block">Federal Government college Kaduna Graduating class of 2K24 </span>
                            <span className="italic text-yellow-400 text-3xl">Celebrating Excellence and Achievement
                                Memories, milestones,and many more</span>
                        </h1>
                        <div className="flex space-x-4">
                            <a
                                href="#events"
                                className="btn-primary px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-yellow-400 text-indigo-900 hover:bg-yellow-500 transition"
                            >
                                View past events
                            </a>
                            <a
                                href="#gallery"
                                className="border-2 border-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:bg-opacity-10 transition"
                            >
                                Gallery
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dsznu7kho/image/upload/v1755180091/Federal-Government-College-Kaduna_ngnspb.png"
                                alt="Federal Government College Kaduna"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-lg shadow-lg hidden md:block">
                                {/* <p className="text-indigo-900 font-bold text-lg">Celebrating Excellence</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;