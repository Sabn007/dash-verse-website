import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import "../../globals.css";

const CareerPage: React.FC = () => {
  const jobVacancies = [
    {
      title: "Frontend Developer",
      image: "/wordpress.jpg",
      description: "Design and implement user interfaces for web applications.",
    },
    {
      title: "Backend Engineer",
      image: "/wordpress.jpg",
      description:
        "Develop server-side logic and database architecture for applications.",
    },
    {
      title: "React JS Developer Intern",
      image: "/wordpress.jpg",
      description: "Assist in building web applications using React JS.",
    },
    {
      title: "React Native Developer Intern",
      image: "/wordpress.jpg",
      description: "Contribute to mobile app development using React Native.",
    },
    {
      title: "WordPress Intern",
      image: "/wordpress.jpg",
      description: "Gain experience in website development with WordPress.",
    },
    // Add more job vacancies
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg mb-6">
          We&apos;re always looking for talented individuals to join us in our
          journey. If you&apos;re passionate about technology and innovation,
          we&apos;d love to hear from you!
        </p>
        <div className="border-t-2 pt-6">
          <h2 className="text-2xl font-bold mb-4">Current Job Openings</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {jobVacancies.map((job) => (
              <li key={job.title} className="border p-4 rounded-lg shadow">
                <img
                  src={job.image}
                  alt={job.title}
                  className="mb-2"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          {/* Contact information or application form */}
          <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
          <p className="mb-4">
            Interested in joining our team? Send your resume and cover letter to{" "}
            <a
              href="mailto:dashverse1@gmail.com"
              className="text-blue-500 mr-1"
            >
              dashverse1@gmail.com
            </a>
            or
            <a
              target={"_blank"}
              href="http://forms.gle/fMgZhHMsBbtkAhZR9"
              className="text-blue-500 ml-1"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
