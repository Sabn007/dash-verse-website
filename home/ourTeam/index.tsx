import { FC } from "react";

const TeamMember: FC<{
  name: string;
  role: string;
  imageFileName: string;
}> = ({ name, role, imageFileName }) => {
  const imageUrl = `/${imageFileName}`;

  return (
    <div className="flex items-center space-x-2 px-6 py-2 md:w-1/3 w-full">
      <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
        <img src={imageUrl} alt={name} className="" />
      </div>
      <div className="flex-col">
        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
          {name}
        </div>
        <div className="italic text-gray-500">{role}</div>
      </div>
    </div>
  );
};

const OurTeam: FC = () => {
  const teamMembers = [
    {
      name: "RC Koirala",
      role: "Head Director",
      imageFileName: "rc.jpg",
    },
    {
      name: "Rajat Uprety",
      role: "Director",
      imageFileName: "rajat.jpg",
    },
    {
      name: "Sabin Maharjan",
      role: "Team/Technical Lead",
      imageFileName: "sabin.jpeg",
    },
    {
      name: "Susan Adhikari",
      role: "Operation Manager",
      imageFileName: "susan.jpg",
    },
    {
      name: "Aakash Koirala",
      role: "SEO Analyst",
      imageFileName: "aakash.jpg",
    },
    {
      name: "Aakash Koirala",
      role: "Mobile Developer",
      imageFileName: "aakash.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 w-full">
      <div className="flex flex-col p-2 m-2 max-w-7xl">
        <div className="text-3xl font-medium">Meet Our Team</div>
        <div className="text-sm mx-2 md:text-xl text-stone-500">
          Meet the team members who have contributed for this company.
        </div>
        <div className="flex flex-wrap justify-center p-2 space-y-4 md:space-y-0 md:space-x-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageFileName={member.imageFileName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
