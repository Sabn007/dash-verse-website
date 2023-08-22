import Image from "next/image";
import React from "react";

const MessageCEO: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <div className="-mt-16 mb-4">
            <Image
              src="/aakash.jpg"
              alt="Testimonial Avatar"
              className="rounded-full w-48 h-48 mx-auto border-4 border-indigo-500"
              height={100}
              width={100}
            />
          </div>
          <p className="leading-relaxed text-lg">
            Acquiring a product team of this caliber typically demands months of
            effort, but with Dash Verse, it felt like an overnight
            transformation. Designed for startup velocity, they swiftly provided
            us with a highly capable product team that consistently delivered
            impeccably engineered solutions. This isn&apos;t my first
            collaboration with Dash Verse; in fact, they&apos;ve secured my
            trust through exceptional outcomes. Just like that, they&apos;ve
            proven to be an invaluable partner
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
