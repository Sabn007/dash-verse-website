import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600">
        Welcome to Dash Verse, your partner in digital transformation and
        creative innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <ServiceItem
          title="Digital Marketing"
          description="Crafting tailored strategies to engage customers and drive conversions."
          icon="🚀"
        />
        <ServiceItem
          title="SEO"
          description="Optimizing your online presence to attract organic traffic and enhance visibility."
          icon="🔍"
        />
        <ServiceItem
          title="Website Design"
          description="Creating stunning and user-centric websites for seamless experiences."
          icon="💻"
        />
        <ServiceItem
          title="Graphics Design"
          description="Bringing your brand's narrative to life through captivating visuals."
          icon="🎨"
        />
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
      <div className="text-2xl mb-2">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;
