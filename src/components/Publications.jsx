
import { FaUniversity, FaAward } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";

const Publications = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white py-12 my-10 rounded-lg md:my-28 px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Research and Publications</h2>
        <p className="text-gray-300">
          Here is a summary of my academic research and publications throughout my education.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-6 grid justify-center bg-slate-900 p-3 rounded-lg space-y-8">
        <h1 className="text-3xl font-bold text-center">Researches</h1>
        {/* Research Education */}
        <div className="flex items-center space-x-6">
          <div className="text-yellow-500 text-4xl flex-shrink-0">
          <GiFullMotorcycleHelmet />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Helmet Detection System</h3>
            <p className="text-gray-300 mt-2">
              <strong>Model:</strong> Yolo v8, Yolo v11
            </p>
            <p className="text-gray-300 mt-1">
              <strong> Accuracy:</strong> 98%
            </p>
          </div>
        </div>

        {/* Scholarship */}
        <div className="flex items-center space-x-6">
          <div className="text-green-500 text-4xl flex-shrink-0">
          <RiMentalHealthFill />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Health Care Chatbot</h3>
            <p className="text-gray-300 mt-2">
              Used LLm models
            </p>
            <p className="text-gray-300 mt-1">
              <strong>Accuracy</strong> 92%
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid justify-center bg-slate-900 p-3 rounded-lg space-y-8">
      <h1 className="text-3xl font-bold text-center">Publications</h1>
        {/* Research publications */}
        <div className="flex items-center space-x-6">
          <div className="text-yellow-500 text-4xl flex-shrink-0">
          <IoIosPaper />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Real-Time PCB Flaw Detection a Vision for More Efficient and Accurate Future</h3>
            <p className="text-gray-300 mt-2">
              <strong>Institution:</strong> IEEE International Conference
            </p>
            <p className="text-gray-300 mt-1">
              <strong> Paper Link:</strong> <a className="text-xl underline px-4" target="_blank" href="https://ieeexplore.ieee.org/document/10674952">Read it.</a>
            </p>
          </div>
        </div>

        {/* Scholarship */}
        <div className="flex items-center space-x-6">
          <div className="text-green-500 text-4xl flex-shrink-0">
          <IoIosPaper />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Enhance Detection of Pancreatic Cancer Using Convolution Neural Network</h3>
            
            <p className="text-gray-300 mt-1">
              <strong>Institution:</strong> Springer International Conference
            </p>
            <p className="text-gray-300 mt-1">
              <strong> Paper Link:</strong> <a className="text-xl underline px-4" target="_blank" href="">Accepted. Waiting for publication.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
