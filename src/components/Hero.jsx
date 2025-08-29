function Hero() {
    return (
        <section id="home" className="hero min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-4 lg:px-8 relative">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dsznu7kho/image/upload/v1755180091/Federal-Government-College-Kaduna_ngnspb.png')",
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto min-h-[600px] flex items-center">
                <div className="w-full">
                    <div className="text-center md:text-left max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="block mb-2">Federal Government College Kaduna</span>
                            <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-300 italic">
                                Graduating Class of 2024
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                            Celebrating Excellence and Achievement
                            <br />
                            <span className="text-lg text-gray-300">Memories, Milestones, and Many More</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
