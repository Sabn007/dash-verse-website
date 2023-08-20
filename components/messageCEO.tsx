import React from "react";

const MessageCEO: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <div className="-mt-16 mb-4">
            <img
              src="/aakash.jpg"
              alt="Testimonial Avatar"
              className="rounded-full w-48 h-48 mx-auto border-4 border-indigo-500"
            />
          </div>
          <p className="leading-relaxed text-lg">
            It would have taken months to build the product team that we
            inherited overnight with Leapfrog. They’re built for startup speed,
            and they have consistently delivered a well-engineered product for
            us. Laudio is my second partnership with Leapfrog, and they have
            earned my trust.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Aakash Koirala
          </h2>
          <p className="text-gray-500">Dash Verse Founder</p>
        </div>
      </div>
    </section>
  );
};

export default MessageCEO;
