import React from 'react';

function Events() {
    const events = [
        {
            // title: 'Graduation 2024',
            // description: 'We celebrated the achievements of our graduating class of 2024 in this grand ceremony.',
            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187182/OJRD4500_efbtqj.jpg',

        },
        {

            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186188/JJPJ3690_nhd5by.jpg',

        },
        {


            image: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179670/2025_05_08_19_02_IMG_0916_qr051t.jpg',

        },
    ];

    return (
        <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold inline-block">Past Events</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                            <div className="relative">
                                <a href={event.image} target="_blank" rel="noopener noreferrer">
                                    <img src={event.image} alt={event.alt} className="w-full h-48 object-cover" />
                                </a>
                                <div className="absolute top-4 left-4 bg-yellow-400 text-indigo-900 rounded px-3 py-1 font-bold">
                                    {event.date}
                                </div>
                            </div>
                            <div className="p-6">
                                {/* <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4">{event.description}</p> */}
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {event.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;