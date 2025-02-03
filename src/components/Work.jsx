import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
    const projects = [
        {
            title: "Food Share",
            description:
                "Food Share is an innovative platform designed to connect individuals and communities for sharing surplus food, promoting sustainability, and reducing waste. By fostering a culture of sharing and collaboration, Food Share not only combats hunger but also supports environmental responsibility, creating a positive impact on both society and the planet.",
            year: "2024",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/djN81Bv/Screenshot-2025-01-05-172153.png",
            liveLink: "https://ariful-eco-adventure.netlify.app/",
            githubLink: "#",
        },
        {
            title: "Movie Portal",
            description:
                "Movie Portal is an engaging platform designed to provide users with easy access to a vast library of movies across various genres and languages. It ensures a tailored cinematic experience for every user by offering personalized recommendations, reviews, and ratings.",
            year: "2024",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/dLc2Yz4/Screenshot-2025-01-05-172219.png",
            liveLink: "https://my-movie-portal.netlify.app/",
            githubLink: "#",
        },
        {
            title: "Eco Adventure",
            description:
                "Eco Adventure connects nature enthusiasts with eco-friendly travel experiences and outdoor activities. It offers curated adventure packages that emphasize sustainability, allowing users to explore the beauty of nature while minimizing their environmental impact.",
            year: "2024",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/zmgWyJZ/Screenshot-2025-01-05-172237.png",
            liveLink: "https://ariful-eco-adventure.netlify.app/",
            githubLink: "#",
        },
    ];

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Info */}
                                <div className="mb-4">
                                    <div className="flex justify-between border-b border-gray-700 py-2">
                                        <span className="text-gray-400">Year</span>
                                        <span className="text-white">{project.year}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-700 py-2">
                                        <span className="text-gray-400">Role</span>
                                        <span className="text-white">{project.role}</span>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveLink}
                                        className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                                    >
                                        <FaGithub />
                                        <span>See on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
