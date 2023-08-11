import React from "react";

const ProjectPage: React.FC = () => {
  const projects = [
    {
      title: "Load Nepal Website",
      image: "/loadnepal.png",
      description:
        "Manages all your shipments on one smart and convenient platform",
    },
    {
      title: "Load Nepal Admin Dashboard",
      image: "/loadnepal.png",
      description: "Developed dashboard for admin and user too",
    },
    // Add more projects
  ];

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
      <div className="border-t-2 pt-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li key={project.title} className="border p-4 rounded-lg shadow">
              <img
                src={project.image}
                alt={project.title}
                style={{ maxWidth: "100%", height: "auto" }}
                className="mb-2"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
