import React from "react";
import AboutPage from "./about-us";
import ContactPage from "./contact-us";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectPage from "./project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className=" flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dash Verse</h1>
        <p className="text-lg text-gray-600">
          Your Trusted Software Partner specializing in{" "}
          <span className="text-blue-500 font-semibold">Digital Marketing</span>
          , <span className="text-green-500 font-semibold">SEO</span>,{" "}
          <span className="text-purple-500 font-semibold">Website Design</span>,
          and{" "}
          <span className="text-red-500 font-semibold">Graphics Design</span>.
        </p>
        <AboutPage />
        <ProjectPage />
        <ContactPage />
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
