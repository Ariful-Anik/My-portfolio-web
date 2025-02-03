
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FeaturedProjects = () => {
    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Feature</h2>
                    <p className="text-gray-400">
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </p>
                </div>

                {/* Project-1 Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10 md:mb-44 lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/djN81Bv/Screenshot-2025-01-05-172153.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            Food Share
                        </h3>
                        <p className="text-gray-300 mb-6">
                        Food Share is an innovative platform designed to connect individuals and communities for sharing surplus food, promoting sustainability, and reducing waste. Through its user-friendly interface, people can easily donate or request food, ensuring that excess resources are redirected to those in need rather than being wasted. By fostering a culture of sharing and collaboration, Food Share not only combats hunger but also supports environmental responsibility, creating a positive impact on both society and the planet.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://ariful-eco-adventure.netlify.app/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project-2 Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10 md:mb-44 lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/dLc2Yz4/Screenshot-2025-01-05-172219.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            Movie Portal
                        </h3>
                        <p className="text-gray-300 mb-6">
                        Movie Portal is an engaging platform designed to provide users with easy access to a vast library of movies across various genres and languages. With features like personalized recommendations, reviews, and ratings, it ensures a tailored cinematic experience for every user. Whether you’re exploring trending blockbusters or revisiting timeless classics, Movie Portal makes discovering and enjoying movies seamless and enjoyable.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://my-movie-portal.netlify.app/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project-3 Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/zmgWyJZ/Screenshot-2025-01-05-172237.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            Eco Adventure
                        </h3>
                        <p className="text-gray-300 mb-6">
                        Eco Adventure is a dynamic platform that connects nature enthusiasts with eco-friendly travel experiences and outdoor activities. It offers curated adventure packages that emphasize sustainability, allowing users to explore the beauty of nature while minimizing their environmental impact. From hiking and camping to eco-tours, Eco Adventure inspires a deeper connection with the planet while promoting responsible tourism.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://ariful-eco-adventure.netlify.app/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;
