import React from "react";

const Testimonials: React.FC = () => {
  const teamMember = [
    {
      image: "/aakash.jpg",
      name: "Sabin Maharjan",
      role: "CEO",
      content:
        "Exceptional service! Their team's expertise and dedication transformed our project into a remarkable success story.",
    },
    {
      image: "/susan.jpg",
      name: "Susan Adhikari",
      role: "CTO",
      content:
        "Highly impressed by their professionalism and innovative solutions that brought tangible results to our business.",
    },
    {
      image: "/aakash.jpg",
      name: "Aakash koirala",
      role: "COO",
      content:
        "Transforming possibilities into realities & empowering innovation through technology, shaping a digital tomorrow.",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl md:text-3xl  font-bold uppercase">
            testimonials
          </div>
          <div className="border-b-4 border-orange-500 -mt-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0 lg:space-x-10">
          {teamMember.map((item) => (
            <div className="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
              <div className="aspect-w-1 aspect-h-1 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 -mt-20">
                <img src={item.image} className="rounded-full" alt="" />
              </div>
              <p className="text-center text-sm p-5">{item?.content}</p>
              <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                <h1 className="text-orange-500 text-lg font-semibold">
                  {item.name}
                </h1>
                <p className="text-black text-sm lg:mt-[5px]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
