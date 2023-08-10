import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Dash Verse Software Company. All
          rights reserved.
        </p>
        <p className="text-center mt-2">
          Your Trusted Partner in Digital Marketing, SEO, Website Design, and
          Graphics Design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
