import React from 'react';

function Hero() {
    return (
        <section
            id="home"
            className="hero min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-2 sm:px-4 lg:px-4 bg-[url('https://res.cloudinary.com/dsznu7kho/image/upload/v1755180091/Federal-Government-College-Kaduna_ngnspb.png')] bg-cover bg-center bg-no-repeat bg-black bg-opacity-70 text-white"
        >
            <div className="max-w-7xl mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-start ml-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left shadow-md">
                            <span className="block">Federal Government College Kaduna Graduating Class of 2K24</span>
                            <span className="italic text-yellow-400 text-3xl">
                                Celebrating Excellence and Achievement Memories, Milestones, and Many More
                            </span>
                        </h1>
                        <div className="flex space-x-4">
                            <a
                                href="#events"
                                className="btn-primary px-6 py-3 rounded-full text-base font-bold uppercase tracking-wider bg-yellow-400 text-indigo-900 hover:bg-yellow-500 transition shadow-md"
                            >
                                Events
                            </a>
                            <a
                                href="#gallery"
                                className="border-2 border-white px-6 py-3 rounded-full text-base font-bold uppercase tracking-wider text-white hover:bg-white hover:bg-opacity-10 transition shadow-md"
                            >
                                Gallery
                            </a>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-yellow-400 p-4 rounded-lg shadow-lg hidden md:block">
                            {/* <p className="text-indigo-900 font-bold text-lg">Celebrating Excellence</p> */}
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        {/* Empty div to maintain layout balance */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;