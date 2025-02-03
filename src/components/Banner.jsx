
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";
import "animate.css"; // Importing Animation.css for additional effects

const Banner = () => {
    // Direct download link
    const googleDriveCVLink = "https://drive.google.com/uc?export=download&id=108AZAgcDkTaSbgEEUremUfC4iwJvckfc";

    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-white p-8">
            {/* Text Section */}
            <div className="flex-1">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I am <br />
                    <span className="text-yellow-200 animate__animated animate__flash animate__delay-2s">
                        Ariful Anik
                    </span>
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-300 mb-6 animate__animated animate__fadeInUp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    A front-end developer passionate about building accessible, user-friendly, and visually appealing websites.
                </motion.p>
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* Contact Button */}
                    <a
                        href={googleDriveCVLink}
                        download="Mahin_Mia_CV.pdf" // Optional: specify filename
                        className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                    >
                        <GoDownload />
                        <span>Download CV</span>
                    </a>
                    {/* Social Icons */}
                    <a
                        href="https://www.linkedin.com/in/md-ariful-islam-anik-2656981b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Ariful-Anik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaGithub />
                    </a>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                className="flex-1 mt-8 md:mt-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/TRRbfD1/img.png" // Ensure this is the correct image URL
                        alt="Ariful Anik"
                        className="w-full md:h-[780px] object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
