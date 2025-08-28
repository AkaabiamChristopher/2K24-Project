import React from 'react';

function Faculty() {
    const facultyMembers = [
        {
            // name: 'Mr Caleb Theophilus',
            // role: 'Head Boy',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184477/BFDN2786_acacqb.jpg',

        },
        {
            // name: 'Miss Sani Maryam',
            // // role: 'Head Girl',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755260401/IMG-20250815-WA0003_xo2kej.jpg',

        },
        {
            // name: 'Mr Umar Faruq',
            // // role: 'Asst Head Boy',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187584/QNCP0120_ksdxg7.jpg',
        },
        {
            // name: 'Miss Akembeer Euphemia',
            // role: 'Asst Head Girl',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187575/QLHG2281_ljbjhv.jpg',

        },
        {
            // name: 'Mr Akaabiam Christopher',
            // // role: 'Head of Sports',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186767/MEKP5087_rpplnp.jpg',
        },
        {
            // name: 'Mr James Garba',
            // // role: 'Asst Head of Sports',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187156/OBHR1954_wfkzah.jpg',

        },
        {
            // name: 'Mr Gabriel Onoja',
            // // role: 'Head Squad',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186641/LRNV2451_javaru.jpg',
        },
        {
            // name: 'Mr Abdulazeez',
            // role: 'Head Of Children',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184853/DYGK7066_qfdrp2.jpg',
        },
        {
            // name: 'Mr Mark',
            // role: 'Bad Boy of the Year',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179977/2025_05_08_19_02_IMG_0976_wppjpx.jpg',

        },
        {
            // name: 'Miss Melody',
            // role: 'Administrator',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179867/2025_05_08_19_02_IMG_0958_jiwb58.jpg',
        },
    ];

    return (
        <section id="faculty" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold inline-block">Our Distinguished Heads</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Meet the heads guiding the Class of 2024</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                            <div className="relative">
                                <a href={member.image} target="_blank" rel="noopener noreferrer">
                                    <img src={member.image} alt={member.alt} className="w-full h-64 object-cover" />
                                </a>
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-sm opacity-80">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faculty;