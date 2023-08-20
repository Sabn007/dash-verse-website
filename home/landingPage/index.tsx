import Image from "next/image";
import { FaCode, FaUsers, FaTools } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full h-64 relative">
        <Image
          src="/digital.jpg" // Replace with your image URL
          alt="Software Company Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="max-w-3xl text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Innovate, Transform, Succeed
        </h1>
        <p className="text-lg text-gray-600">
          We are a startup software company, dedicated to delivering
          cutting-edge solutions that drive business growth and digital
          transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-16">
        <div className="flex flex-col items-center space-y-2">
          <FaCode className="text-3xl text-blue-500" />
          <h2 className="text-xl font-semibold">Custom Software Development</h2>
          <p className="text-gray-600 text-center">
            Tailored software solutions to address your unique business needs.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaUsers className="text-3xl text-green-500" />
          <h2 className="text-xl font-semibold">Collaborative Approach</h2>
          <p className="text-gray-600 text-center">
            We work closely with you to ensure your vision becomes reality.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaTools className="text-3xl text-purple-500" />
          <h2 className="text-xl font-semibold">Cutting-Edge Technology</h2>
          <p className="text-gray-600 text-center">
            Leveraging the latest tools and technologies to deliver top-notch
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
